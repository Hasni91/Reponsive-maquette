const images = document.getElementById("slide__div_img");
const span = document.getElementById("slide__span");
const left = document.getElementById("left");
const right = document.getElementById("right");

let count = 0;

if(count == 0 ){
    span.children[0].style.backgroundColor = "red";
}


right.onclick = () =>{
    
    if(count == 5){
        images.children[5].classList.remove("start");
        span.children[5].style.backgroundColor = "rgb(155, 151, 151)";
        images.children[0].classList.add("start");
        span.children[0].style.backgroundColor = "red";
        count = 0;
    }else{
        images.children[count].classList.remove("start");
        span.children[count].style.backgroundColor = "rgb(155, 151, 151)";
        count++;
        images.children[count].classList.add("start");
        span.children[count].style.backgroundColor = "red";
    }
}

left.onclick = () =>{
    
    if(count == 0){
        images.children[0].classList.remove("start");
        span.children[0].style.backgroundColor = "rgb(155, 151, 151)";
        images.children[5].classList.add("start");
        span.children[5].style.backgroundColor = "red";
        count = 5;
    }else{
        images.children[count].classList.remove("start");
        span.children[count].style.backgroundColor = "rgb(155, 151, 151)";
        count--;
        images.children[count].classList.add("start");
        span.children[count].style.backgroundColor = "red";
    }
}

// for(let i = 0; i < span.children.length; i++){

//     span.children[i].onclick = () =>{
//         images.children[count].classList.remove("start");
//         images.children[i].classList.add("start");
//         span.children[i].style.backgroundColor = "red";
//         span.children[count].style.backgroundColor = "rgb(155, 151, 151)";
//         count = i;
//     };
// }