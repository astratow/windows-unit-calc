//const elem = id => document.getElementById(id);
//const btn = document.getElementById('btn');
//var width =  document.getElementById("width").value;
//var height = document.getElementById("height").value;
var barSize = 18;
//document.getElementById('results').innerHTML = oneHorizontalBarEqualDistance;
/*btn.addEventListener("click", function(){
                       document.getElementById('results').innerHTML = oneHorizontalBarEqualDistance;
                       });*/

//console.log(width);
//console.log(height);
function showResults() {
	var width =  document.getElementById("width").value;
	var height = document.getElementById("height").value;
	width = parseFloat(width);
    height = parseFloat(height);
    var result = document.getElementById('results').value;
	result = oneHorizontalBarEqualDistance(width);
	console.log(result);
//	result.innerHTML = oneHorizontalBarEqualDistance();
//    c = document.getElementById('n1').value;
//    console.log(c);
//    console.log('distance');
//    console.log(typeof result);
//    console.log(result);    
//    console.log(typeof height);
}

function oneHorizontalBarSize(width){
  return width - 24; 
}
function oneHorizontalBarEqualDistance(height, barSize){
    return ((height - barSize)/2);
}

//const unit = {
//    width: 0;
//    height: 0;
//    barSize: 18;
//    //barToSpacerBottom: 0;
//    //barToSpacerTop: 0;
//    //barToSpacerRight: 0;
//    //barToSpacerLeft: 0;
//    
//}


function calcFrame(){
    p.innerHTML = width - 27;
}
//function getInputValue(){
//    width = getElementsByClassName(width);
//    height = getElementsByClassName(height);
//}
//getInputValue()