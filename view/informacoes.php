<script src="script/jquery.js"></script>
    <ul class="menu" > 
        <img src="carlosamacss.png" >
        <div class="direita">
            <li class="menuitens" id="agendamento" > Agendamento </li >
            <li class="menuitens" id="doacoes" > Doações </li >
            <li class="menuitens" id="campeonatos" > Campeonatos </li >
        </div>
    </ul >
<div class="informacoes" >
    <h1> Informações </h1>
    
   <div class ="informacoes-conteiner"> 
    <div class="informacoes-span">
        <span id="iniciante"> Iniciante </span>
        <span id="amador"> Amador </span>
        <span id="profissional"> Profissional </span>
    </div>
        <div class="informacoes-texto">
        <p id="iniciante-texto">Já comentamos acima que surfe é exercício.Entrar no mar com o corpo frio e os ligamentos ainda dormentes não é bom. Alongue-se e esquente o corpo um pouco antes de entrar.")<p>
        <p id= "amador-texto" >O mar é seu melhor conselheiro. Quando está revolto, está enviando conselhos a você para não entrar nele. Preste atenção a esses avisos.<p>
         <p id ="profissional-texto"> Dormir e acordar cedo, se alimente de forma saudável e faça exercícios funcionais e alongamentos<p>

            <script> 
            $(()=>{
             $("#iniciante-texto").hide()
            $("#amador-texto").hide()
            $("#profissional-texto").hide()
            })
    </script>
       
        </div>
       
    </div>

</div>

    <script src="script/app.js"></script>