const myImage = document.querySelector("img");
myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png"){
        myImage.setAttribute("src","images/firefox2.png");
    }else {
        myImage.setAttribute("src","images/firefox2.png");
    }
}

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter your name");
    if (!myName){
        setUserName();
    }else {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function (){
    setUserName();
}