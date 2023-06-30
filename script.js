const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const form = document.getElementById('form');

const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById('year-label');

const validDay = "Must be a valid day";
const validMonth = "Must be a valid month";
const validYear = "Must be in the past";
const validDate = "Must be a valid date"
const empty = "This field is required";

const days = document.getElementById('days');
const months = document.getElementById('months');
const years = document.getElementById('years');

const inputFields = [day, month, year];
let errorElements;
var emptyfields;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit()
});

const handleSubmit = () => {
    emptyfields = [];

    // remove any existing errors, then check for empty inputs
    inputFields.forEach(field => {
        if (field.value == "") {
            field.parentElement.firstElementChild.classList.add('error-label');
            field.parentElement.lastElementChild.innerHTML = empty;
            field.parentElement.lastElementChild.classList.add('visible');
            field.classList.add('error-input');
            emptyfields.push(field)
        } else {
            field.parentElement.firstElementChild.classList.remove('error-label');
            field.parentElement.lastElementChild.classList.remove('visible');
            field.classList.remove('error-input');
        }
    })


    if (emptyfields.length == 0) {
        // validate fields
        var date = `${year.value}-${month.value}-${day.value}`;
        const dayjsDate = dayjs(date);
        const now = dayjs();

        if (dayjsDate > now) {
            // display year error
            year.parentElement.lastElementChild.innerHTML = validYear;
            year.parentElement.lastElementChild.classList.add('visible');
            return;
        } else {
           if (dayjsDate.isValid() && month.value < 13 && day.value < 32) {
            // calculate age
            const age = calculateAge(dayjsDate);

            // set values on page
            years.innerHTML = age.years;
            months.innerHTML = age.months;
            days.innerHTML = Math.floor(age.days);
           } else {
            day.parentElement.lastElementChild.innerHTML = validDate;
            day.parentElement.lastElementChild.classList.add('visible');
           }
        }
    }

    function calculateAge(birthDate) {
        const currentDate = new Date();
        const birthDay = new Date(birthDate);
        
        // Calculate the difference in milliseconds between the current date and the birth date
        const ageInMilliseconds = currentDate - birthDay;
        
        // Convert milliseconds to years, months, and days
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
        const years = Math.floor(ageInMilliseconds / millisecondsPerYear);
        
        const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.4375;
        const months = Math.floor(ageInMilliseconds / millisecondsPerMonth) % 12;
        
        const millisecondsPerDay = 1000 * 60 * 60 * 24;
        const days = Math.floor(ageInMilliseconds / millisecondsPerDay) % 30.4375;
        
        return { years, months, days };
    }
}