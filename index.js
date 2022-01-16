const Express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const tokens = [];

const app = new Express();
const router = Express.Router();

app.use(bodyParser.json());
app.use("/", router);

app.listen(3000, () => console.log("Server is running"));

//REGISTER WITH DEVICE TOKEN
router.post("/register", (req, res) => {
  tokens.push(req.body.token);
  res.status(200).json({ message: "Successfully registered FCM Token!" });
});

//SEND POST API WITH NOTIFICATION DATA
router.post("/notifications", async (req, res) => {
  try {
    const { title, body, imageUrl } = req.body;
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