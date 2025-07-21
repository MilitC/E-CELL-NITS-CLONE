window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");
  const audio = document.getElementById("intro-audio");

  // Play beat after 900ms
  setTimeout(() => {
    try {
      audio.play();
    } catch (e) {
      console.warn("Audio play was blocked:", e);
    }
  }, 900);

  // Trigger fade out after 2.4s
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 2400);
});
