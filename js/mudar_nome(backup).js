//criar os variaveis que contem os elementos DOM
var vCabecalho = document.getElementById('cabecalho');
var vEditar = document.querySelector('[id=editar]');
var vTitulo = document.getElementById("titulo");
var titulo = JSON.parse(localStorage.getItem('mudar_titulo')) || [];
vTitulo.innerHTML = titulo;


    //evento que faz a função de criação do input
    vEditar.onclick = function() {
    var vInput = document.createElement('input');
    vInput.setAttribute('type', 'text');
    vInput.setAttribute('placeholder', 'Digite o novo titulo');
    vCabecalho.appendChild(vInput);    
    console.log(vInput);
        //evento que cria a função de mudança do titulo e deleção do input
        vEditar.onclick = function() {
            titulo = vInput.value;
            vTitulo.innerHTML = titulo;
            salvarTitulo();
            vCabecalho.removeChild(vInput);                    
        }
    }

    function salvarTitulo() {            
            localStorage.setItem('mudar_titulo', JSON.stringify(titulo));        
    }
    
    