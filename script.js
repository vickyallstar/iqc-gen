function generate() {
  const text = document.getElementById("inputText").value.trim();
  if (!text) {
    alert("Tolong isi teks dulu bro 😅");
    return;
  }

  const url = `https://api.sxtream.xyz/maker/iqc?text=${encodeURIComponent(text)}`;

  const img = document.getElementById("result");
  const loading = document.getElementById("loading");
  const downloadBtn = document.getElementById("downloadBtn");

  // Reset tampilan
  img.style.display = "none";
  downloadBtn.style.display = "none";
  loading.style.display = "block";

  setTimeout(() => {
    img.onload = () => {
      loading.style.display = "none";
      img.style.display = "block";

      // set link download
      downloadBtn.href = img.src;
      downloadBtn.style.display = "inline-block";
    };
    img.onerror = () => {
      loading.style.display = "none";
      alert("Gagal load gambar 😢");
    };
    img.src = url + "&t=" + Date.now(); // anti-cache
  }, 500);
}