let plates = new Stack();

function Stack() {
    this.stack = [];

    this.push = function(element) {
        this.stack.push(element)
    };

    this.pop = function() {
        this.stack.pop();
    };

    return this.stack;
}

function addPlate(stack) {
    let colorNumber = Math.floor(Math.random() * Math.floor(3)),
        plate = document.createElement("div");

    plate.className = "plate";
    makeColor(plate, colorNumber);

    if(stack.length != 10) {
        stack.push(plate);
        createPlate(stack);
    } else {
        alert("Стэк переполнен!");
    }
    console.log(stack);
}

function deletePlate(stack) {
    let platesBox = document.querySelector(".plates__box"),
        plate = document.querySelector(".plate");

    if(stack.length != 0) {
        platesBox.removeChild(plate);
        stack.pop();
    } else {
        alert("в стеке нет элементов!");
    }
    console.log(stack);
}

function createPlate(stack) {
    let plate = document.querySelector(".plate");
        plate.style.zIndex = stack.length;

    plate.insertAdjacentElement("beforeBegin", stack[stack.length - 1]);
}

function makeColor(plate, colorNumber) {
    plate.style.backgroundColor = "";

    switch(colorNumber) {
        case 0:
            plate.style.backgroundColor = "Crimson";
            plate.style.borderColor = "DarkRed";
            break;
        case 1:
            plate.style.backgroundColor = "SteelBlue";
            plate.style.borderColor = "DarkSlateBlue";
            break;
        case 2: 
            plate.style.backgroundColor = "OliveDrab";
            plate.style.borderColor = "DarkOliveGreen";
            break;
        default: 
        plate.style.backgroundColor = "gray";
            break;
    }

    return plate;
}