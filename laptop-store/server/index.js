const express = require("express");
const path = require("path");
const cors = require("cors");
const laptops = require("./laptopData");
const app = express();

// Allows CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello everyone! This is a small API for Laptop Store");
});

// An api endpoint that returns a short list of laptops
app.get("/api/getLaptops", (req, res) => {
  res.json(laptops);
});

// Serve images
app.get("/dell-xps-13.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/img", "dell-xps-13.jpg"));
});

app.get("/asus-zenbook-flip-s.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/img", "asus-zenbook-flip-s.jpg"));
});

app.get("/huawei-matebook-pro.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/img", "huawei-matebook-pro.jpg"));
});

app.get("/macbook-pro-15.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/img", "macbook-pro-15.jpg"));
});

app.get("/samsung-notebook-9.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/img", "samsung-notebook-9.jpg"));
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/error.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
