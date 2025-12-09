// Obtiene referencias a los elementos del DOM
const body = document.body;
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const directionSelect = document.getElementById('direction');
const cssCodeTextarea = document.getElementById('cssCode');

// Función principal que genera y aplica el degradado
function generateGradient() {
    // Obtiene los valores actuales de los inputs
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const direction = directionSelect.value;
    
    // Construye la cadena CSS del degradado lineal
    const gradientCss = `linear-gradient(${direction}, ${color1}, ${color2})`;

    // Aplica el degradado como fondo del body
    body.style.backgroundImage = gradientCss;

    // Muestra el código CSS completo en el textarea
    cssCodeTextarea.value = `background: ${gradientCss};`;
}

// Asigna los Event Listeners para detectar cambios
color1Input.addEventListener('input', generateGradient);
color2Input.addEventListener('input', generateGradient);
directionSelect.addEventListener('change', generateGradient);

// Ejecuta la función una vez al inicio para cargar el valor por defecto
generateGradient();