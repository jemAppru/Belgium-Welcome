// import "./style.css";
// import data from "/public/test.json" assert { type: "json" };
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";

const DATA_MAX_AGE = 30;
const REFRESH_RATE = 10;
end_point = "https://www.ccplay.es/events/aoy/data/list_data.json"
console.log("javascript loaded");

async function getData(url, position) {

    try {
        const response = await fetch(url, { cache: 'no-store', next: { revalidate: 5000 } });

        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }

        const data = await response.text();
        const newdata = JSON.parse(data);
        const newerdata = newdata[position].text
        const stringy = JSON.stringify(newerdata)
        console.log("CALING ASYNC FUNCTION")

        return newdata;
    } catch (err) {
        console.error(err);
    }

}
function updateName(nameJSON, param) {
    const newName = document.getElementsByClassName("first-name")[0];
    const upperCase = nameJSON.toUpperCase();
    const div = document.createElement("div");
    div.setAttribute("class", "first-name")
    div.setAttribute("id", param)
    const node = document.createTextNode('\u00A0' + upperCase + " | ");
    div.appendChild(node);
    newName.appendChild(div);

    console.log("worked");
}

function removeLastName(divID) {
    const lastNameinList = document.getElementById(divID);
    lastNameinList.remove();
}


let timer;
timer = setInterval(() => {

    const sec = new Date().getSeconds();
    if (sec) return;

}, 1000)



getData(end_point, 0).then(meta => {
    // console.log("meta data "+meta[0].text); // {"metadata": "for: test.png"}
});
(async () => {
    const meta = await getData(end_point, 0);
    
    for (let i = 0; i < meta.length; i++) {
        console.log("this is new name " + meta[i].text); // {"metadata": "for: test.png"}
        updateName(meta[i].text, i);
        if (i > 10) {
            for (let j = 11; j < meta.length; j++) {
                console.log("remove!" + j)
                removeLastName(j)
            }
        }

    }
})();






