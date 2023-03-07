var nickname = "Earl";
var height = 153;
var weight = 40;
alert('Name: ' + nickname);
alert('Height: ' + Math.trunc((height/2.54)/12)+ "\'" +Math.trunc((height/2.54)%12))+ "\"";
alert('Weight: ' + Math.trunc(weight * 2.205) + " lbs");


let firstname = prompt("What's your first name?");
let lastname = prompt("What's your last name?");
let birthyear = prompt("What year were you born in?");
document.getElementById('greeting').innerHTML = "Hello " +firstname+ " " +lastname+ "! How does it feel to be " +Math.trunc(2023-birthyear)+ " years old?";


if(confirm('Do you agree to share your personal information with the site? ')){
	document.getElementById('info').innerHTML = "Name: " +nickname+ "<br> Height: " + Math.trunc((height/2.54)/12)+ "\'" +Math.trunc((height/2.54)%12)+ "\""+ "<br> Weight: " + Math.trunc(weight * 2.205) + " lbs";
}
else{
	document.getElementById('info').innerHTML = "User does not wish to share their information.";
}