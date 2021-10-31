const age = 20;

if (age > 18) {

    console.log("jij bent ouder dan 18 jaar! Kom binnen!");

} else if (age == 18) {

    console.log("jij bent 18 jaar, kom maar binnen");

} else if (age < 18) {

    console.log("jij bent jonger dan 18 jaar, je mag helaas niet naar binnen");

}

const isFemale = false;     //boolean kan alleen true of false als waarde hebben
if (isFemale == true) {
    console.log("zij is een vrouw");
}
else {                      //je kunt hier enkel "else" gebruiken omdat er maar 2 waarden mogelijk zijn
    console.log("zij is geen vrouw");
}

const driverStatus = 'bob';
if (driverStatus == 'bob') {
    console.log("hij/zij is de bob en mag dus rijden");
}
else {
    console.log("hij/zij is niet de bob en mag dus NIET rijden!");
}

