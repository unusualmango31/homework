let plates = new Stack(),
    logger = console.log,
    addButton = document.getElementById("addButton"),
    removeButton = document.getElementById("removeButton");

addButton.addEventListener("click", () => {
    try { 
        return addPlate(plates) 
    } catch (err) {
        console.log(err);
    }
}, false);

removeButton.addEventListener("click", () => {
    try { 
        return deletePlate(plates) 
    } catch (err) {
        console.log(err);
    }
}, false);

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
    let plate = document.createElement("div");
    
    plate.className = "plate";

    try {
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
    } catch (err) {
        console.log(err);
    }
}

function deletePlate(stack) {
    try {
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
    } catch(err) {
        console.log(err);
    }
}

function makeColor(element) {
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

console.log = function(message) {
    let time = new Date (),
        hours = String( time.getHours() ),
        minutes = String( time.getMinutes() ),
        seconds = String( time.getSeconds() );
    
    time = hours + ":" + minutes + ":" + seconds;
    logger(time, message, `\n`, this);
};
