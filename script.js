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
  { name: "Từ Nay Em Là Vợ Anh", file: "music/Tnelva.m4a" },
  { name: "Sau Này Em Cưới Ai Rồi", file: "music/Snecar.m4a" },
  { name: "Khoảng Cách Đôi Ta", file: "music/Kcdt.m4a" },
  { name: "Anh Sẽ Là Người Ra Đi", file: "music/Aslnrd.m4a" },
  { name: "Chuyện Như Chưa Bắt Đầu", file: "music/Cncbd.m4a" },
  { name: "Chúng Ta Không Thuộc Về Nhau", file: "music/Ctktvn.m4a" },
  { name: "Cứ Ngỡ Là Anh", file: "music/Cungolaanh.m4a" },
  { name: "Em Là Món Quà Vô Giá", file: "music/Elmqvg.m4a" },
  { name: "Giúp Anh Trả Lời Những Câu Hỏi", file: "music/Gatlnch.m4a" },
  { name: "Giấc Mơ 1 Cuộc Tình", file: "music/Gm1ct.m4a" },
  { name: "Giả Vờ Nhưng Anh Yêu Em", file: "music/Gvnaye.m4a" },
  { name: "Hình Bóng Của Mây", file: "music/Hinhbongcuamay.m4a" },
  { name: "Sợ Phải Kết Thúc", file: "music/Sophaiketthuc.m4a" },
  { name: "Tình Đẹp Đến Mấy Cũng Tàn", file: "music/tanthui.m4a" },
  { name: "Trả Cho Em", file: "music/Trachoem.m4a" },
  { name: "Tình Thương Phu Thê", file: "music/Ttpt.m4a" },
  { name: "Tình Yêu Mang Theo", file: "music/Tymt.m4a" },
  { name: "Vết Thương Trong Tim", file: "music/Vetthuongtrongtim.m4a" },
  { name: "Vợ Tuyệt Vời Nhất", file: "music/Vtvn.m4a" },
  { name: "Yêu Cô Bạn Thân", file: "music/Ycbt.m4a" },
  { name: "Yêu Em Rất Nhiều", file: "music/Yern.m4a" },
  { name: "Vạn Sự Tuỳ Duyên", file: "music/Vansutuyduyen.m4a" },
   { name: "Một Bước Yêu Vạn Dặm Đau", file: "music/1byvdd.m4a" },
  { name: "3107", file: "music/3107.m4a" },
  { name: "3107-2", file: "music/3107-2.m4a" },
  { name: "3107-3", file: "music/31073.m4a" },
  { name: "Anh Chẳng Sao Mà", file: "music/Anhchangsaoma.m4a" },
  { name: "Anh Thôi Nhân Nhượng", file: "music/Anhthoinn.m4a" },
  { name: "Anh Sẽ Yêu Người Khác Hơn Em", file: "music/Asynghe.m4a" },
  { name: "Bán Duyên", file: "music/Banduyen.m4a" },
  { name: "Cảm Ơn Vì Tất Cả", file: "music/Camonvitatca.m4a" },
  { name: "Sợ Phải Kết Thúc", file: "music/Sophaiketthuc.m4a" },
  { name: "Cánh Đồng Yêu Thương", file: "music/Canhsongyeuthuong.m4a" },
  { name: "Chẳng Gì Đẹp Đẽ Trên Đời Mãi", file: "music/Changgidepde.m4a" },
  { name: "Cho Anh Say", file: "music/Choanhsay.m4a" },
  { name: "Chưa Bao Giờ", file: "music/Chuabaogio.m4a" },
  { name: "Cho Anh Gần Em Thêm Chút Nữa", file: "music/CAge.m4a" },
  { name: "Con Đường Hạnh Phúc", file: "music/Conduonghp.m4a" },
  { name: "Cuộc Sống Em Ổn Không", file: "music/Cseok.m4a" },
{ name: "Đau Để Trưởng Thành", file: "music/Daudetruongthanh.m4a" },
  { name: "Dệt Mộng Uyên Ương", file: "music/Dmyu.m4a" },
  { name: "Đừng Quên Tên Anh", file: "music/Dqta.m4a" },
  { name: "Duyên Mình Lỡ", file: "music/Duyenminhlo.m4a" },
  { name: "Em Luôn Ở Trong Tâm Trí Anh", file: "music/Emluonottta.m4a" },
  { name: "Ép Duyên", file: "music/epduyen.m4a" },
  { name: "Giây Phút Êm Đềm", file: "music/Giayphutemdem.m4a" },
  { name: "Gương Mặt Lạ Lẫm", file: "music/Gmll.m4a" },
  { name: "Hẹn Yêu", file: "music/Henyeu.m4a" },
  { name: "Hết Thương Cạn Nhớ", file: "music/Hetthuongcannho.m4a" },
  { name: "Hôm Nay Em Cưới Rồi", file: "music/Hnecr.m4a" },
  { name: "Không Phải Anh Đúng Không", file: "music/Kpadk.m4a" },
  { name: "Lắng Nghe Nước Mắt", file: "music/Langnghencmat.m4a" },
  { name: "Mình Từng Yêu Nhau", file: "music/Minhtungyeunhau.m4a" },
  { name: "Mãi Mãi Không Phải Anh", file: "music/Mmkpa.m4a" },
  { name: "Mở Lối Cho Em", file: "music/Moloichoem.m4a" },
  { name: "Món Quà Vô Giá", file: "music/Mqvg.m4a" },
  { name: "Như Anh Đã Thấy Em", file: "music/NADTE.m4a" },
  { name: "Nên Chờ Hay Nên Quên", file: "music/Nenchohaynenquen.m4a" },
  { name: "Người Đến Sau", file: "music/Nguoidensau.m4a" },
  { name: "Nơi Tình Yêu Kết Thúc", file: "music/Ntykt.m4a" },
  { name: "Thế Giới Ảo Tình Yêu Thật", file: "music/Online.m4a" },
  { name: "Tâm Giao", file: "music/Tamgiao.m4a" },
  { name: "Thất Tình", file: "music/Thattinh.m4a" },
  { name: "Thương Thì Thôi", file: "music/Thuongthithoi.m4a" },
  { name: "Tiếng Pháo Tiễn Người", file: "music/Tiengphaotiennguoi.m4a" },
  { name: "Tệ Thật! Anh Nhớ Em", file: "music/Ttane.m4a" },
  { name: "Từng Yêu", file: "music/Tungyeu.m4a" },
  { name: "Vô Cùng", file: "music/Vocung.m4a" },
  { name: "Xa Kỉ Niệm", file: "music/Xakiniem.m4a" },
  { name: "Xin Đừng Lặng Im", file: "music/Xindunglangim.m4a" },
  { name: "Yêu 5", file: "music/Yeu5.m4a" },
  { name: "Tòng Phu", file: "music/Tongphu.m4a" },
  { name: "Có Em Trong Đời", file: "music/Coemtrongdoi.m4a" }

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
    trackCountEl.textContent = `Tổng số bài hát: ${filteredTracks.length}`;
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
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * tracks.length);
  } while (nextIndex === currentTrackIndex); // tránh trùng bài đang phát

  playTrack(nextIndex);
});

searchInput.addEventListener("input", (e) => {
  renderPlaylist(e.target.value);
});
document.getElementById("search-btn").addEventListener("click", () => {
  const searchValue = searchInput.value.trim();
  renderPlaylist(searchValue);
  searchInput.blur(); // ← lệnh quan trọng: tắt bàn phím
});
document.addEventListener("touchstart", (e) => {
  if (e.target.id !== "search") {
    searchInput.blur(); // bỏ focus nếu bấm ra ngoài
  }
});

renderPlaylist();
