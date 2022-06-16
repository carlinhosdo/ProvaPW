document.querySelector("#cadastrarCampeonato").onclick = function() {myFunction()};
let cadastro = document.querySelector("#inputTexto");
let modalidades = document.querySelector("#inputModalidade");
function myFunction() {
    if(cadastro = ("") && (modalidades = (""))){
    alertify.alert("Alerta!", "Preencha o campo do Nome.");
    }else{
    alertify.alert("Alerta!", "O usuário foi cadastrado");
    }
}

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