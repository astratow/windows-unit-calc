/*app.js*/
/* takes bar size from drop down menu */
function barSizeSelect() { 
	let barSize = parseFloat(document.getElementById("bar-size").value);
	console.log(barSize);
	return barSize;
}


/* Takes horizontal window size and returns bar */
function barWidth() {
	let barWidth = parseFloat(document.getElementById("width").value);
//	barWidth = barWidth - 
	console.log(barWidth);
	return barWidth;	
}

/* Takes Vertical widnow size and returns bar */
function barHeight() {
	let barHeight = parseFloat(document.getElementById("height").value);
	console.log(barHeight);	
	return barHeight;
}
/* Work out size of the bar for single horizontal or vertical */
function barToCutSingle() {
	let barToCutSize = 0;
	if (barWidth() - barHeight() < 0){
		barToCutSize = barWidth() - 24;
	} else {
		barToCutSize = barHeight() - 24;
	}
	return barToCutSize;
}
/**/
function displaySingleBar() {
	console.log('hello');
	document.getElementById("results").innerHTML = "Vertical bar: " + barToCutSingle();
}
//barSize= barSizeSelect.options[barSizeSelect.selectedIndex].value;

/*function mult(value) {
	var horizontalBar = value - 27;
	x = 2 * value;
	y = 3 * value;

	document.getElementById('results').value = horizontalBar;
	document.getElementById('out3x').value = y;
}
const elem = id => document.getElementById(id);
const btn = document.getElementById('btn');
var width =  document.getElementById("width").value;
var height = document.getElementById("height").value;
var barSize = 18;
document.getElementById('results').innerHTML = oneHorizontalBarEqualDistance;
btn.addEventListener("click", function(){
                       document.getElementById('results').innerHTML = oneHorizontalBarEqualDistance;
                       });

console.log(width);
console.log(height);
function showResults() {
	var width =  Number(document.getElementById("width").value);
	var height = Number(document.getElementById("height").value);
	
	var result = document.getElementById('results').value;
	result = oneHorizontalBarEqualDistance(width);
	console.log(result);
	result.innerHTML = oneHorizontalBarEqualDistance();
    c = document.getElementById('n1').value;
    console.log(c);
    console.log('distance');
    console.log(typeof result);
    console.log(result);    
    console.log(typeof height);
}

function oneHorizontalBarSize(width){
	var width =  Number(document.getElementById("width").value);
  return width - 24; 
}
function oneHorizontalBarEqualDistance(height, barSize){
    return ((height - barSize)/2);
}

const unit = {
    width: 0;
    height: 0;
    barSize: 18;
    barToSpacerBottom: 0;
    barToSpacerTop: 0;
    barToSpacerRight: 0;
    barToSpacerLeft: 0;
    
}


function calcFrame(){
    p.innerHTML = width - 27;
}
function getInputValue(){
    width = getElementsByClassName(width);
    height = getElementsByClassName(height);
}
getInputValue()
*/
