<script src="script/jquery.js"></script>
    <ul class="menu" > 
        <img id="icon" src="carlosamacss.png" >
        <div class="direita">
        <li class="menuitens" id="informacoes" > Informações </li >
            <li class="menuitens" id="dicionario" > Dicionário </li >
            <li class="menuitens" id="campeonatos" > Campeonatos </li >
        </div>
    </ul >
<div class="doacao" >
    <h1> Doação </h1>
    <hr>
   <div class ="doacao-conteiner">  
        <div class="doacao-texto">
        <img class="doacao-img" id="cinco-doacao" src="qrcode.png" >
        <img class="doacao-img" id="dez-doacao" src="qrcode2.png" >
        <img class="doacao-img" id="vinte-doacao" src="qrcode3.png" >
            <script> 
                $(()=>{
                $("#cinco-doacao").hide()
                $("#dez-doacao").hide()
                $("#vinte-doacao").hide()
                })
            </script>
       
        </div>
        <div class="doacao-span">
        <span id="cinco"> R$ 5 </span>
        <span id="dez"> R$ 10 </span>
        <span id="vinte"> R$ 15 </span>
    </div>
       
    </div>

</div>
    
    <script src="script/app.js"></script>