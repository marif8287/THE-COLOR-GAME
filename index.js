let noOfSquares = 9;

let squares = [];

for(let i=0;i<9;i++){

    squares.push(document.querySelectorAll(".square")[i]);

}

// to show random colours on opening tha game
createColor(squares);

let pickedColor = pickColor();

document.querySelector(".rgb").innerHTML = pickedColor.toUpperCase();

// event listener for new colors button

document.querySelector(".new-color").addEventListener("click", function(){

    createColor(squares);
    pickedColor = pickColor();
    document.querySelector(".rgb").innerHTML = pickedColor.toUpperCase();

    document.querySelector(".message").innerHTML = "CHOOSE THE RIGHT COLOR";

    
})

// eventlistener for easy button

document.querySelector(".easy").addEventListener("click", function(){

    noOfSquares = 3;
    pickedColor = pickColor();
    document.querySelector(".rgb").innerHTML = pickedColor.toUpperCase();

    for(let i=noOfSquares;i<9;i++){

        document.querySelectorAll(".square")[i].style.visibility = "hidden";
    }
})

// eventlistener for medium button

document.querySelector(".medium").addEventListener("click", function(){

    noOfSquares = 6;
    pickedColor = pickColor();
    document.querySelector(".rgb").innerHTML = pickedColor.toUpperCase();
    
    for(let i=0;i<noOfSquares;i++){

        document.querySelectorAll(".square")[i].style.visibility = "visible";
    }
    for(let i=noOfSquares;i<9;i++){

        document.querySelectorAll(".square")[i].style.visibility = "hidden";
    }
})

// eventlistener for hard button

document.querySelector(".hard").addEventListener("click", function(){

    noOfSquares = 9;
    pickedColor = pickColor();
    document.querySelector(".rgb").innerHTML = pickedColor.toUpperCase();
    
    for(let i=0;i<noOfSquares;i++){

        document.querySelectorAll(".square")[i].style.visibility = "visible";
    }
})


// eventListener to perform action while we click on a particular div;

for(let i=0;i<noOfSquares;i++){

document.querySelectorAll(".square")[i].addEventListener("click",function(){

    if(this.style.backgroundColor == pickedColor){

        for(let i=0;i<noOfSquares;i++){

            document.querySelectorAll(".square")[i].style.backgroundColor = pickedColor;
        }

        document.querySelector(".message").innerHTML = "CONGRAGULATIONS❤️❤️ , YOU SELECTED THE RIGHT COLOR !!";

    }

    else{

        this.style.backgroundColor = "black";
    }

})

}

// function to fill colors in the box

function createColor(squares){

    
        for(let i=0;i<noOfSquares;i++){

            squares[i].style.backgroundColor = randomColour();
        }

}

// function to generate a random color

function randomColour(){

    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);

    let colour = "RGB("+ r + "," + g + "," + b + ")";

    return colour;
}

// to get the target box color

function pickColor(){

    let divNo = Math.round(Math.random() * noOfSquares);

    return (document.querySelectorAll(".square")[divNo].style.backgroundColor);

}




