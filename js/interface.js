/* Animate icon */
document.getElementById('container').addEventListener('click',function myFunction() {
    this.classList.toggle("change");
   });

/*display element of the menu*/

document.getElementById('container').addEventListener('click',function scroolMenu(){
    var element = document.getElementById("menu");
    if(element.style.display === "block"){
        element.style.display = "none";
    }
    else{
        element.style.display="block"; 
    }
});

/*modal*/

// Get the div modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("btn");

// Get the closes button
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close icon, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// feedback carousel
const track =document.querySelector('.feedback_track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.feed-right');
const prevBtn = document.querySelector('.feed-left');

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideSize);

//arrange the slide next to one another
const setSlidePosition = function (slide,index){
  slide.style.left = slideWidth * index +'px';
}
slides.forEach(setSlidePosition);

//when i click left, move the slide to the left

//when i click right, move the slide to the right
nextBtn.addEventListener('click',function(e){
  const currentSlide = track.document.querySelector('.current-feedback');
  console.log(currentSlide);
  //const nextSlide =
  //move the slide

});