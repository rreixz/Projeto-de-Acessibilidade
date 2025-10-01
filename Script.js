let tamanhoFonte = 18;
let contrasteAtivo = false;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function contraste() {
  if (!contrasteAtivo) {
    document.documentElement.style.setProperty('--bg', '#000');
    document.documentElement.style.setProperty('--fg', '#fff');
    document.documentElement.style.setProperty('--accent', '#fff');
    contrasteAtivo = true;
  } else {
    document.documentElement.style.setProperty('--bg', '#fff');
    document.documentElement.style.setProperty('--fg', '#111');
    document.documentElement.style.setProperty('--accent', '#000');
    contrasteAtivo = false;
  }
}

function resetar() {
  tamanhoFonte = 18;
  document.body.style.fontSize = tamanhoFonte + "px";
  document.documentElement.style.setProperty('--bg', '#fff');
  document.documentElement.style.setProperty('--fg', '#111');
  document.documentElement.style.setProperty('--accent', '#000');
  contrasteAtivo = false;
}
