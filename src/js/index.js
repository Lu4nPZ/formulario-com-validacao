const btnEnviar = document.querySelector('.btn-enviar')

btnEnviar.addEventListener('click', ()=>{
    const inputs = document.querySelectorAll('.input')

    inputs.forEach(input =>{
        const dados = document.querySelector('.dados')
        const campoObrigatorio = input.nextElementSibling

        if(input.value === ""){
            input.classList.add('campo-vazio')
            input.classList.remove('campo-preenchido')
            campoObrigatorio.innerHTML = 'campo obrigátorio'
            campoObrigatorio.style.marginBottom = '5px'
        }else{
            input.classList.remove('campo-vazio')
            input.classList.add('campo-preenchido')
            campoObrigatorio.innerHTML = ''
            campoObrigatorio.style.marginBottom = '15px'
        }
    })
})