
//First Lab
function myfun(){
    let element = document.getElementById("colorChange")
    element.classList.toggle("BodyStyle");

    let text = document.getElementById("text")
    text.textContent = 'Background Color is pink & purple';
    text.style.color = 'white';

//    document.querySelectorAll("p")[0].style.color = "white"
//    document.querySelectorAll("p")[1].style.color = "white"
}




//Second Lab

function pink(){
    let img = document.getElementById("colorChange")
    img.style.backgroundColor = "Pink"

    let text = document.getElementById("text")
    text.textContent = 'Background Color is pink';
    text.style.color = 'white';
}

function purple(){
    let img = document.getElementById("colorChange")
    img.style.backgroundColor = "rgb(145, 108, 145)"

    let text = document.getElementById("text")
    text.textContent = 'Background Color is Purple';
    text.style.color = 'white';

}