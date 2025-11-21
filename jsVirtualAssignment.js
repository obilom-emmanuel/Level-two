//To determine the character entered by the user


//Prompt the user to enter a character
let character = prompt('Enter a character and i will tell you the character you entered');

//Array of vowels
let vowel = ['a', 'e', 'i', 'o', 'u'];

//Array of consonants
let consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

//If else condition that check the character inputed by the user
if (vowel.includes(character)){
	alert('You entered a vowel');
}
else if(consonant.includes(character)){
	alert('You entered a consonant');
}
else if(!isNaN(character)){
	alert('You entered a number');
}
else{
	alert('You entered a special character');
}