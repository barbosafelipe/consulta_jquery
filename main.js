


function consultarCep(){
    let cep = document.getElementById("enderecoCep").value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/";   
    $('.spinner-border').show();

   $.ajax({      
       url: url,
       type: "GET",
       success: function(response){
           console.log(response)
           $('#logradouro').html(response.logradouro);
           $('#bairro').html(response.bairro);
           $('#localidade').html(response.localidade);
           $('#uf').html(response.uf);
           $('#tituloCep').html("CEP  " + response.cep);
           $('.cep').show();
           $('.spinner-border').hide();


           
       }
   })
}

$(function(){
    $('.cep').hide();
    $('.spinner-border').hide();
});