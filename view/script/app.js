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
    if(true){
        mudarTela("informacoes.php");
    }
})

$("#campeonatos").click(() => {
    mudarTela("campeonatos.php")
})