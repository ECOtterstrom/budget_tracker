const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({body}, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/transaction", function(req, res) {
  db.Transaction.find({}).then(function(dbTransaction) {
    res.json(dbTransaction);
  });
});

router.put("/api/transaction/:id", function(req, res) {
  db.Post.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(function(dbTransaction) {
    res.json(dbTransaction);
  });
});

module.exports = router;