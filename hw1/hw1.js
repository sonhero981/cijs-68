
// #1
// function rot13(str) {
//     let arr = str.toUpperCase().split("");
//     let newChar;
//     let newArr = [];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i].charCodeAt() > 77) {
//             newChar = arr[i].charCodeAt() - 13;
//             newArr.push(newChar);
//         } else {
//             newChar = arr[i].charCodeAt() + 13;
//             newArr.push(newChar);
//         }
//     }
//     let newStr = newArr.map( x => String.fromCharCode(x)).join("");
//     return newStr
// }

// console.log(rot13("PUNEVMNEQ"))

2
function distanceToNearestVowel(str){
    let arr = str.toLowerCase().split("");
    let newArr= [];
    let indexVowel = [];
    let indexNearVowel= [];
    let pos = 100000;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "a" || arr[i] == "e" || arr[i] == "o" || arr[i] == "i" || arr[i] == "u") {
            indexVowel.push(i);
            for (let j = 0; j < arr.length; j++) {
                    let index = Math.abs(j - indexVowel[i])
                    if (pos > index){
                        pos = index
                        indexNearVowel.push(pos)
                    }        
            }
        }
    }
    console.log(indexVowel)
    return indexNearVowel
}
 

console.log(distanceToNearestVowel("abaca"))

// 3
// function checkFirstChar(str) {
//     if (str[0] == 'a' || str[0] == 'e' || str[0] == 'o' || str[0] == 'i' || str[0] == 'u') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var count = 0;
// function translatePigLatin(str) {
//     if (checkFirstChar(str) == true) {
//         if (count === 0) {
//             console.log(str + "way");
//         } else {
//             console.log(str + "ay");
//         }
//     } else {
//         count += 1;
//         let temp = str[0];
//         console.log(temp);
//         str = str.slice(1) + temp;
//         translatePigLatin(str);
//     }
// }

// translatePigLatin("schwartz")

// #3
// function checkFirstChar (str){
//     if ( str[0]=="a" || str[0]=="e" || str[0]=="u" || str[0]=="i" || str[0]=="0") {
//         return true;
//     } else {
//         return false;
//     }
// }

// let newStr;
// let count = 0;
// function checkPigLatin(str) {
//     if (checkFirstChar(str)) {
//         if (count === 0) {
//             newStr = str + "way";
//         } else {
//             newStr = str + "ay"
//         }
//     } else {
//         count ++;
//         str = str.slice(1) + str[0];
//         checkPigLatin(str)
//     }
//     return newStr
// }


// console.log(checkPigLatin("swhachwart"))


// game color


// let boxColor = document.getElementsByClassName("box-color");
// console.log(boxColor);
// let timer = document.querySelector(".timer");
//  function runTime() {
//      return setInterval(function gameOver(){
//         if(timer.value == 0){
//             clearInterval(null)
//             alert("game over!!!");
//         } else {
//             timer.value = timer.value - 0.05
//         }
//      } ,50)
//  }

//  function changeColor(){
     
//  }