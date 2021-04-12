import {Stack} from "./stack";
import {addPlate} from "./stack";
import {deletePlate} from "./stack";
import {makeColor} from "./stack";
import {makeBlock} from "./makeBlock";

import "./../css/style.css";

let plates = new Stack(),
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


makeBlock(".make-block-container")("span")(3);