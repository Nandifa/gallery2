const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click',function(e){
  //cek apakah yang di-click adalah thumb
  if(e.target.className == 'thumb') {
    
    jumbo.src = e.target.src;
     jumbo.classList.add('fade');
     setTimeoute(function(){
       jumbo.classList.remove('fade');
       jumbo.classList.remove('fade');
     },500);
     
     
     thumb.forEach(function(thumb){
     //  if(thumb.classList.contains('active')){
       //  thumb.classList.remove('active');
       thumb.className = 'thumb';
       
     });
     e.target.classList.add('active');
  }
});