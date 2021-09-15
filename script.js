var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  console.log(chute);

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns, Você Acertou !!!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Atenção !! Só é válido números entre 0 e 10 !!";
  } else {
    resultado.innerHTML = "Você Errou ! Tente Mais Uma vez !!";
  }
}