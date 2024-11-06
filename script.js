function toggleInfo(id) {
  const infoSection = document.getElementById(id);
  if (infoSection.style.display === "block") {
    infoSection.style.display = "none";
  } else {
    infoSection.style.display = "block";
  }
}
