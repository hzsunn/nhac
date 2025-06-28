const tracks = [
  { name: "Em Ơi Em Đừng Khóc", file: "music/Emoiem.m4a" },
  { name: "Bài Hát 2", file: "music/song2.mp3" },
  { name: "Bài Hát 3", file: "music/song3.mp3" }
];

let currentTrackIndex = 0;

const playlistEl = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio-player");
const searchInput = document.getElementById("search");
const toggleBtn = document.getElementById("toggle-playlist");

// Tạo danh sách bài hát
function renderPlaylist(filter = "") {
  playlistEl.innerHTML = "";
  tracks
    .filter(track => track.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((track, index) => {
      const li = document.createElement("li");
      li.textContent = track.name;
      li.onclick = () => playTrack(index);
      playlistEl.appendChild(li);
    });
}

function playTrack(index) {
  currentTrackIndex = index;
  audioPlayer.src = tracks[index].file;
  audioPlayer.play();
}

// Tự động chuyển bài khi hết
audioPlayer.addEventListener("ended", () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(currentTrackIndex);
});

// Tìm kiếm bài hát
searchInput.addEventListener("input", (e) => {
  renderPlaylist(e.target.value);
});

// Toggle danh sách phát
toggleBtn.addEventListener("click", () => {
  playlistEl.classList.toggle("hidden");
  toggleBtn.textContent = playlistEl.classList.contains("hidden") ? "📂" : "🎵";
});

// Gọi lúc đầu
renderPlaylist();
