export {createHome}

const content = document.querySelector("#content");

const openingHours = document.createElement("div");
openingHours.id = "openingHours";
openingHours.textContent = "Openingstijden";

let openingsHoursData = [
    {day: "Maandag", hours: "16:00-21:00"},
    {day: "Dinsdag", hours: "16:00-21:00"},
    {day: "Woensdag", hours: "12:00-21:00"},
    {day: "Donderdag", hours: "12:00-21:00"},
    {day: "Vrijdag", hours: "12:00-21:00"},
    {day: "Zaterdag", hours: "12:00-21:00"},
    {day: "Zondag", hours: "16:00-21:00"},
] 

function createTable(tableData, tableDoc) {
    for (let day of tableData) {
        let row = tableDoc.insertRow(-1);
        let dayCell = row.insertCell(0);
        let timeCell = row.insertCell(1);
        dayCell.innerHTML = day.day;
        timeCell.innerHTML = day.hours;
    }
}

const table = document.createElement("table");
createTable(openingsHoursData,table);

const location = document.createElement("div");
location.textContent = "Locatie: ";

const phoneNumber = document.createElement("div");
phoneNumber.textContent = "Telefoonnummer: ";

openingHours.appendChild(table);

function createHome() {
    content.append(openingHours, location, phoneNumber);
}

