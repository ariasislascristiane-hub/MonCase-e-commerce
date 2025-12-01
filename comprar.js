// --- GENERADOR DE PÁGINAS DE PRODUCTO CON document.write() ---

const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre") || "Producto";
const precio = params.get("precio") || "0";
const imagen = params.get("img") || "Imagenes/noimage.png";
const desc = params.get("desc") || "Sin descripción disponible.";
const imagen2 = params.get("img2") || "Imagenes/noimage.png";
const imagen3 = params.get("img3") || "Imagenes/noimage.png";
const imagen4 = params.get("img4") || "Imagenes/noimage.png";


document.write(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>${nombre}</title>
    <link rel="stylesheet" href="Style.css">
    <link rel="shortcut icon" href="Imagenes/MonCaseLogoAlfa.png">
</head>

<body class="color">

<header>
    <nav class="nav">
        <img src="Imagenes/MonCase.png">
        <a href="index.html"><img src="Imagenes/return.png"></a> 
        <a href="https://wa.me/527713435455"><img src="Imagenes/Contacto.jpg"></a>
        <a href="Ubicacion.html"><img src="Imagenes/Ubi.png"></a>
    </nav>

    <section class="textos-header">
        <h1>${nombre}</h1>
        <h2>Detalles del producto</h2>

        <button onclick="history.back()" 
                style="
                    margin-top:20px;
                    padding:15px 30px;
                    font-size:22px;
                    border:none;
                    border-radius:10px;
                    background:#ff0000;
                    color:white;
                    cursor:pointer;
                    transition:0.3s;
                ">
            ⬅ Regresar
        </button>

    </section>

    <div class="wave" style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path d="M-0.00,49.85 C191.42,220.95 317.83,-138.28 501.24,104.81 L500.00,149.60 L-0.00,149.60 Z"
            style="stroke: none; fill: #ffffff;"></path>
        </svg>
    </div>
</header>

<main>
    <section class="galeria-compra">

        <div class="producto-principal">
            <img src="${imagen}" alt="${nombre}">
        </div>

        <div class="columna-derecha">

            <div class="producto-detalles">
                <p class="precio">$${precio}</p>
                
              
       
                <a href="https://wa.me/527713435455?text=Hola!%20Quiero%20comprar%20${encodeURIComponent(nombre)} con un precio de${precio}" 
                   style="font-size: 30px; color: red; text-decoration: none;">
                    <img src = "Imagenes/comprar_boton.png">
                </a>
            </div>

            <div class="producto-detalles descripcion">
                <p>${desc}</p>
            </div>
            
<div class="galeria-extra" id="galeria-extra">
    <img src = "Imagenes/timmys turner dad (1).png" alt = "No m han autorizado mas fotos SKDJSKAJDK">
    <img src = "Imagenes/timmys turner dad (1).png" alt = "No m han autorizado mas fotos SKDJSKAJDK">
    <img src = "Imagenes/timmys turner dad (1).png" alt = "No m han autorizado mas fotos SKDJSKAJDK">
</div>
<div id="lightbox" class="lightbox">
    <span id="cerrarLB" class="cerrar">&times;</span>
    <img id="imgZoom" class="lightbox-img">
</div>

        </div>

    </section>
</main>
<script>
    // Abrir lightbox al hacer clic en las imágenes pequeñas
    const imagenes = document.querySelectorAll("#galeria-extra img");
    const lightbox = document.getElementById("lightbox");
    const imgZoom = document.getElementById("imgZoom");
    const cerrarBtn = document.getElementById("cerrarLB");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            imgZoom.src = img.src;
            lightbox.style.display = "flex";
        });
    });

    // Cerrar lightbox con X
    cerrarBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Cerrar al hacer clic afuera de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
</script>

<script src="script.js"></script>


</body>
</html>
`);