
var confirmMessage=confirm("do you love car?");
if(confirmMessage==true
)
alert('check the site');
else{
    alert('we will promote our site for you');
}



var favCar = prompt("What's your favourite class of cars classsic or modern?");
if (favCar=='classic'){
    document.write('<img src="images/classicCar.jpg"/>');
}else if(favCar=='modern'){
    document.write('<img src="images/modernCar.jpg"/>');

 }else{
    alert('choose between classic or modern next time');
}
