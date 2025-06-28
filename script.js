// Elemen
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const nextToGallery = document.getElementById("nextToGallery");
const galleryOverlay = document.getElementById("galleryOverlay");
const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeGallery = document.getElementById("closeGallery");
const kangenMessage = document.getElementById("kangenMessage");

// Isi ucapan
const text = `Selamat ulang tahun mama tercinta! 🎉

Terima kasih untuk semua cinta, doa, dan pengorbanan yang mama berikan.

Semoga mama selalu sehat, bahagia, diberi umur panjang, dan selalu diberkati.

Lopyu mah loploplop 💖.`;

// Galeri foto dan caption
const galleryItems = [
  { src: "https://i.pinimg.com/originals/a8/90/ff/a890ffa123b1c2c6e2c069a3c9da20ea.gif", caption: "inpo kata kata" },
  { src: "https://i.pinimg.com/originals/a8/90/ff/a890ffa123b1c2c6e2c069a3c9da20ea.gif", caption: "inpo kata kata" },
  { src: "https://i.pinimg.com/originals/a8/90/ff/a890ffa123b1c2c6e2c069a3c9da20ea.gif", caption: "inpo kata kata" },
  {
    src: "https://i.pinimg.com/originals/a8/90/ff/a890ffa123b1c2c6e2c069a3c9da20ea.gif",
    caption: "inpo kata kata ",
  },
];
let currentImage = 0;

// Event klik surat
envelope.addEventListener("click", () => {
  envelope.classList.add("opacity-0");
  setTimeout(() => {
    envelope.classList.add("hidden");
    letter.classList.remove("hidden");
    letter.classList.add("animate-fade-in");
    message.innerHTML = "";
    typeText(message, text, 40);
  }, 500);
});
// Fungsi keluar dari galeri
closeGallery.addEventListener("click", () => {
  galleryOverlay.classList.add("hidden");

  // Munculkan pesan kangen
  kangenMessage.classList.remove("hidden");
  const pesanBox = kangenMessage.querySelector("div");
  pesanBox.classList.add("animate-fade-in-fast");

  // Setelah 3 detik, pesan hilang dan kembali ke envelope atau surat
  setTimeout(() => {
    kangenMessage.classList.add("hidden");
    pesanBox.classList.remove("animate-fade-in-fast");

    // Kembali ke envelope atau surat
    envelope.classList.remove("hidden", "opacity-0");
    envelope.classList.add("animate-fade-in");

    // Atau jika mau ke surat:
    // letter.classList.remove("hidden");
    // letter.classList.add("animate-fade-in");
  }, 3000);
});
// Ke galeri
nextToGallery.addEventListener("click", () => {
  letter.classList.add("hidden");
  galleryOverlay.classList.remove("hidden");
  showGalleryImage();
});

// Tombol galeri
nextBtn.addEventListener("click", () => {
  currentImage = (currentImage + 1) % galleryItems.length;
  showGalleryImage();
});

prevBtn.addEventListener("click", () => {
  currentImage = (currentImage - 1 + galleryItems.length) % galleryItems.length;
  showGalleryImage();
});

// Fungsi tampilkan gambar
function showGalleryImage() {
  galleryImage.classList.remove("opacity-100");
  galleryImage.classList.add("opacity-0");
  setTimeout(() => {
    galleryImage.src = galleryItems[currentImage].src;
    galleryCaption.innerText = galleryItems[currentImage].caption;
    galleryImage.classList.remove("opacity-0");
    galleryImage.classList.add("opacity-100");
  }, 200);
}

// Fungsi keluar dari galeri
closeGallery.addEventListener("click", () => {
  galleryOverlay.classList.add("hidden");
  // Kamu bisa balik ke surat atau langsung ke envelope
  // Kalau mau balik ke envelope:
  envelope.classList.remove("hidden", "opacity-0");
  envelope.classList.add("animate-fade-in");

  // Kalau mau balik ke surat, ganti ke:
  // letter.classList.remove("hidden");
  // letter.classList.add("animate-fade-in");
});

// Efek ketik
function typeText(element, text, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
