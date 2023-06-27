const slider = document.querySelector(".imagen-contenedor");
const btnAnterior = document.querySelector("#Anterior");
const btnSiguiente = document.querySelector("#Siguiente");

btnAnterior.addEventListener("click", () => {
  slider.scrollLeft -= slider.offsetWidth;
});

btnSiguiente.addEventListener("click", () => {
  slider.scrollLeft += slider.offsetWidth;
});
