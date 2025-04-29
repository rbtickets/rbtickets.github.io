function cargarEventos(categoria) {
  fetch('eventos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      let contenedor = document.querySelector('.container-cards');
      contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los eventos

      let eventosFiltrados = datos.filter(evento => evento.categoria === categoria);

      eventosFiltrados.forEach(evento => {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        tarjeta.style.width = '18rem';
        tarjeta.innerHTML = `
          <img src="${evento.imagen}" class="card-img-top" alt="${evento.alt}">
          <div class="card-body">
            <h5 class="card-title"><strong>${evento.titulo}</strong></h5>
            <p class="card-text">${evento.lugar} <br> ${evento.fecha}</p>
            <a href="${evento.enlaceCompra}" class="btn btn-primary">Comprar</a>
          </div>
        `;
        contenedor.appendChild(tarjeta);
      });
    })
    .catch(error => console.error('Error al cargar los eventos:', error));
}
