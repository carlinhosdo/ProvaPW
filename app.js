$(() => {
    $.ajax({
        url: 'informacoes.php',
        success: (e) => {
            $(".container").html(e);
        }
    })
})