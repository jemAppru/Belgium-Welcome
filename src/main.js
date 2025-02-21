import './style.css'
import data from "/public/test.json" assert {type:"json"}
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


console.log("javascript loaded")

const myData0 = data[0].text
const myData1  = data[1].text
const myData2  = data[2].text
const myData3 = data[3].text
const myData4  = data[4].text
const myData5  = data[5].text
console.log(myData0)

function updateName(nameJSON){
    const newName = document.getElementById("first-name")
    const upperCase = nameJSON.toUpperCase();
    newName.append(upperCase+" | ")
}

updateName(myData0)
updateName(myData1)
updateName(myData2)
updateName(myData3)
updateName(myData4)
updateName(myData5)