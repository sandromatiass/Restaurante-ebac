$(document).ready(function(){
  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
  });

  $('.formSend').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true
      }
    },
    messages: {
      nome: 'Por favor, insira o seu nome.',
      email: {
        required: 'Por favor, insira o seu e-mail.',
        email: 'Por favor, insira um e-mail válido.'
      },
      telefone: 'Por favor, insira o seu telefone.',
      mensagem: 'Por favor, insira a sua mensagem.'
    },
    submitHandler: function(form){
      alert('Formulário enviado com sucesso!');
      form.submit();
    },
    invalidHandler: function(evento, validador){
      let camposIncorretos = validador.numberOfInvalids();
      if(camposIncorretos){
        alert(`Existem ${camposIncorretos} campos incorretos!`);
      }
    }
  });
});
