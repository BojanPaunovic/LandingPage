var carousel = document.querySelector("carousel");
var item = carousel.querySelectorAll('img');

function next(){
    carousel.append(item[0]);
}

function prev(){
    carousel.prepend(item[item.length - 1]);
}