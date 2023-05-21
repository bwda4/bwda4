// ESCUCHAR EL CLICK
const button = document.getElementById('button')
button.addEventListener('click', preguntarNombre)

// GUARDAMOS REFERENCIAS A LOS HEADING
const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')

// PREGUNTAR Y GUARDAR EL NOMBRE DE USUARIO
function preguntarNombre() {
  const nombre = prompt('Introduce tu nombre')
  mostrarNombre(nombre)
}

// INSERTAR EL NOMBRE EN LUGAR DE LOS "..."
function mostrarNombre(nombre) {
  h2.textContent = 'Hola'
  h1.textContent = nombre
}