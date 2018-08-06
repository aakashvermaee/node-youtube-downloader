import yt from "./yt";

const jq = yt.jq;
const foo = yt.foo;
const downloadVideo = yt.downloadVideo;
const downloadAudio = yt.downloadAudio;

// *Factory Design
function factory(cmdArg, id) {
  switch (cmdArg) {
    case 'clear':
      clear(id);
      break;
    case 'paste':
      paste();
      break;
    case 'dwndVideo':
      dwndVideo(id);
      break;
    case 'dwndAudio':
      dwndAudio(id);
      break;
    case 'submit':
      submit(id);
      break;
    default:
      return `Method doesn't exists`;
  }
};

const clear = (id) => {
  jq(id).val('');
}

// todo: write code to copy video URL/ID from clipboard
const paste = () => {}

const dwndVideo = (id) => {
  if (id) {
    const videoIdOrUrl = jq(id).val();
    console.log(videoIdOrUrl);
    downloadVideo(videoIdOrUrl)
      .then((videoIdOrUrl) => {
        displayVideoInfo(videoIdOrUrl, function () {
          console.log(videoIdOrUrl);
        });
      })
      .catch((err) => {})
  }
}

function displayVideoInfo(videoIdOrUrl, cb) {
  if (typeof cb === 'function') {
    cb();
  }
}

// todo: write code to download YouTube video as audio
const dwndAudio = (id) => {
  console.log(jq(id).val());
}

const submit = (id) => {
  foo(id);
}

module.exports = {
  factory
};
