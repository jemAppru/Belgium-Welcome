// import "./style.css";
// import data from "/public/test.json" assert { type: "json" };
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";

//upper limit is 12
console.log("javascript loaded");

// const myData0 = data[0].text;
// const myData1 = data[1].text;
// const myDataArray = data;
// console.log(myDataArray);

//console.log(myDataArray)

function updateName(nameJSON,param) {
  const newName = document.getElementsByClassName("first-name")[0];
  const upperCase = nameJSON.toUpperCase();
  const div = document.createElement("div");
  div.setAttribute("class","first-name")
  div.setAttribute("id",param)
  const node = document.createTextNode('\u00A0'+upperCase +" | ");
  div.appendChild(node);
  newName.appendChild(div);

  console.log("worked");
}

