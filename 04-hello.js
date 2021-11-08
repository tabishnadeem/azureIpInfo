
let div = document.createElement("div");

div.style.textAlign = "center";
div.style.border = "2px solid black";
div.style.padding = "10%";


let img = document.createElement("img");
img.src = "cat.jpg"
img.style.borderRadius = "50%";
img.width = "200";

img.height = "200"
div.appendChild(img);

let heading = document.createElement("h2");
heading.textContent = "Hi! My Name is Spongebob and this is my";
div.appendChild(heading);


let para1 = document.createElement("p");
let para2 = document.createElement("p");
let para3 = document.createElement("p");
let br = document.createElement("br");
para1.textContent = `introduction. I work as a fry cook and i would like to get my drivers`;
para1.appendChild(br);
para2.textContent =`license in the newar future. In my free time, I enjoy hanging out with`;
para2.appendChild(br);
para3.textContent = `my best friend Patrick.`;
para3.appendChild(br);
div.appendChild(para1);
div.appendChild(para2);
div.appendChild(para3);

document.body.appendChild(div);