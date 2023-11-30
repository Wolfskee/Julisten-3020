function togglePlayPause() {
  var audio = document.getElementById('audioPlayer');
  var playButton = document.querySelector('.player-controls button:nth-child(2)');
  if (audio.paused) {
    audio.play();
    playButton.textContent = '❚❚'; // Change to your pause icon
  } else {
    audio.pause();
    playButton.textContent = '►'; // Change to your play icon
  }
}

function prevSong() {
  // Your logic for previous song
}

function nextSong() {
  // Your logic for next song
}

function setSongPosition(container, event) {
  var audio = document.getElementById('audioPlayer');
  var width = container.clientWidth;
  var clickX = event.offsetX;
  var duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Update progress bar as the song plays
document.getElementById('audioPlayer').addEventListener('timeupdate', function() {
  var audio = document.getElementById('audioPlayer');
  var progressBar = document.querySelector('.progress-bar');
  var currentTime = document.querySelector('.current-time');
  var duration = audio.duration;
  var currentTimeSec = audio.currentTime;

  var progressPercent = (currentTimeSec / duration) * 100;
  progressBar.style.width = progressPercent + '%';

  currentTime.textContent = formatTime(currentTimeSec);
});

function formatTime(seconds) {
  var min = Math.floor(seconds / 60);
  var sec = Math.floor(seconds % 60);
  return (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
}
