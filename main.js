var thePath = document.querySelectorAll("g");
console.log(thePath);

var classes = [
	".Hair",
	".Eye",
	"Nose",
	".Mouth",
	".EarsLeft",
	".EarsRight",
	".rightLeg",
    ".leftLeg",
    ".Neck",
    ".Face",
    ".Clothes",
    ".Hand",
    ".Teddy",
    ".brow"
];

for (let i = 0; i < classes.length; i++) {
    var classArr = document.querySelectorAll(classes[i])
    for (let j = 0; j < array.length; j++) {
        classArr[j].addEventListener("click", Display)
    }
}





// for (let i = 0; i < thePath.length; i++) {
//     for (let j = 0; j < thePath[i].childNodes.length; j++) {
//         thePath[i][j].add
//     }

// }
