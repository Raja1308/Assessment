const sent = document.getElementById('sent');
const letter = document.getElementById('letter');
const output = document.getElementById('output');
const form = document.getElementById('addForm');

form.addEventListener('submit', submitFunc);

function submitFunc(e){
	e.preventDefault();
	var letters = /^[A-Za-z\s]*$/;
	var sentence = sent.value.toLowerCase();
	var checkLetter = letter.value.toLowerCase();
	if(sentence.match(letters) && checkLetter.match(letters)){
		var index = sentence.indexOf(checkLetter)+1;
		if(index == 0){
			output.innerHTML = 'The letter does not exist in the sentence';
		}else{
			var newStr = sentence.substring(index);
			output.innerHTML = newStr;
	}
	}else{
		swal("Please enter only alphabets");
	}
}




