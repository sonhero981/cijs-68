// function toFixed(number, index){
//     let stringNumber = number.toString()
//     let newNumber;
//     for(let i = 0; i < stringNumber.length; i++) {
//         if(stringNumber[i] == "."){
//             let indexToFixed = index + i;
//             console.log(indexToFixed)
//             if(stringNumber[indexToFixed + 1] < 5) {
//                 let newNumber = stringNumber.slice(0, indexToFixed)
//                 console.log(newNumber)
//                 console.log("xuong")
//                 return newNumber
//             } else {
//                 console.log("lên");
//                 stringNumber[indexToFixed ] = Number(stringNumber[indexToFixed ]) + 1
//                 console.log(stringNumber[indexToFixed])
//                 let newNumber = stringNumber.slice(0, indexToFixed)
//                 console.log(newNumber)
//                 return newNumber
//             }
//         }
//     }
// }
// console.log(toFixed(123.66566, 3))

//#2 SEARCHBOOK


let searchBtn = document.getElementById("search-btn");
let inputSearch = document.getElementById("input-search");
let row = document.getElementById("row");
let book = document.querySelectorAll(".book");
searchBtn.addEventListener("click",search)

    function search() {
        let key = inputSearch.value;
        fetch( `https://www.googleapis.com/books/v1/volumes?q=${key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderBook(data)
        })
    }


function renderBook(data) {
    row.innerHTML = "";
    let dataRender = data.items.map(x => {
        console.log(x.previewLink)
        return `<div class="col-3">
        <div class="book" style="background-image: url(${x.volumeInfo.imageLinks?.thumbnail});">
            <div class="book-info">
                <div  class="name-book">${x.volumeInfo.title}</div>
                <div class="author">
                    "${x.volumeInfo.authors}"
                </div>
                <div class="detail-book">
                    <a href="${x.previewLink}" class="detail-link">Detail...</a>
                </div>
            </div>
        </div>
    </div>`
}).join("");
    row.insertAdjacentHTML("beforeend",dataRender)
};




