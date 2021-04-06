export function Stack() {
    this.stack = [];

    this.push = function(element) {
        this.stack.push(element)
    };

    this.pop = function() {
        this.stack.pop();
    };

    return this.stack;
}

export function addPlate(stack) {
    let plate = document.createElement("div");
    
    plate.className = "plate";

    try {
        makeColor(plate);
        plate.style.zIndex = stack.length + 1;

        if(stack.length != 10) {
            stack.push(plate);
            let previousPlate = document.querySelector(".plate");

            previousPlate.insertAdjacentElement("beforeBegin", stack[stack.length - 1]);
            console.log.call(stack, `Добавлен элемент с индексом [${stack.length - 1}]`);
        } else {
            alert("Стэк переполнен!");
            console.log.call(stack, "Переполнение стека");
        }
    } catch (err) {
        console.log(err);
    }
}

export function deletePlate(stack) {
    try {
        let platesBox = document.querySelector(".plates__box"),
        plate = document.querySelector(".plate");

        if(stack.length != 0) {
            platesBox.removeChild(plate);
            stack.pop();
            console.log.call(stack, `Удалён элемент элемент с индексом [${stack.length}]`);
        } else {
            alert("в стеке нет элементов!");
            console.log.call(stack, "В стеке отсуствуют элементы");
        }
    } catch(err) {
        console.log(err);
    }
}

export function makeColor(element) {
    let colorNumber = Math.floor(Math.random() * Math.floor(3));
    element.style.backgroundColor = "";

    switch(colorNumber) {
        case 0:
            element.style.backgroundColor = "Crimson";
            element.style.borderColor = "DarkRed";
            break;
        case 1:
            element.style.backgroundColor = "SteelBlue";
            element.style.borderColor = "DarkSlateBlue";
            break;
        case 2: 
            element.style.backgroundColor = "OliveDrab";
            element.style.borderColor = "DarkOliveGreen";
            break;
        default: 
            element.style.backgroundColor = "gray";
            break;
    }

    return element;
}

let logger = console.log;
console.log = function(message) {
    let time = new Date (),
        hours = String( time.getHours() ),
        minutes = String( time.getMinutes() ),
        seconds = String( time.getSeconds() );
    
    time = hours + ":" + minutes + ":" + seconds;
    logger(time, message, `\n`, this);
};