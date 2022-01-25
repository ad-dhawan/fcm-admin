const express = require("express");
const app = express();
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//ROUTE IMPORTS
const notificationRoute = require("./src/routes/notification");

//CONFIGURATION
dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    "type": process.env.FIREBASE_TYPE,
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT
  }),
});

//DB CONNECT
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
})
.then(() => console.log("Database connected!"))
.catch((err) => console.log(err));

//MIDDLEWARE
app.use(express.json());

//Route Middleware
app.use("/notification", notificationRoute);

app.listen(process.env.PORT || 3000, function(){
  console.log(`Server listening on port ${this.address().port} in ${app.settings.env} mode`);
});