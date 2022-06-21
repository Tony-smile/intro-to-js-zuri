const fullName = "Anthony Chinedu, Ugwuja";
const height = "5.9ft";
const country = "Nigeria"

const composition  = (`My Name is ${fullName}.\n I am ${height} tall.\n I am from ${country}.`)
 alert(composition)

let about = document.querySelector("h1")
about.innerText = composition + "\n\n" 