// Menu seluler
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const buka = menu.classList.toggle("buka");
  burger.setAttribute("aria-expanded", buka);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("buka");
  burger.setAttribute("aria-expanded", "false");
}));

// Foto: jika foto.jpg belum ada, tampilkan kotak pengganti
const foto = document.querySelector(".busur img");
const kosong = document.querySelector(".foto-kosong");
const gagal = () => { foto.hidden = true; kosong.hidden = false; };
if (foto.complete && foto.naturalWidth === 0) gagal();
foto.addEventListener("error", gagal);

// Validasi formulir (belum terhubung ke server)
const form = document.getElementById("form");
const status = document.getElementById("pesan-status");
form.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("input,textarea").forEach(el => {
    const salah = !el.value.trim() || (el.type === "email" && !/^\S+@\S+\.\S+$/.test(el.value));
    el.classList.toggle("salah", salah);
    if (salah) valid = false;
  });
  status.className = valid ? "ok" : "err";
  status.textContent = valid
    ? "Terima kasih, pesan Anda sudah dicatat. Saya akan membalas secepatnya."
    : "Lengkapi semua kolom dan pastikan format email benar.";
  if (valid) form.reset();
});

document.getElementById("tahun").textContent = new Date().getFullYear();
