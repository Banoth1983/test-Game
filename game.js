"use strict";
let xPos = 0;
let yPos = 0;


let level1 = [      ["#", "0", "0", "0", "0", "a"]
                        ];

let level2 = [      ["#", "0", "0", "0", "0", "0"]
                    [("0", "0", "0", "0", "0", "a")]
                        ];

let level3 = [      ["#", "|", "0", "b", "0", "|", "0", "|", "0"]
                    [("0", "|", "0", "|", "0", "|", "0", "|", "0")]
                    [("0", "|", "0", "b", "-", "-", "0", "|", "0")]
                    [("0", "|", "0", "0", "0", "0", "0", "|", "0")]
                    [("0", "0", "0", "0", "|", "0", "0", "0", "a")]
                        ];

function userAction(keyPressed){
    /*console.log(keyPressed);  //just to verifie the function its working or not*/
    if (keyPressed.key == "ArrowRight" ){
        
        if (level1[xPos+1] != "a" || level1[xPos+1] != "0" ){
            //Impossible d'avancer
        }

    } else if(keyPressed.key == "ArrowLeft"){
        

    } else if(keyPressed.key == "ArrowDown"){
        

    } else if(keyPressed.key == "ArrowUp"){
        
     
    }   
        
}



//Programe
document.addEventListener(`DOMContentLoaded`, function() {
    document.addEventListener('keydown',userAction);



});
