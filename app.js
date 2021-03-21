
var confirmMessage=confirm("do you love car?");
if(confirmMessage==true
)
alert('check the site');
else{
    alert('we will promote our site for you');
}



var favCar = prompt("What's your favourite car?");
while (favCar !== 'modern' && favCar !=='classic') {
    favCar= prompt ('please enter modern or classic');
}


var result = '';
var painting = '';
var noPainting = prompt ("how many paints you want?");


if (favCar=='classic'){
    painting = '<img src="images/classicCar.jpg"/ width="250px"></br>';
}else if(favCar=='modern'){
    painting = '<img src="images/modernCar.jpg"/ width="250px"></br>';

 } else{
     alert('choose between classic or modern');
 }
 

  var num =0;
 for (var i=0;i<noPainting;i++) {
    result+=painting;
    
    num++
    console.log(num);
}
document.write(result+num);