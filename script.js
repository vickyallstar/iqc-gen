function generate() {
  const text = document.getElementById("inputText").value;
  const url = `https://api.sxtream.xyz/maker/iqc?text=${encodeURIComponent(text)}`;

  const img = document.getElementById("result");
  img.src = url;
  img.style.display = "block";
}