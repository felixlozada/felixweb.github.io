
let menuIcon=document.querySelector('.menu-icon');let menu=document.querySelector('.menu nav');let cerrado=true;menuIcon.addEventListener('click',()=>{if(cerrado){cerrado=false;menu.style.height='80vh';menu.style.opacity='1';}else{cerrado=true;menu.style.height='0vw';menu.style.opacity='0';}});
let modal=document.querySelector('.modal');let modalImg=document.querySelector('.modal-img');let close=document.querySelector('.close');let trabajos=document.querySelectorAll('.contenedor-trabajo');let btnLeft=document.querySelector('.btn-left');let btnRight=document.querySelector('.btn-right');trabajos.forEach((trabajo)=>{trabajo.addEventListener('click',()=>{ var images=trabajo.children;for(i=0;i<images.length;i++){let image=document.createElement('img');image.src=images[i].src;modalImg.appendChild(image);} 
modal.style.display="flex";setTimeout(()=>{modal.style.opacity="1";},400); if(images.length>1){btnRight.style.display="block";btnLeft.style.display="block"; let imagesModal=modalImg.children;let tamañoImage=imagesModal[0].clientWidth;let contador=0; window.addEventListener('resize',()=>{tamañoWidth=slide[0].clientWidth;});btnLeft.addEventListener('click',()=>{if(contador<=0){contador=imagesModal.length-1;modalImg.style.transform='translate('+(-tamañoImage*contador)+'px)';}else{contador--;modalImg.style.transform='translate('+(-tamañoImage*contador)+'px)';}
console.log(contador);});btnRight.addEventListener('click',()=>{if(contador==imagesModal.length-1){contador=0;modalImg.style.transform='translate(0px)';}else{contador++;}
modalImg.style.transform='translate('+(-tamañoImage*contador)+'px)';console.log(contador);});}else{ btnRight.style.display="none";btnLeft.style.display="none";}});});close.addEventListener('click',()=>{modal.style.opacity="0";modalImg.style.transform='translate(0px)';contador=0;setTimeout(()=>{modal.style.display="none";let images=document.querySelectorAll('.modal-img img');for(i=0;i<images.length;i++){images[i].remove();}},500);});