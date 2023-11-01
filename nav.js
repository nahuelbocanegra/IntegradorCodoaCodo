let visibility=true;
function nav(){
    console.log(document.getElementById("cont-menu"))
  let ulNav=document.getElementById('ul-nav');
  

  if(visibility){
    ulNav.className='ul-nav navVisible';
    visibility=false;
  }else{
    ulNav.className='ul-nav';
    visibility=true
  }


};

document.getElementById("cont-menu").addEventListener('click',nav)