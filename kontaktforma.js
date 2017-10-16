function myFunction()
{	
 var x = document.forms["kontakt"]["lname"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Nije validna email adresa");
        return false;
		}
	var x = document.forms["kontakt"]["fname"].value;
        if (x == "") {
        alert("Morate popuniti ime");
        return false;
    }
	var x = document.forms["kontakt"]["subject"].value;
        if (x == "") {
        alert("Popunite polje posalji");
        return false;
    }
	else{
	alert("Vas poruka je uspesno poslata ")
	}
	
   }
	