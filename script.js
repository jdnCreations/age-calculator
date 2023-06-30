const date = new Date()
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
const form = document.getElementById('form');

const inputFields = [day, month, year];
var emptyfields;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
});

// const handleSubmit = () => {
//     emptyfields = [];

//     for (let i = 0; i < inputFields.length; i++) {
//         if (inputFields[i].value == "") {
//             emptyfields.push(inputFields[i]);
//         }
//     }

//     if (emptyfields.length == 0) {
//         console.log("no empty fields");
//         // validate
//     }
//     console.log(emptyfields)
// }