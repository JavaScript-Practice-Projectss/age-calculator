const form = document.querySelector('form');
const year = document.querySelector('#year');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const yearBox = document.querySelector('.current_year');
            const dayBox = document.querySelector('.current_days');
            const monthBox = document.querySelector('.current_months');
    
    const currentDate = new Date();
    function validate(){
       const input = document.querySelectorAll('input');
       let validator = true;
       input.forEach((i)=>{
           const parent = i.parentElement;
           if(!i.value || isNaN(i.value)){
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'This field is required';
            validator= false
            
           }else if(year.value>currentDate.getFullYear()){
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'Please enter a valid year';
            validator= false
            
           }
           else if(month.value>12){
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'Please enter a valid month';
            validator= false
            
           }
           else if(day.value>31){
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = 'Please enter a valid Date';
            validator= false
            
           }
           else{
            i.style.borderColor = 'black';
            parent.querySelector('small').innerText = '';
            validator= true
           }
          
    
       })
       return validator
   }
    function handleSubmit(e){
        e.preventDefault();
        const birthYear = parseInt(year.value, 10);
    const birthMonth = parseInt(month.value, 10);
    const birthDay = parseInt(day.value, 10);
        if(validate()){
            const yearAge = currentDate.getFullYear() - birthYear;

            const currentMonth = currentDate.getMonth() + 1;
            const birthMonthAdjusted = birthMonth > currentMonth ? birthMonth - 1 : birthMonth;
        
            const monthAge = currentMonth - birthMonthAdjusted;
        
            const currentDay = currentDate.getDate();
            const birthDayAdjusted = birthDay > currentDay ? birthDay - 1 : birthDay;
        
            const daysOld = currentDay - birthDayAdjusted;
        
            
        
            yearBox.innerHTML = yearAge;
            dayBox.innerHTML = Math.abs(daysOld);
            monthBox.innerHTML = Math.abs(monthAge);
        }
    }
    form.addEventListener('submit', handleSubmit)
   
   

