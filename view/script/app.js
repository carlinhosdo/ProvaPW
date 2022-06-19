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
    let cadastro = $("#inputNome").val()
    console.log(cadastro);
    let modalidades = $("#inputModalidade").val()
    if(cadastro == "" && modalidades == ""){
        alertify.alert("Alerta!", "Preencha o campo de texto.");
    }else{
        alertify.alert("Alerta!", "O usuário foi cadastrado");
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
