// GUARDAR EL ESTADO (COLUMNA ACTIVE)
let activeColumn = 1;

// SELECCIONAR COLUMNAS
const columnSelected = document.querySelectorAll(".column");

// ESCUCHAR CLICKS
columnSelected.forEach((column, index) => {
  column.addEventListener("click", function() {
    selectColumn(index);
  });
});

// CAMBIAR DE ESTADO LAS COLUMNAS
function selectColumn(index) {
  columnSelected[activeColumn].classList.remove("activeColumn");
  columnSelected[index].classList.add("activeColumn");
  activeColumn = index;
}