//criar os variaveis que contem os elementos DOM
var vCabecalho = document.getElementById('cabecalho');
var vEditar = document.querySelector('[id=editar]');
var vTitulo = document.getElementById("titulo");
var vTexto = document.getElementById("texto");
var titulo = JSON.parse(localStorage.getItem('mudar_titulo')) || [];
vTitulo.innerHTML = titulo;


    //Evento que mostra o input
    vEditar.onclick = function() {
        if(vTexto.style.display == 'none') {
        vTexto.style.display = 'block';
        //Evento que esconde o input salvando-o no localStorage
        } else {
             vTexto.style.display = 'none';
             if( vTexto !== null ){
             titulo = vTexto.value;
             vTitulo.innerHTML = titulo;
            salvarTitulo();
            }          
        }
    }

    
    function salvarTitulo() {            
            localStorage.setItem('mudar_titulo', JSON.stringify(titulo));        
    }
    

                 