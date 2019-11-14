// Dependencies
var express = require("express");
var mongojs = require("mongojs");
const axios = require('axios');
const cheerio = require('cheerio');

var PORT = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'ejs');
//making static assets
app.use(express.static("public"));
//app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "news_db";
var collections = ["articles"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.get("/", function (req, res) {
    //sort articles
    db.articles.aggregate(
        [
            { $sort: { votes: -1 } }
        ], function (error, articles) {
            res.render("pages/home", {articles:articles});
        });
});

const url = 'https://news.ycombinator.com';
app.post("/scrape", function(req, res) {
    axios.get(url)
      .then(response => {
        data = [];
        const $ = cheerio.load(response.data);
        $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
          data.push({
            title : $(elem).text(),
            link : $(elem).find('a.storylink').attr('href')
          });
        });
     
        for(i in data){
            db.articles.find({ url: data[i].url }).count(function (error, count) {
                if (count > 0) {
                    return;
                }
                db.articles.insert({votes: 0, title: data[i].title, url : data[i].link});
            });
        }   
        res.redirect("/");
      })
      .catch(error => {
        console.log(error);
        res.redirect("/");
      })

  });
app.listen(5000, function(){
	console.log('listening on 5000');
});
