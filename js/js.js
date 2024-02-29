'use strict';

AOS.init();



/*================================ ScrollUp =============================*/


let scrollUp = document.querySelector('.arrow_up');

window.onscroll = function ScrollUP(){
    if (window.pageYOffset > '600')
    {
        scrollUp.style.display ='block';
    }
    else {
        scrollUp.style.display ='none';
    }
}

function scrollUP_Down(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

scrollUp.addEventListener('click', () => {
    scrollUP_Down(body);
});


/*================================ Navision on the block =============================*/




let images_box = document.querySelectorAll('.images_box');
let invisible_info = document.querySelectorAll('.invisible_info');
let box_mini_fog = document.querySelectorAll('.box_mini_fog');

let body = document.querySelector('body');

for (let i = 0; i < images_box.length; i++){
    images_box[i].addEventListener('mouseover', function (){
        invisible_info[i].style.display = 'flex';
        box_mini_fog[i].style.display = 'flex';
    });
    images_box[i].addEventListener('mouseout', function (){
        invisible_info[i].style.display = 'none';
        box_mini_fog[i].style.display = 'none';
    });


    box_mini_fog[i].addEventListener('mouseover', function (){
        box_mini_fog[i].style.display = 'flex';
        invisible_info[i].style.display = 'flex';
    });
    box_mini_fog[i].addEventListener('mouseout', function (){
        box_mini_fog[i].style.display = 'none';
        invisible_info[i].style.display = 'none';
    });
}


let box_fog = document.querySelectorAll('.box_fog');
let images_box_big = document.querySelectorAll('.images_box_big');

for (let i = 0; i< images_box_big.length; i++){
    images_box_big[i].addEventListener('mouseover', function (){
       box_fog[i].style.display = 'flex';
    });
    images_box_big[i].addEventListener('mouseout', function (){
        box_fog[i].style.display = 'none';
    });


    box_fog[i].addEventListener('mouseover', function (){
        box_fog[i].style.display = 'flex';
    });
    box_fog[i].addEventListener('mouseout', function (){
        box_fog[i].style.display = 'none';
    });
}

/*fix*/
/*let rating2 = document.querySelectorAll('.rating');
for (let i = 0; i < rating2.length; i++){
    rating2[i].addEventListener('mouseover', function (){
        box_mini_fog[i].style.display = 'flex';
    });
    rating2[i].addEventListener('mouseout', function (){
        box_mini_fog[i].style.display = 'none';
    });
}*/






/*========================== STARS ======================*/


let rating = document.querySelectorAll('.rating');

for (let i = 0; i < rating.length; i++){
    rating[i].dataset.name = `${i}`;
}

document.querySelectorAll('.rating').forEach(item => {
    let id = 'rating_' + item.dataset.name;
    for(let i = 0; i < 5; i++)
        item.innerHTML += `
      <label for=${id}_${i}></label>
      <input type=radio ${item.dataset.value-1===i&&'checked'||''} 
             name=${id} 
             id=${id}_${i} 
             onclick="">`;
});


/*=========== VIDEO-PLAYER=================*/

let button_play_mini = document.querySelectorAll('.button_play_mini');
let black_fon = document.querySelector('.black_fon');

for (let i = 0; i < button_play_mini.length; i++){
    button_play_mini[i].onclick = function (){
        black_fon.style.display = 'flex';
        black_fon.innerHTML = `<iframe width="960" height="600" src="${button_play_mini[i].title}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>`;
        body.style.overflow = 'hidden';
        scrollUp.style.display = 'none';
    }
}
black_fon.onclick = function (){
    black_fon.style.display = 'none';
    black_fon.innerHTML = ' ';
    body.style.overflow = 'auto';
    if (window.pageYOffset > '600')scrollUp.style.display ='block';

}


let header_button = document.querySelectorAll('.header_button');

header_button[0].onclick = function () {
    let el = document.querySelector('.newest_movie');
    el.scrollIntoView();
}
header_button[1].onclick = function () {
    let el = document.querySelector('.all_movies');
    el.scrollIntoView();
}
header_button[2].onclick = function () {
    let el = document.querySelector('.you_may_also_like');
    el.scrollIntoView();
}






