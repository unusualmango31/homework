function makeBlock(parentName) {
    let parent = document.querySelector(parentName);
    const deleteButtonStyle = `
                                border: none;
                                background: transparent;
                                margin-left: 10px;
                                margin-top: 10px;
                                width: 16px;
                                height: 16px;
                                font-size: 15px;
                                font-weight: 700;
                                text-align: center;
                                `;

    return function(childrenName) {
        return function(numberOfChildrens = 1) {
            try {
                if(typeof numberOfChildrens == "string") {
                    throw new Error("invalid type of the argument");
                }
            }

            catch(err) {
                alert("Неверный тип аргумента количества блоков\nКоличество должно быть числом");
                console.log(err);
            }
            for(let i = 0; i < numberOfChildrens; i++) {
                let children = document.createElement(childrenName),
                    deleteButton = document.createElement("button");

                deleteButton.style.cssText = deleteButtonStyle;
                deleteButton.innerHTML = "X";

                if(parentName[0] == "." || parentName[0] == "#") {
                    deleteButton.className = parentName.slice(1) + "__deleteButton";
                } else {
                    deleteButton.className = parentName + "__deleteButton";
                }
                    
                makeColor(children);
                deleteButton.addEventListener("click", () => parent.removeChild(children));
                
                try {
                    children.appendChild(deleteButton);
                    parent.appendChild(children);
                }
                catch(err) {
                    alert("Введено неправильное имя родительского блока!");
                    console.log(err.message);
                }
            }
        }
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

makeBlock(".container")("span")(3);