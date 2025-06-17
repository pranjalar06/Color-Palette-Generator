const gnrateBttn=document.getElementById('gnrateBttn');
const ColorPalette=document.getElementById('ColorPalette');

gnrateBttn.addEventListener('click', generatePallete);

function generatePallete(){
    ColorPalette.innerHTML=''
    for(let i = 0; i<5 ; i++){
        const color=generateRandomColor()
        const colorBox = createColorBox(color)
        ColorPalette.appendChild(colorBox)
    }
}

function generateRandomColor(){
    const letters='1234567890ABCDEF'
    let color='#';
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()* 16)];
    } 
    return color;
}

function createColorBox(color){
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box')
    colorBox.style.backgroundColor=color
    colorBox.textContent=color
    return colorBox
}