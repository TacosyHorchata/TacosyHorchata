let myImage=document.querySelector('img');

myImage.onclick= function(){
    let mySrc= myImage.getAttribute('src');
    if (mySrc === 'images/plomerodibujo.jpg'){
        myImage.setAttribute('src', 'images/meridaletras.jpg');
        myImage.setAttribute('width', '579px');
    }else{
        myImage.setAttribute('src', 'images/plomerodibujo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt ('Please enter your nombre bitch');
    localStorage.setItem('name', myName)
    if (!myName){
        setUserName(); 
    }else{
        myHeading.textContent= 'HOGARE ama a: ' + myName;
    }
    
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent = 'HOGARE ama a:' + storedName;

}

myButton.onclick = function(){
    setUserName();
}