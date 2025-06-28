const commonThumbnail = "music/IMG_0947.jpeg";

const tracks = [
  { name: "Em Ơi Em Đừng Khóc", file: "music/Emoiem.m4a" },
  { name: "Đừng Yêu Ai Em Nhé", file: "music/Dyaen.m4a" },
  { name: "E Là Không Thể", file: "music/Elakhongthe.m4a" },
  { name: "Gấp Đôi Yêu Thương", file: "music/Gap2.m4a" },
  { name: "Hạnh Phúc Cuối Cùng", file: "music/Hpcuoicung.m4a" },
  { name: "Tìm Về", file: "music/Timve.m4a" },
  { name: "Ngủ Ngon Nhé Vợ Tương Lai", file: "music/Nnn.m4a" },
  { name: "Nơi Này Có Anh", file: "music/Noinaycoanh.m4a" },
  { name: "Ánh Nắng Của Anh", file: "music/Anca.m4a" },
  { name: "Đúng Cũng Thành Sai", file: "music/Dcts.m4a" },
  { name: "Điều Ước Giản Đơn", file: "music/Dugd.m4a" },
  { name: "Hẹn Ước Từ Hư Vô", file: "music/Henuoc.m4a" },
  { name: "Đơn Giản Anh Yêu Em", file: "music/Dgaye.m4a" },
  { name: "10 Mất 1 Còn 0", file: "music/1010.m4a" },
  { name: "Bản Tình Ca Đầu Tiên", file: "music/Btcdt.m4a" },
  { name: "Đếm Ngày Xa Em", file: "music/Demngayxaem.m4a" },
  { name: "Chỉ Là Muốn Nói", file: "music/Chila.m4a" },
  { name: "Anh Chẳng Sao Đâu", file: "music/Acsd.m4a" },
  { name: "Hai Chữ Đã Từng", file: "music/2cdt.m4a" },
  { name: "Dòng Thời Gian", file: "music/Dtg.m4a" },
    { name: "Ừ Có Anh Đây", file: "music/Ucoanhday.m4a" },
  { name: "Làm Vợ Anh Nhé", file: "music/Lvan.m4a" },
  { name: "Thương Em Đến Già", file: "music/Tedg.m4a" },
  { name: "Thằng Hầu", file: "music/Thanghau.m4a" },
  { name: "Mưa Tháng Tư", file: "music/Muat4.m4a" },
  { name: "Váy Cưới", file: "music/Vaycuoi.m4a" },
  { name: "Suy Nghĩ Trong Anh", file: "music/Snta.m4a" },
  { name: "Xa Muôn Trùng Mây", file: "music/Xamuontrungmay.m4a" },
  { name: "Sau Tất Cả", file: "music/Sautatca.m4a" },
  { name: "Từ Nay Em Là Vợ Anh", file: "music/TNELVA.m4a" },
  { name: "Sau Này Em Cưới Ai Rồi", file: "music/Snecar.m4a" },
  { name: "Khoảng Cách Đôi Ta", file: "music/Kcdt.m4a" },
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

  const filteredTracks = tracks
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  // 👉 Cập nhật bộ đếm bài hát
  const trackCountEl = document.getElementById("track-count");
  if (trackCountEl) {
    trackCountEl.textContent = `🎵 Tổng số bài hát: ${filteredTracks.length}`;
  }

  filteredTracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="text"><strong>${track.name}</strong></div>
    `;
    li.addEventListener("click", () => playTrack(tracks.indexOf(track))); // giữ đúng index
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
