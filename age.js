//variables for datepicker

let datePicker = document.getElementById('datePicker');
let chosenDate = document.getElementById('chosenDate');

//variables for choosing values
let ageYear = document.getElementById('ageYear');
let ageMonth = document.getElementById('ageMonth');
let ageDay = document.getElementById('ageDay');
let ageHour = document.getElementById('ageHour');
let ageMinute = document.getElementById('ageMinute');
let ageSecond = document.getElementById('ageSecond');

datePicker.addEventListener('change', function(){

     let options = {year: "numeric", month:"long", day:"numeric"};
     let selectedDate = new Date(this.value);
     let DOB= selectedDate.toLocaleDateString('en-US',options);

     
     chosenDate.innerHTML= "DOB : " + " " + DOB;

     let seconds_Btw_DOB = Date.parse(DOB);
     let seconds_Btw_now = Date.now();
     let age_In_Seconds = seconds_Btw_now - seconds_Btw_DOB;

    // console.log(age_In_Seconds);
    let seconds = age_In_Seconds;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60 ;
    let day = hour * 24;
    let month = day * 30;
    let year = day * 365;

    //now calculations
    let years  = Math.round(seconds/year);
    let months =  years * 12;
    let days =years * 365;
    let hours = Math.round(seconds/hour);
    let minutes = Math.round(seconds/minute);

    //printing values in boxes
    ageYear.innerHTML=years;
    ageMonth.innerHTML=months;
    ageDay.innerHTML=days;
    ageHour.innerHTML=hours;
    ageMinute.innerHTML=minutes;
    ageSecond.innerHTML=seconds;
    
    document.querySelector('.age-calc').classList.add('expand');
    
})