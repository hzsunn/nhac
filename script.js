const commonThumbnail = "music/IMG_0947.jpeg";

const tracks = [
  { name: "Em Ơi Em Đừng Khóc", file: "music/Emoiem.m4a" },
  { name: "Chạy Về Khóc Với Anh", file: "music/song2.mp3" }
];

let currentTrackIndex = 0;
const playlistEl = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio-player");

const trackImg = document.getElementById("track-img");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");

const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const searchInput = document.getElementById("search");
const wave = document.getElementById("wave");

function renderPlaylist(filter = "") {
  playlistEl.innerHTML = "";
  tracks
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((track, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${commonThumbnail}" alt="${track.name}" />
        <div class="text"><strong>${track.name}</strong></div>
      `;
      li.addEventListener("click", () => playTrack(index));
      playlistEl.appendChild(li);
    });
}

function playTrack(index) {
  currentTrackIndex = index;
  const track = tracks[index];
  audioPlayer.src = track.file;
  trackImg.src = commonThumbnail;
  trackTitle.textContent = track.name;
  trackArtist.textContent = "Không rõ nghệ sĩ";
  audioPlayer.play();
  playBtn.textContent = "⏸";
  document.body.classList.add("playing");
  wave.classList.add("playing");
}

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = "⏸";
    document.body.classList.add("playing");
    wave.classList.add("playing");
  } else {
    audioPlayer.pause();
    playBtn.textContent = "▶️";
    document.body.classList.remove("playing");
    wave.classList.remove("playing");
  }
});

prevBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentTrackIndex);
});

nextBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(currentTrackIndex);
});

audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
});

progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

audioPlayer.addEventListener("ended", () => {
  nextBtn.click();
});

searchInput.addEventListener("input", (e) => {
  renderPlaylist(e.target.value);
});

renderPlaylist();
