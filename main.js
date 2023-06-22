let form = document.getElementById('form-comparativo');
let valorA = document.getElementById('num1');
let valorB = document.getElementById('num2');

    form.addEventListener('submit',function(e){
        let formEvalido = false;
        e.preventDefault();

    let valorA = document.getElementById('num1');
    let valorB = document.getElementById('num2');
    const mensagemSucesso = `O número: <b>${valorA.value}<b/> é menor que <b>${valorB.value}<b/> , parabéns sua resposta está correta! `;
    const errorMensagem = `O número: <b>${valorA.value}<b/> é maior que <b>${valorB.value}<b/> ,sua resposta está incorreta! `
    fomrEvalido = (valorA.value < valorB.value)
        if(fomrEvalido) {
        const paragrafoMensagemSucesso = document.querySelector('.success-message');
        paragrafoMensagemSucesso.innerHTML = mensagemSucesso;
        paragrafoMensagemSucesso.style.display = 'block';
        
        setTimeout(function() {
        window.location.reload(true);
        }, 2000);


        valorA.value = '';
        valorB.value = '';


        }else{
        const paragrafoErrorMensagem = document.querySelector('.error-message');
        paragrafoErrorMensagem.innerHTML = errorMensagem;
        paragrafoErrorMensagem.style.display = 'block';

        setTimeout(function() {
        window.location.reload(true);
        }, 2000);

        }
    })