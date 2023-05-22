const colorDiv= document.getElementById('color');

const red= document.getElementById('red');
const blue= document.getElementById('blue');
const yellow= document.getElementById('yellow');

function mudarCor(){
colorDiv.style.backgroundColor =
"rgb("+red.value+","+blue.value+","+yellow.value+")";
}

red.oninput=mudarCor;
blue.oninput=mudarCor;
yellow.oninput=mudarCor;

mudarCor();
