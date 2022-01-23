const admin = require("firebase-admin");
const router = require("express").Router();
const TokenSchema = require("../model/token");

//REGISTER WITH DEVICE TOKEN
router.post("/register", async (req, res) => {
    try{
        TokenSchema.updateOne({}, {
            $addToSet : {token: [req.body.token]}
        }, {
          upsert: true
        }, function(err, result){
            if(err) {
              console.log('DATABASE UPDATE ERROR: ', err);
              res.status(502).json({ token: req.body.token, message: "Couldn't register FCM Token" });
            } else {
              console.log('DATABASE UPDATED: ', result);
              res.status(200).json({ token: req.body.token, message: "Successfully registered FCM Token!" });
            }
        })
    } catch (err) {
        console.log("REGISTRATION ERROR: ", err);
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
      res.status(200).json({ message: "Successfully sent notifications!" });
    } catch (err) {
      res
        .status(err.status || 500)
        .json({ message: err.message || "Something went wrong!" });
    }
  });

module.exports = router;