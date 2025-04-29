const container=document.querySelector('.container');
let gridSize=prompt('Enter the number of squares: ')

for(i=1;i<=(gridSize*gridSize);i++){
    const div=document.createElement('div');
    let length=1200/gridSize;
    let a=i+1;
    console.log(a);
    div.style.cssText=`width:${length}px; height:${length}px`;
        if(a%11===0){
            div.classList.add('class-two');
        }else if(a%3===0){
            div.classList.add('class-three');
        }else if(a%5===0){
            div.classList.add('class-five');
        }else if(a%7===0){
            div.classList.add('class-seven');
        }else{
            div.classList.add('smallBox');
        }
        container.appendChild(div);
}


const smallBoxes = document.querySelectorAll('.smallBox');
const twos =document.querySelectorAll('.class-two');
const threes=document.querySelectorAll('.class-three');
const fives=document.querySelectorAll('.class-five');
const sevens=document.querySelectorAll('.class-seven');


[...smallBoxes].forEach(smallBox => {
  smallBox.addEventListener('mouseenter', () => {
      smallBox.classList.add('permaHover');
  });
})
twos.forEach(two => {
    two.addEventListener('mouseenter', () => {
        two.classList.add('ni');
    });
})
threes.forEach(three => {
    three.addEventListener('mouseenter', () => {
        three.classList.add('san');
    });
})
fives.forEach(five => {
    five.addEventListener('mouseenter', () => {
        five.classList.add('goo');
    });
})
sevens.forEach(seven => {
    seven.addEventListener('mouseenter', () => {
        seven.classList.add('nana');
    });
})
