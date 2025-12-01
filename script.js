// --- CÓDIGO MEJORADO PARA LA APARICIÓN/DESAPARICIÓN DE ELEMENTOS POR SCROLL ---

// 1. Seleccionar TODOS los elementos que tendrán la clase 'ocultar-elemento'
const elementosParaRevelar = document.querySelectorAll('.ocultar-elemento');

// 2. Definir las opciones para el Intersection Observer
const opcionesReveal = {
    root: null, // El viewport es el observador
    rootMargin: '0px',
    threshold: 0.1 // El elemento se considera visible cuando el 10% está en el viewport
};

// 3. Crear la función del observador
const observadorReveal = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar-elemento');
            entrada.target.classList.remove('ocultar-elemento');
        } else {
            entrada.target.classList.remove('mostrar-elemento');
            entrada.target.classList.add('ocultar-elemento');
        }
    });
}, opcionesReveal);

// 4. Observar cada elemento seleccionado
elementosParaRevelar.forEach(elemento => {
    elemento.classList.add('ocultar-elemento'); 
    observadorReveal.observe(elemento);
});

// Opcional: Para animar la aparición inicial de los textos del header, si se les aplicó la clase en HTML.
const textosHeader = document.querySelector('.textos-header h1');
const textosHeader2 = document.querySelector('.textos-header h2');

if(textosHeader) observadorReveal.observe(textosHeader);
if(textosHeader2) observadorReveal.observe(textosHeader2);

// ================================
// GALERÍA EXTRA AUTOMÁTICA
// ================================

// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);

// Imágenes adicionales
const img2 = params.get("img2");
const img3 = params.get("img3");
const img4 = params.get("img4");

// Contenedor donde aparecerán (se busca por ID en el HTML generado por comprar.js)
const galeriaExtra = document.getElementById("galeria-extra");

// Función para agregar imagen si existe
function agregarImagen(src) {
    if (galeriaExtra) {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("galeria-extra-img", "imagen-prod");
        galeriaExtra.appendChild(img);
    }
}

// Insertar imágenes solo si existen
if (img2) agregarImagen(img2);
if (img3) agregarImagen(img3);
if (img4) agregarImagen(img4);

