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
     alert("tu não preencheu nada fdp");
    }else if($("#idade").val() <= 12){
        alert("tu nao pode entrar fdp, pois vc so tem 12 anos");
    }else{
        abrirTela("informacoes.php");
    }
})

$("#campeonatos").click(() => {
    abrirTela("campeonatos.php")
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