// import "./style.css";
// import data from "/public/test.json" assert { type: "json" };
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";

const end_point = "https://www.ccplay.es/events/aoy/data/list_data.json";
let DEMO;
console.log("javascript loaded");
// demo mode, when client is not a player
if (typeof BroadSignObject === 'undefined') DEMO = true;
if (DEMO) setTimeout(() => (BroadSignPlay()), 1000);

async function getData(url, position) {
  try {
    const response = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 5000 },
    });

    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }

    const data = await response.text();
    const newdata = JSON.parse(data);
    const newerdata = newdata[position].text;
    const stringy = JSON.stringify(newerdata);
    console.log("CALING ASYNC FUNCTION");

    return newdata;
  } catch (err) {
    console.error(err);
  }
}
function BroadSignPlay() {
 
  // run getData again but with shorter maxAge
  // i.e. update the data in localStorage while the ad
  // plays so that is it fresh for next playback 
  const res = getData(end_point,0);

  return res;

 
};


// demo mode, when client is not a player



// function updateName(nameJSON, param) {
//     const newName = document.getElementsByClassName("first-name")[0];
//     const upperCase = nameJSON.toUpperCase();
//     const div = document.createElement("div");
//     div.setAttribute("class", "first-name")
//     div.setAttribute("id", param)
//     const node = document.createTextNode('\u00A0' + upperCase + " | ");
//     div.appendChild(node);
//     newName.appendChild(div);

//     console.log("worked");
// }

// function updateName(insertedName, id) {
//   const newName = document.getElementById(id);
//   const upperCase = insertedName.toUpperCase();
//   newName.innerHTML = "\u00A0" + upperCase + " | ";
// }

// function removeLastName(divID) {
//   const lastNameinList = document.getElementById(divID);
//   lastNameinList.remove();
// }

// let timer;
// timer = setInterval(() => {
//     (async () => {
//         const meta = await getData(end_point, 0);

//         for (let i = 0; i < meta.length; i++) {
//             console.log("this is new name " + meta[i].text); // {"metadata": "for: test.png"}
//             updateName(meta[i].text, i);
//             const textdiv = document.getElementById(i);
//             let numOfDivs = document.getElementsByClassName('div')

//             console.log("this is no. of divs!" + numOfDivs.length);

//             console.log("ARRAY LENGTH! " + meta.length)

//             if (i > 5) {
//                 for (let j = 5; j < meta.length; j++) {
//                     console.log("remove!" + j);
//                     removeLastName(j);
//                 }

//             }
//             if (numOfDivs.length >= meta.length) {
//                 const testArr = []
//                 numOfDivs.forEach(function (d, i) {
//                     if (testArr.indexOf(d.innerText) >= -1) {
//                         console.log("REMOOVED!")
//                         d.remove();
//                     }

//                 });
//             }

//         }

//     })();
// }, 1000);

let timer;
timer = setInterval(() => {
  (async () => {
    let meda; 
    if(DEMO== true){
      console.log("DEMO mode")
      meda = await getData(end_point, 0);
    }else{
      meda = await BroadSignPlay();
    }
    console.log(meda);
    const newArr = [];
    for (let i = 0; i < meda.length; i++) {
      const newName = meda[i].text.toUpperCase();
      console.log(newName);
      newArr.push(" " + newName + " |");
      const charNo = newArr.join("").length;
      console.log("char number= "+ charNo )
      if (charNo >= 85) {
        newArr.pop();
      }
    }

    const newerArr = newArr.toString();
    const test = newerArr.replaceAll(",", "");
   
    console.log("the new arr" + newArr[0]);
    document.getElementById("blank").innerHTML = test
    
    //type writer effect
    // let i = 0;
    // const speed = 50;
    // function typeWriter() {
    //   if (i < newArr[0].length) {
    //     document.getElementById("blank").innerHTML += newArr[0].charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //   }
    // }typeWriter()
  })();
}, 5000);
