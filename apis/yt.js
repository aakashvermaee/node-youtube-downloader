import jq from "jquery";
import YouTubePlayer from 'youtube-player';
import ytdl from 'ytdl-core';

// main function
function foo(id) {
  let videoIdOrUrl = jq(id).val();
  deleteAndAddNewYouTubePlayerNode('player-1');
  if (videoIdOrUrl.includes('http') || videoIdOrUrl.includes('https')) {
    let extractedVideoIdFromUrl = extractVideoIdFromURL(videoIdOrUrl);
    youtubePlayer(extractedVideoIdFromUrl);
  }
  youtubePlayer(videoIdOrUrl);

  // 1 Extract Video Id from the URL
  function extractVideoIdFromURL(videoUrl) {
    let videoId,
      indexOfQuestionMark;
    indexOfQuestionMark = videoUrl.lastIndexOf('?');
    videoId = videoUrl.substring((indexOfQuestionMark + 3));
    return videoId;
  };

  // 2 delete the existing video player node to load new div node
  // this new node will e replaced with iframe with new video id
  function deleteAndAddNewYouTubePlayerNode(playerEleId) {
    if (jq(`#${playerEleId}`).is('iframe')) {
      jq(`#${playerEleId}`)
        .remove();
      jq('#player')
        .append(`<div id=${playerEleId}></div>`);
    }
  };

  // 3 Call this method with the respective video Id
  function youtubePlayer(videoId) {
    YouTubePlayer('player-1', {
        videoId: videoId
      })
      .playVideo()
      .then(() => {
        console.log('Starting to play player1. It will take some time to buffer video before it start' + 's playing.');
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };
};

function downloadVideo(mayBeIdOrUrl) {
  return ytdl.getInfo(mayBeIdOrUrl);
};

function downloadAudio(mayBeIdOrUrl) {
  return ytdl.getInfo(mayBeIdOrUrl);
};

module.exports = {
  foo,
  jq,
  downloadVideo,
  downloadAudio
};
