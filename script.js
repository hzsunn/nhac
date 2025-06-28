const commonThumbnail = "music/IMG_0947.jpeg";

const tracks = [
  { name: "Em Ơi Em Đừng Khóc", file: "music/Emoiem.m4a" },
  { name: "Đừng Yêu Ai Em Nhé", file: "music/Dyaen.m4a" },
  { name: "E Là Không Thể", file: "music/Elakhongthe.m4a" },
  { name: "Gấp Đôi Yêu Thương", file: "music/Gap2.m4a" },
  { name: "Hạnh Phúc Cuối Cùng", file: "music/Hpcuoicung.m4a" },
  { name: "Tìm Về", file: "music/Timve.m4a" },
  { name: "Ngủ Ngon Nhé Vợ Tương Lai", file: "music/Nnn.m4a" },
  { name: "Nơi Này Có Anh", file: "music/Nnca.m4a" },

];

let currentTrackIndex = 0;
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const playlistEl = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio-player");

const trackImg = document.getElementById("track-img");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");

const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon"); // 👉 cần có icon con trong nút play
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const searchInput = document.getElementById("search");
const wave = document.getElementById("wave");

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}
function renderPlaylist(filter = "") {
  playlistEl.innerHTML = "";
  tracks
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((track, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
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
  trackArtist.textContent = "Đặng Hồng";
  audioPlayer.play();
  playIcon.classList.remove("fa-play");
  playIcon.classList.add("fa-pause");
  document.body.classList.add("playing");
  wave.classList.add("playing");
}

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    document.body.classList.add("playing");
    wave.classList.add("playing");
  } else {
    audioPlayer.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
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

audioPlayer.addEventListener("timeupdate", () => {
  progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
  currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  if (!isNaN(audioPlayer.duration)) {
    durationEl.textContent = formatTime(audioPlayer.duration);
  }
});

audioPlayer.addEventListener("ended", () => {
  nextBtn.click();
});

searchInput.addEventListener("input", (e) => {
  renderPlaylist(e.target.value);
});

renderPlaylist();
