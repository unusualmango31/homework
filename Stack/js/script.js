let plates = new Stack();
let logger = console.log;

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
    plate.style.zIndex = stack.length + 1;

    if(stack.length != 10) {
        stack.push(plate);
        previousPlate = document.querySelector(".plate");
        previousPlate.insertAdjacentElement("beforeBegin", stack[stack.length - 1]);
        console.log.call(plates, `Добавлен элемент с индексом [${stack.length - 1}]`);
    } else {
        alert("Стэк переполнен!");
        console.log.call(plates, "Переполнение стека");
    }
}

function deletePlate(stack) {
    let platesBox = document.querySelector(".plates__box"),
        plate = document.querySelector(".plate");

    if(stack.length != 0) {
        platesBox.removeChild(plate);
        stack.pop();
        console.log.call(plates, `Удалён элемент элемент с индексом [${stack.length}]`);
    } else {
        alert("в стеке нет элементов!");
        console.log.call(plates, "В стеке отсуствуют элементы");
    }
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

console.log = function(message) {
    let time = new Date (),
        hours = String( time.getHours() ),
        minutes = String( time.getMinutes() ),
        seconds = String( time.getSeconds() );
    
    time = hours + ":" + minutes + ":" + seconds;
    logger(time, message, `\n`, this);
};
