<script src="script/jquery.js"></script>
    <ul class="menu" > 
        <img id="icon" src="carlosamacss.png" >
        <div class="direita">
            <li class="menuitens" id="dicionario" > Dicionário </li >
            <li class="menuitens" id="doacoes" > Doações </li >
            <li class="menuitens" id="campeonatos" > Campeonatos </li >
        </div>
    </ul >
<div class="dicionario" >
    <h1> Dicionário </h1>
    <hr>
   <div class ="dicionario-conteiner"> 
    <div class="dicionario-span">
        <span id="cavada"> Cavada </span>
        <span id="elevador"> Elevador </span>
        <span id="freesurf"> Free Surf </span>
        <span id="giro"> Giro</span>
    </div>
        <div class="dicionario-texto">
        <p id="cavada-texto">Já comentamos acima que surfe é exercício.Entrar no mar com o corpo frio e os ligamentos ainda dormentes não é bom. Alongue-se e esquente o corpo um pouco antes de entrar.<p>
        <p id= "elevador-texto" >O mar é seu melhor conselheiro. Quando está revolto, está enviando conselhos a você para não entrar nele. Preste atenção a esses avisos.<p>
         <p id ="freesurf-texto"> Dormir e acordar cedo, se alimente de forma saudável e faça exercícios funcionais e alongamentos.<p>
         <p id="giro-texto">Já comentamos acima que surfe é exercício.Entrar no mar com o corpo frio e os ligamentos ainda dormentes não é bom. Alongue-se e esquente o corpo um pouco antes de entrar.<p>
            <script> 
                $(()=>{
                $("#cavada-texto").hide()
                $("#elevador-texto").hide()
                $("#freesurf-texto").hide()
                $("#giro-texto").hide()
                })
            </script>
       
        </div>
       
    </div>

</div>
    
    <script src="script/app.js"></script>