//Getting elemts from HTML
const myImg = document.querySelector('img');
const myInputs = document.querySelectorAll('input');



//Placing random figures for the image style property on loading page
window.onload = function () {
  const space = Math.floor((Math.random() * 31));
  const blur = Math.floor((Math.random() * 11));
  const push = Math.floor((Math.random() * 101));
  const myRed = Math.floor((Math.random() * 255));
  const myGreen = Math.floor((Math.random() * 255));
  const myBlue = Math.floor((Math.random() * 255));

  console.log(myInputs[3]);


  myInputs[0].setAttribute('value', space);
  myInputs[1].setAttribute('value', blur);
  myInputs[2].setAttribute('value', push);
  myInputs[3].setAttribute('value', `rgb(${myRed}, ${myGreen}, ${myBlue})`);

  myImg.style.setProperty('--space', space + 'px');
  myImg.style.setProperty('--blur', blur + 'px');
  myImg.style.setProperty('--push', push + 'px');
  myImg.style.setProperty('--base', `rgb(${myRed}, ${myGreen}, ${myBlue})`);

};

//Funtion that updates the image style properties
function updatePicture() {
  let myUnit;
  if (this.type == 'range' ? myUnit = 'px' : myUnit = '');
  myImg.style.setProperty(`--${this.name}`, this.value + myUnit);
}


myInputs.forEach(myInput => myInput.addEventListener('change', updatePicture));
myInputs.forEach(myInput => myInput.addEventListener('mousemove', updatePicture));
