// this is javascript main file

document.write("<div class='container'>");
document.write("<div class='row'>");
document.write("<div class='grid text-center'>");
// this is search field
document.write("<div class='input-group mb-3'>");
document.write(
	"<input class='form-control' id='stuSearch' name='stuSearch' type='text' placeholder='You Should Enter 1 to 13 from below student list' aria-label='Recipient's username' aria-describedby='button-addon2'>"
);
document.write(
	"<button class='btn btn-primary' type='button' id='button-addon2' onclick='checkStuData()'>Search</button>"
);
document.write("</div>");
// this is table
document.write("<table class='table table-bordered table-hover'>");
document.write("<thead class='table-primary'>");
document.write("<tr >");
document.write("<th  scope='col'>SL</th>");
document.write("<th scope='col'>Roll</th>");
document.write("<th scope='col'>Reg No</th>");
document.write("<th scope='col'>Name</th>");
document.write("<th scope='col'>Batch</th>");
document.write("<th scope='col'>Department</th>");
document.write("</tr>");
document.write("</thead>");
// start tabel body
document.write("<tbody>");
document.write("<tr>");
document.write("<td id='sl'></td>");
document.write("<td id='roll'></td>");
document.write("<td id='reg'></td>");
document.write("<td id='name'></td>");
document.write("<td id='batch'></td>");
document.write("<td id='department'></td>");
document.write("</tr>");
document.write("</tbody>");
// end tbody
document.write("</table>");
// end table
document.write("</div>");
document.write("</div>");
document.write("</div>");



function checkStuData() {
	var value = document.getElementById("stuSearch").value;
	if (value == 1) {
		document.getElementById("sl").innerHTML = "1";
		document.getElementById("roll").innerHTML = "30";
		document.getElementById("reg").innerHTML = "FIT WDD 1330";
		document.getElementById("name").innerHTML = "Md Fahmiduzzaman Sagar";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 2) {
		document.getElementById("sl").innerHTML = "2";
		document.getElementById("roll").innerHTML = "46";
		document.getElementById("reg").innerHTML = "FIT WDD 1346";
		document.getElementById("name").innerHTML = "Md Delowar Hossain";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 3) {
		document.getElementById("sl").innerHTML = "3";
		document.getElementById("roll").innerHTML = "47";
		document.getElementById("reg").innerHTML = "FIT WDD 1347";
		document.getElementById("name").innerHTML = "Md Mizanur Rahman";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 4) {
		document.getElementById("sl").innerHTML = "4";
		document.getElementById("roll").innerHTML = "48";
		document.getElementById("reg").innerHTML = "FIT WDD 1348";
		document.getElementById("name").innerHTML = "Abu Rayhan";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 5) {
		document.getElementById("sl").innerHTML = "5";
		document.getElementById("roll").innerHTML = "49";
		document.getElementById("reg").innerHTML = "FIT WDD 1349";
		document.getElementById("name").innerHTML = "Md Oyahid Murad";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 6) {
		document.getElementById("sl").innerHTML = "6";
		document.getElementById("roll").innerHTML = "50";
		document.getElementById("reg").innerHTML = "FIT WDD 1350";
		document.getElementById("name").innerHTML = "Rima Akter";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department ").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 7) {
		document.getElementById("sl").innerHTML = "7";
		document.getElementById("roll").innerHTML = "51";
		document.getElementById("reg").innerHTML = "FIT WDD 1351";
		document.getElementById("name").innerHTML = "Setu Rani Das";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 8) {
		document.getElementById("sl").innerHTML = "8";
		document.getElementById("roll").innerHTML = "52";
		document.getElementById("reg").innerHTML = "FIT WDD 11-13";
		document.getElementById("name").innerHTML = "Kaniz Fatema";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 9) {
		document.getElementById("sl").innerHTML = "9";
		document.getElementById("roll").innerHTML = "53";
		document.getElementById("reg").innerHTML = "FIT WDD 12-13";
		document.getElementById("name").innerHTML = "Md Faruk Hossain";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 10) {
		document.getElementById("sl").innerHTML = "10";
		document.getElementById("roll").innerHTML = "54";
		document.getElementById("reg").innerHTML = "FIT WDD 12-13";
		document.getElementById("name").innerHTML = "Amir Hamza Pathan";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 11) {
		document.getElementById("sl").innerHTML = "11";
		document.getElementById("roll").innerHTML = "55";
		document.getElementById("reg").innerHTML = "FIT WDD 12-13";
		document.getElementById("name").innerHTML = "Asma Akter";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 12) {
		document.getElementById("sl").innerHTML = "12";
		document.getElementById("roll").innerHTML = "56";
		document.getElementById("reg").innerHTML = "FIT WDD 12-13";
		document.getElementById("name").innerHTML = "Md. Uzzal Hosen";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else if (value == 13) {
		document.getElementById("sl").innerHTML = "13";
		document.getElementById("roll").innerHTML = "57";
		document.getElementById("reg").innerHTML = "FIT WDD 12-13";
		document.getElementById("name").innerHTML = "Md Nurzzaman";
		document.getElementById("batch").innerHTML = "13";
		document.getElementById("department").innerHTML = "WDD";
		//alert("Please enter a valid data");
	} else {
		showAlert("Please enter a valid value for desired result");
	}
}
// Custom Alert Box
function showAlert(message) {
    document.getElementById("alertBox").innerHTML = message;
    document.getElementById("alertContainer").style.display = "block";
}

// Close Alert Box
function closeAlert() {
    document.getElementById("alertContainer").style.display = "none";
}