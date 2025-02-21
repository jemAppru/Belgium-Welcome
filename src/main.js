import './style.css'
import data from "/public/test.json" assert {type:"json"}
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


console.log("javascript loaded")

const myData0 = data[0].text
const myDataArray = data

//console.log(myDataArray)

function updateName(nameJSON){
    const newName = document.getElementById("first-name")
    const upperCase = nameJSON.toUpperCase();
    newName.append(upperCase+" | ")
}

for (let i = 0; i < myDataArray.length; i++) {
    console.log(myDataArray[i].text);
    updateName(myDataArray[i].text);
}