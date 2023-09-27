//$(document).ready(function() {
//    alert("Olá JQUERY")
//  Document.querySelector('header button'); isso tudo para selecionar o arquivo com o JS tradicional
//  $('header button')
//})

$('header button').click(function(){
    $('form').slideDown();//seleciona todo o formulário e mostra ele na tela.
})

$('#cancel').click(function(){
    $('form').slideUp();//seleciona todo o formulário e esconde ele da tela.
})

$('form').on('submit', function(e){//não permite que a página atualize após o evento de click.
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src=${enderecoDaNovaImagem} />`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(400);
    $('#endereco-imagem-nova').val('');
})



