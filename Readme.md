# All the News That's Fit to Scrape

Users can view and leave comments on the latest news using mongojs and Cheerio to scrape news from another site.

This app scrapes stories from PBS News Hour and displays them. Each scraped is saved to the database. 
The app scrapes and displays the following information for each article:

     * Headline - the title of the article
     * Summary - a short summary of the article
     * URL - the url to the original article
     * Photos
     * Bylines

  2. Users may leave comments on the articles displayed and revisit them later. Comments are saved to the database and associated with their articles. Users may delete comments left on articles. All stored comments are visible to every user.

### Tips

* Go back to Saturday's activities if you need a refresher on how to partner one model with another.

* Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; we don't want duplicates.

* Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

  * If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

### Helpful Links

* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Cheerio Documentation](https://github.com/cheeriojs/cheerio)

### Reminder: Submission on BCS

* Please submit the link to the Github Repository!

---

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

---

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)