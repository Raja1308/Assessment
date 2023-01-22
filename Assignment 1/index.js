const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const City = document.getElementById('City');
const Country = document.getElementById('Country');
const appendTop = document.getElementById('appendTop');
const appendBottom = document.getElementById('appendBottom');
const table = document.getElementById("table");
const error = document.getElementById("error") 

var insRow,sNo,cell1,cell2,cell3,cell4,flag;

appendTop.addEventListener('click', appendTopFunc);
appendBottom.addEventListener('click', appendBottomFunc); 

function appendTopFunc(e){
	e.preventDefault();
	flag = 1;
	appendCommonFunc();
	sNo.innerHTML='1';
	for (let i=2;i<table.rows.length;i++){
		table.rows[i].cells[0].innerHTML=i;
	}
	swal("Your data entered successfully!");
}

function appendBottomFunc(e){
	e.preventDefault();
	flag = 0;
	appendCommonFunc();
	sNo.innerHTML = (table.rows.length-1);
	swal("Your data entered successfully!");
}

function appendCommonFunc(){
	error.style.color = 'red';
	if(firstName.value == ''){
		error.innerHTML = 'Please enter your first name';
	}else if(lastName.value == ''){
		error.innerHTML = 'Please enter your last name';
	}else if(City.value == ''){
		error.innerHTML = 'Please enter city';
	}else if(Country.value == ''){
		error.innerHTML = 'Please enter country';
	}else{
		if(flag == 1){
			insRow = table.insertRow(1);
		}else{
			insRow = table.insertRow(-1);
		}
		error.innerHTML = '';
		sNo = insRow.insertCell(0);
		cell1 = insRow.insertCell(1);
		cell2 = insRow.insertCell(2);
		cell3 = insRow.insertCell(3);
		cell4 = insRow.insertCell(4);

		cell1.innerHTML = firstName.value;
		cell2.innerHTML = lastName.value;
		cell3.innerHTML = City.value;
		cell4.innerHTML = Country.value;
	}
}


