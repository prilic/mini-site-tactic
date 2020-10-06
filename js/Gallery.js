const current = document.querySelector('#current');
const imgs = document.querySelectorAll('#gallery img');
const contImg = 0;
//add event click on each images 
imgs.forEach(function imgShow (img){
    img.addEventListener('click',imgClick)
});

function imgClick(e){
    //change the src to the current image
        current.src = e.target.src;
}
