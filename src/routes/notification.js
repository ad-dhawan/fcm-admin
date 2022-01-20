const router = require("express").Router();
const Token = require("../model/token");

//REGISTER WITH DEVICE TOKEN
router.post("/register", async (req, res) => {
    const token = new Token({
        tokens: req.body.token
    })

    try{
        token.save(function (err, result) {
            if(err) console.log('DATABASE SAVE ERROR: ', err);
            else console.log(result);
        })
        res.status(200).json({ token: req.body.token, message: "Successfully registered FCM Token!" });
    } catch (err) {
        console.log("REGISTRATION ERROR: ", err);
    }
});

//SEND POST API WITH NOTIFICATION DATA
router.post("/send", async (req, res) => {
    try {
      const { title, body, imageUrl } = req.body;
      await admin.messaging().sendMulticast({
        Token,
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