const iniciar=async () =>{
    const mensagem= document.getElementById('mensagem');

    const response= await fetch('/QuemSouEu');
    const result= await response.json();
    mensagem.innerHTML= `<a href="${result.nome}">${result.sobrenome}</a>`;
};

document.addEventListener('DOMContentLoaded', iniciar);