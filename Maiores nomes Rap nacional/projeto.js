let darkmode = document.querySelector('#darkmode');

darkmode.onclick = ()=>{
    // alert("CLICOU!");

    if(darkmode.classList.contains('bxs-moon')){
        alert("MODO ESCURO INATIVO!");
        darkmode.classList.replace('bxs-moon', 'bx-sun');

    }
}
