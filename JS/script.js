function consultaCep() {
    $(".barprogress").show();
    var cep = document.getElementById("cep").value;
    var url = `http://viacep.com.br/ws/${cep}/json/`;
    console.log(url)
    $.ajax({
        url: "http://viacep.com.br/ws/14800390/json/",
        type: "GET",
        success: (response) => {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#tituloCEP").html("CEP " + response.cep);
            $(".cep").show();
            $(".barprogress").hide();
        }
    })
}


$(function(){
    $(".cep").hide();
    $(".barprogress").hide();
});