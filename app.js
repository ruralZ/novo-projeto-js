teste = 1;

function nomeMensagem(tag,texto) {
    let mensagem = document.querySelector(tag)
    mensagem.innerhtml = texto

}

nomeMensagem('h1', 'ola mundo') 
