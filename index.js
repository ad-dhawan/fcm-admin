const express = require("express");
const app = express();
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000

//ROUTE IMPORTS
const notificationRoute = require("./src/routes/notification");

//CONFIGURATION
dotenv.config();
const serviceAccount = require("./firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
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

app.listen(port, () => console.log(`Server is running on ${port}`));