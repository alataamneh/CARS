
var confirmMessage = confirm("do you love car?");
if (confirmMessage == true
)
    alert('check the site');
else {
    alert('we will promote our site for you');
}

var age = prompt("whats your age?");
function getAge(userAge) {
    if (userAge >= 18 && userAge <= 35) {
        alert('welcome to the site');

    } else if (userAge < 18 || userAge > 35) {
        alert('sorry your not allowed');
    } else {
        alert('please enter a number');
    }
}
getAge(age);


    var favCar = prompt("What's your favourite car?");
    while (favCar !== 'modern' && favCar !== 'classic') {
        favCar = prompt('please enter modern or classic');
    }



    var result = '';
    var painting = '';


    if (favCar == 'classic') {
        painting = '<img src="images/classicCar.jpg"/ width="250px"></br>';
    } else if (favCar == 'modern') {
        painting = '<img src="images/modernCar.jpg"/ width="250px"></br>';

    } else {
        alert('choose between classic or modern');
    }

    var noPainting = prompt("how many paints you want?");

    var num = 0;
    for (var i = 0; i < noPainting; i++) {
        result += painting;
        
        num++
        console.log(num);
    }
    document.write(result + num);