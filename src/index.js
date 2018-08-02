'use strict';

import apis from "../apis/index";

const controls = apis.controls;
const jquery = apis.yt.jq;

const videoIdInput = '#videoId';

// *Factory Design
jquery('#submit, #clear, #dwndVideo, #dwndAudio').click((e) => {
  controls.factory(e.target.id, videoIdInput);
});
