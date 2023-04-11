import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj_digital.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Dec 13,2023",
    "8:20:34",
    "Feliz cumpleaños a mi 💀");
  scrollTopButton(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode")
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
