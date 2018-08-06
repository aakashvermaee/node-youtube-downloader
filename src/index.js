'use strict';

import express from "express";
import apis from "../apis/index";

const app = express();
const PORT = process.env.PORT || 3000;

const controls = apis.controls;
const jquery = apis.yt.jq;

const videoIdInput = '#videoId';

// *Factory Design
jquery('#submit, #clear, #dwndVideo, #dwndAudio').click((e) => {
  controls.factory(e.target.id, videoIdInput);
});

// CORS HEADERS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-auth, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.listen(PORT, () => {
  console.log(`app running on PORT: ${PORT}`);
});
