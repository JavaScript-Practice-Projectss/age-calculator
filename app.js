const form = document.querySelector('form');
const year = document.querySelector('#year');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const input = document.querySelectorAll('.input-container p')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const birthYear = parseInt(year.value, 10);
    const birthMonth = parseInt(month.value, 10);
    const birthDay = parseInt(day.value, 10);
    if (isNaN(birthYear) || birthYear==='' || birthYear===0) {
        input[0].style.display = "block";
        year.style.borderColor = 'red';
       
    }
    if (isNaN(birthDay) || birthDay==='' || birthDay===0) {
        input[1].style.display = "block";
        day.style.borderColor = 'red';
       
    }
    if (isNaN(birthMonth) || birthMonth==='' || birthMonth===0) {
        input[2].style.display = "block";
        month.style.borderColor = 'red';
     
    }
    const currentDate = new Date();
    const yearAge = currentDate.getFullYear() - birthYear;

    const currentMonth = currentDate.getMonth() + 1;
    const birthMonthAdjusted = birthMonth > currentMonth ? birthMonth - 1 : birthMonth;

    const monthAge = currentMonth - birthMonthAdjusted;

    const currentDay = currentDate.getDate();
    const birthDayAdjusted = birthDay > currentDay ? birthDay - 1 : birthDay;

    const daysOld = currentDay - birthDayAdjusted;

    const yearBox = document.querySelector('.current_year');
    const dayBox = document.querySelector('.current_days');
    const monthBox = document.querySelector('.current_months');

    yearBox.innerHTML = yearAge;
    dayBox.innerHTML = daysOld;
    monthBox.innerHTML = Math.abs(monthAge);
   
}); 
