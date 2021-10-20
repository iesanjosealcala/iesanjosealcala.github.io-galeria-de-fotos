const overlay = document.getElementById('overlay');
document.querySelectorAll('.images img').forEach((elemento) => {
    const ruta = elemento.getAttribute('src');

    elemento.addEventListener('click', () => {
        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
    })

    });

    document.querySelector('#btn-cerrar').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });
