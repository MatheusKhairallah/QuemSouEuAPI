const iniciar=async () =>{
    const mensagem= document.getElementById('mensagem');

    const response= await fetch('/QuemSouEu');
    const result= await response.json();
    mensagem.innerHTML= `Olá usuário meu nome é ${result.nome} ${result.sobrenome}. Meu perfil no GitHub é ${result.usuarioGit}.`;
};

document.addEventListener('DOMContentLoaded', iniciar);