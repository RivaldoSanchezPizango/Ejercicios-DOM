const d = document;
export default function darkTheme(btn, classDark) {
  const $themeBTn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "🌞";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBTn.textContent === moon) {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBTn.textContent = sun;
      } else {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBTn.textContent = moon;
      }
    }
  })
}