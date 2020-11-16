const iniciar=async () =>{
    const mensagem= document.getElementById('mensagem');

    const response= await fetch('/QuemSouEu');
    const result= await response.json();
    mensagem.innerHTML= `<a href="${result.nome}">${result.sobrenome}>${result.usuarioGit}</a>`;
};

document.addEventListener('DOMContentLoaded', iniciar);