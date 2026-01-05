const formatter = new Intl.DateTimeFormat("ko-KR", {
  timeZone: "Asia/Seoul",
  /*year: "numeric",
  month: "2-digit",
  day: "2-digit",*/
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});

function updateKST() {
  const target = document.getElementById("kst-time");
  if (!target) return;

  const now = new Date();
  target.textContent = formatter.format(now);
}

document.addEventListener("DOMContentLoaded", () => {
  updateKST();
  setInterval(updateKST, 1000);
});
