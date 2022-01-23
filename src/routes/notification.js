const admin = require("firebase-admin");
const router = require("express").Router();
const TokenSchema = require("../model/token");

//REGISTER WITH DEVICE TOKEN
router.post("/register", async (req, res) => {
    try{
        TokenSchema.updateOne({}, {
            $addToSet : {token: [req.body.token]}
        }, {
          upsert: true //creates new document if none exists otherwise updates existing one
        }, function(err, result){
            if(err) {
              console.log('DATABASE UPDATE ERROR: ', err);
              res.status(502).json({ status: 502, token: req.body.token, message: "Couldn't register FCM Token" });
            } else {
              console.log('DATABASE UPDATED: ', result);
              res.status(200).json({ status: 200, token: req.body.token, message: "Successfully registered FCM Token!" });
            }
        })
    } catch (err) {
      res.status(500).json({ status: 500, message: "Internal Server Error", error: err });
    }
});

//SEND POST API WITH NOTIFICATION DATA
router.post("/send", async (req, res) => {
    try {
      const { title, body, imageUrl, tokens } = req.body;
      await admin.messaging().sendMulticast({
        tokens,
        notification: {
          title,
          body,
          imageUrl,
        },
      });
      res.status(200).json({ status: 200, message: "Successfully sent notifications!" });
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Something went wrong!" });
    }
});

//GET ALL TOKENS
router.get("/get_tokens", async (req, res) => {
  try {
    TokenSchema.find({}, function (err, tokens){
      if(err) res.status(404).json({ status: 404, message: "Tokens not found", tokens: tokens[0].token });
      else {
        // console.log(tokens[0].token);
        res.status(200).json({ status: 200, message: "Success", tokens: tokens[0].token });
      }
    })
  } catch(err) {
    res.status(500).json({ status: 500, message: "Internal Server Error", error: err });
  }
})

module.exports = router;