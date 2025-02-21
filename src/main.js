import "./style.css";
import data from "/public/test.json" assert { type: "json" };
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

//upper limit is 12
console.log("javascript loaded");

const myData0 = data[0].text;
const myData1 = data[1].text;
const myDataArray = data;
console.log(myDataArray);

//console.log(myDataArray)

function updateName(nameJSON) {
  const newName = document.getElementById("first-name");
  const upperCase = nameJSON.toUpperCase();

  const div = document.createElement("div");
  div.setAttribute("id","first-name")
  const node = document.createTextNode('\u00A0'+upperCase +" | ");
  div.appendChild(node);
  newName.appendChild(div);

  newName.appendChild(div);

  console.log("worked");
}

// updateName(myData0);
// updateName(myData1);

for (let i = 0; i < myDataArray.length; i++) {
    console.log(myDataArray[i].text);
    updateName(myDataArray[i].text);

}
