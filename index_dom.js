import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma")
})
