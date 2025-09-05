function generate() {
  const text = document.getElementById("inputText").value.trim();
  if (!text) {
    alert("Tolong isi teks dulu bro 😅");
    return;
  }

  const url = `https://api.sxtream.xyz/maker/iqc?text=${encodeURIComponent(text)}`;

  const img = document.getElementById("result");
  const loading = document.getElementById("loading");

  // Reset
  img.style.display = "none";
  loading.style.display = "block";

  // Kasih delay dikit biar spinner sempet keliatan
  setTimeout(() => {
    img.onload = () => {
      loading.style.display = "none";
      img.style.display = "block";
    };
    img.onerror = () => {
      loading.style.display = "none";
      alert("Gagal load gambar 😢");
    };
    img.src = url + "&t=" + Date.now(); // tambah timestamp biar anti-cache
  }, 500);
}