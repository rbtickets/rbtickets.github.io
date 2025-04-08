function buscar(){
    let input = document.getElementById("buscador").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      let texto = card.textContent.toLowerCase();
      card.classList.toggle("oculto", !texto.includes(input));
    });
  }