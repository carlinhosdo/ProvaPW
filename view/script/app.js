function abrirTela(url){
    $.ajax({
        url: url,
        success: (e) => {
            $(".container").children().hide();
            $(".container").html(e);
        }
    })
}
$("#cadastrarCampeonato").click(function(){
    if($("#inputNome").val() == "" && $("#inputModalidade").val()== ""){
        alert("É necessário preencher o campo de informação.");
       }else if($("#inputNome").val() == "carlos"){
           alert("fi, eu acho que vou me fuder em bancos de dados");
       }else if($("#inputNome").val() == "Luis"){
        alert("Deus me abençoe");
       }else if($("#inputNome").val() == "clemilto" && $("#inputModalidade").val()== "profissional"){
           alert("o Homem mais lindo do mundo");
          
       }else{
        alert("só Deus sabe a dor que estou sentindo");
       }
    })
    

$("#login-enviar").click(() => {
     if($("#nome").val() == "" && $("#idade").val()== ""){
     alert("É necessário preencher o campo de informação.");
    }else if($("#idade").val() <= 12){
        alert("Você não poderá entrar, pois para entrar é preciso ter mais de 12 anos.");
    }else{
        abrirTela("informacoes.php");
    }
})

$("#icon").click(() => {
    abrirTela("informacoes.php")
})

$("#campeonatos").click(() => {
    abrirTela("campeonatos.php")
})
$("#dicionario").click(() => {
    abrirTela("dicionario-surf.php")
})
$("#doacoes").click(() => {
    abrirTela("doacao.php")
})
$("#informacoes").click(() => {
    abrirTela("informacoes.php")
})
$("#iniciante").click(function(){
    $("#iniciante-texto").show()
    $("#amador-texto").hide()
    $("#profissional-texto").hide()

})
$("#amador").click(function(){
    $("#iniciante-texto").hide()
    $("#amador-texto").show()
    $("#profissional-texto").hide()

})
$("#profissional").click(function(){
    $("#iniciante-texto").hide()
    $("#amador-texto").hide()
    $("#profissional-texto").show()

})
$("#cavada").click(function(){
    $("#cavada-texto").show()
    $("#elevador-texto").hide()
    $("#freesurf-texto").hide()
    $("#giro-texto").hide()
})
$("#elevador").click(function(){
    $("#cavada-texto").hide()
    $("#elevador-texto").show()
    $("#freesurf-texto").hide()
    $("#giro-texto").hide()
})
$("#freesurf").click(function(){
    $("#cavada-texto").hide()
    $("#elevador-texto").hide()
    $("#freesurf-texto").show()
    $("#giro-texto").hide()
})
$("#giro").click(function(){
    $("#cavada-texto").hide()
    $("#elevador-texto").hide()
    $("#freesurf-texto").hide()
    $("#giro-texto").show()
})


$("#cinco").click(function(){
    $("#cinco-doacao").show()
    $("#dez-doacao").hide()
    $("#vinte-doacao").hide()

})
$("#dez").click(function(){
    $("#cinco-doacao").hide()
    $("#dez-doacao").show()
    $("#vinte-doacao").hide()

})
$("#vinte").click(function(){
    $("#cinco-doacao").hide()
    $("#dez-doacao").hide()
    $("#vinte-doacao").show()

})
