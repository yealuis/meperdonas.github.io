let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Siiiiii ammmoooooorrrr, sabia me perdonarias!';
    document.getElementById('messageContainer2').style.display = 'block';
    document.getElementById('messageContainer2').innerHTML = '¡TE AMOOOOOOOOOOOOOOOOO!';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);
    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
    setTimeout(function() {
        document.getElementById('happyGifContainer4').style.display = 'none';
        document.getElementById('happyGifContainer5').style.display = 'block';
    }, 4000);
  
});

document.getElementById('noBtn').addEventListener('click', function() {
    var elementStyle = document.getElementById("noBtn").style;
    
    function posicionale(xpos, ypos) {
        // Mover de forma aleatoria el boton
        xpos = Math.floor(Math.random() * 100);
        ypos = Math.floor(Math.random() * 100);
        elementStyle.position = 'absolute';
        elementStyle.left = xpos + "%";
        elementStyle.top = ypos + "%";
    }

    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura?';
       
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segura?!';
            
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            
            posicionale();
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Estás segura de verdad, ¿eh?';
            
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            posicionale();

            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = '¿Yo te amo, amor?';
            
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';

            posicionale();
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Di que si por favor?';
            
            posicionale();
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Solo piensalo';
            
            posicionale();

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Si dices que no estaré muy triste';
            
            posicionale();
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Super triste';
            
            posicionale();
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy triste';
            
            posicionale();
       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy triste.';
            
            posicionale();
          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'Esta bien, ya dejaré de preguntar...';
            
            posicionale();
    
            noButtonState++;
            break;
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ';
            
            posicionale();
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Amoooooooooorrrrrrr :(.';
            
            posicionale();
    
            noButtonState++;
            break;
        
        case 13:
           
            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón :(';
            
            posicionale();
         
            noButtonState++;
            break;
        
        case 14:
           
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si, por favor';
            
            posicionale();
            
            noButtonState++;
            break;
        
        case 15:
           
            document.getElementById('noBtn').innerHTML = 'Amor Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            
            posicionale();
          
            noButtonState++;
            break;
        
     
        case 16:
            document.getElementById('noBtn').innerHTML = 'por favooooooor';
            
            
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('happyGifContainer').style.display = 'none';

            posicionale();
            // Vuelve al estado 0
            noButtonState = 0;
            break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


