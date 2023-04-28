const zoom=document.querySelector(".zoom");
const photo=document.querySelector(".photo");
const main=document.querySelector(".main");
const logo=document.querySelector(".logo");
const text=document.querySelector(".text");
const error1=document.querySelector(".oe");
const error2=document.querySelector(".te");

const mlogo=document.querySelector(".mlogo");
const button=document.querySelector(".btn");


button.addEventListener('click', () => {
  var intext=document.querySelector(".email").value;
 
  if (validateEmail(intext)) {
    error1.style.display='none';
    error2.style.display='none';
    window.location.href="second.html";
  } else {
    error1.style.display='block';
    error2.style.display='block';
  }
  
});

function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}




const t1=new TimelineMax();
t1.fromTo(photo, 1.5,{ height:"0%" },{height:"100%", ease: Power2.easeInOut })

.fromTo(
  main,
  1,
  {x: "-150%"},
  {x: "0%", ease: Power2.easeInOut } ,"-=1"
)
.fromTo(
  text,
  1,
  {x: "-150%"},
  {x: "0%", ease: Power2.easeInOut } ,"-=1"
)
.fromTo(
  mlogo,
  1,
  {opacity: 0},
  {opacity: 1, ease: Power2.easeInOut } ,"-=1"
)


