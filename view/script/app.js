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


function mudarTela(url){
    $.ajax({
        url: url,
        success: (e) => {
            $(".container").children().hide();
            $(".container").html(e);
        }
    })
}

$("#login-enviar").click(() => {
    if(true){scrollY
        mudarTela("informacoes.php");
    }
})

$("#campeonatos").click(() => {
    mudarTela("campeonatos.php")
})