const db = require("../models");

// Defining methods for the booksController
module.exports = {

  create: function(req, res) {
    db.WmUser
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },

    findOne: function(req,res){
    db.WmUser
      .findOne({userEmail: req.params.email})
      .then(dbModel => res.json(dbModel))
     // .then(console.log(res.json(dbModel)))
      .catch(err => res.status(422).json(err));
    },

    findOneAndUpdate: function(req,res){
      console.log("in the request now");
    db.WmUser
      .findOneAndUpdate({'userEmail': 'mr.ear84@gmail.com'}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }



      //.catch(err=> console.log(err.message);
       // console.log('this is my error: ' + err.message) )
     // .catch(err => res.send({ succes: false, message: 'User already exist!' }));


     
      //.catch(err => res.send(500, { err: 'Saving first user failed!' }));
     // res.status(422).send(err));
    //  res.send(500, { err: 'Saving first user failed!' });

    //  .catch(err => console.log("the error is: " + err) );//res.status(422).json(err.message));
      //console.log(res);
  
};