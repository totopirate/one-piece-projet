function ouvrirVideo(src) {
  const lecteur = document.getElementById("lecteur");
  const source = document.getElementById("source-video");
  const modal = document.getElementById("videoModal");

  source.src = src;
  lecteur.load();
  modal.style.display = "block";
}

function fermerVideo() {
  const lecteur = document.getElementById("lecteur");
  const modal = document.getElementById("videoModal");

  lecteur.pause();
  lecteur.currentTime = 0;
  modal.style.display = "none";
}
