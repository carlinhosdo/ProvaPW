<script src="script/jquery.js"></script>
<div class="informacoes" >
    <h1> Informações </h1> <Br>
    
   <div class ="informacoes-conteiner"> 
    <div class="informacoes-span">
        <span id="iniciante">iniciante</span>
        <span id="amador">amador</span>
        <span id="profissional">profissional</span>
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
    <div class="informacoes-botoes"> 
            <button id="agendamento"> Agendamento de prancha</button >
            <button id="doacoes" > Doações </button >
            <button id="campeonatos" > Campeonatos </button >
        </div>
</div>

    <script src="script/app.js"></script>