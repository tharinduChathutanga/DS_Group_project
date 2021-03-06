const app = require("./app");
const express = require('express');
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
payment-management
const bodyParser = require('body-parser');

//import routes
const mobliepayRoute = require('./routes/mobilePayRoute');
const cardpayRoute = require('./routes/cardPaymentRouter');
const postRoutes = require('./routes/postsDelivery');

//app middleware
app.use(bodyParser.json());
app.use(mobliepayRoute);
app.use(cardpayRoute);

app.use(postRoutes);

const cloudinary = require("cloudinary");


//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
const DB_URL =
  "mongodb+srv://project01:project01@dsgroupproject.9ehrs.mongodb.net/DSGroupProject?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log("DB connection error", err));

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on ${process.env.PORT}`);
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
//Unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
