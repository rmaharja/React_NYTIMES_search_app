const db = require ("../models");

module.exports = {

  //find all articles
  // findAll: (req, res) => {
  //   console.log("Getting all articles in DB...");
  //   db.Article.find(req)
  //   //??What is the req.body?...Will have to console.log after adding stuff to database
  // }
  createNew: (req, res) => {
    db.Article
    .create(req.body)
    .then((dbData) => res.json(dbData))
    .catch((err) => res.status(422).json(err));
  },
  

}//end of module.exports