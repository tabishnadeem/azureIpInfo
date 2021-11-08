import { countries } from "./countrydata.js";

countries.forEach( arr => { console.log(arr);});

let head1 = document.createElement("h2");
let divTable = document.createElement("div");
let head2 = document.createElement("h3");
let table = document.createElement("table");

const tr1 = table.insertRow();
const tr2 = table.insertRow();

const td1 = tr1.insertCell();
td1.appendChild(document.createTextNode("Country"));
const td2 = tr1.insertCell();
td2.appendChild(document.createTextNode("Capital"));

for (let i = 1; i <= 2; i++) {
    
  for(let j = 0; j < countries.length;){
      let text;
      if(i == 1){
          text = document.createTextNode(countries[j].Name);
      }else{
          text = document.createTextNode(countries[j].Capital)
      }
    let td = tr2.insertCell();
    td.appendChild(text);
  }
    
}

divTable.appendChild(table);
document.body.appendChild(divTable);
