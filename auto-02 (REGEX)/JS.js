function VerificaCPF(num){
    let CPF = prompt("digite seu cpf e verei se vc digitou corretamente")

    //const regex = /^\d{3}\.\d{3}\.\d{3}\.\d{2}/;
    const regex = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[.][0-9]{2}/;

    if (CPF === null) return; // Cancela se o usuário clicar em "Cancelar"

  if (regex.test(CPF)) {
    alert("O formato do CPF está correto!");
  } else {
    alert("Formato inválido. Tente novamente no formato 000.000.000-00 ou 00000000000.");
  }
}

VerificaCPF();