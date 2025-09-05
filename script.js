function generate() {
  const text = document.getElementById("inputText").value.trim();
  const loading = document.getElementById("loading");
  const img = document.getElementById("result");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!text) {
    alert("Isi teks dulu bro 😅");
    return;
  }
  if (text.length > 100) {
    alert("Teks maksimal 100 karakter ya bro 🙏");
    return;
  }

  const url = `https://api.sxtream.xyz/maker/iqc?text=${encodeURIComponent(text)}&t=${Date.now()}`;

  // Reset tampilan
  img.style.display = "none";
  downloadBtn.style.display = "none";
  loading.style.display = "block";

  setTimeout(() => {
    img.onload = () => {
      loading.style.display = "none";
      img.style.display = "block";

      // Update tombol download dengan nama file .bin
      downloadBtn.href = img.src;
      downloadBtn.setAttribute("download", "iqc.bin");
      downloadBtn.style.display = "inline-block";
    };
    img.onerror = () => {
      loading.style.display = "none";
      alert("Gagal load gambar 😢");
    };
    img.src = url;
  }, 500);
}