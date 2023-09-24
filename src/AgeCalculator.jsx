import React, { useState } from 'react'
import "./AgeCal.css";

const AgeCalculator = () => {
    let [birthDate,setBirthDate] = useState("");
    let [age,setAge] = useState(null);

     let CalculateAge = () => {
        //! for dob, month & year
        let myBirthDate = new Date(birthDate);
        let dobDate = myBirthDate.getDate();
        let dobMonth = myBirthDate.getMonth();
        let dobYear = myBirthDate.getFullYear()

         //! for current date, month & year
        let today = new Date();
        let currDate = today.getDate();
        let currMonth = today.getMonth();
        let currYear = today.getFullYear();
        
        //* for calculating year difference
        let yearAgeDiff = currYear - dobYear;
   
        //* for calculating month difference
        let monthAgeDiff ;
        if(currMonth >= dobMonth){
            monthAgeDiff = currMonth - dobMonth;
        }else{
            yearAgeDiff -= 1;
            monthAgeDiff = 12 + currMonth - dobMonth;
        }

        //* for calculating days difference
        let dateAgeDiff;
        if(currDate >= dobDate){
            dateAgeDiff = currDate - dobDate;
        }else{
            monthAgeDiff -= 1;
            let daysInMonth;
             let noOfDaysInDob = daysInMonth(dobMonth, dobYear);
             dateAgeDiff = noOfDaysInDob + currDate - dobDate;   
        }

        if(monthAgeDiff < 0){
            monthAgeDiff = 11;
            yearAgeDiff -= 1;
         }
        
         setAge({
            years: yearAgeDiff,
            months: monthAgeDiff,
            days: dateAgeDiff,
         });
     };
     
     //& function for reset the value
     let handleClick = (e) => {
        e.preventDefault();
        setAge("");
        setBirthDate("");
     };
  return (
    <>
    <div className='parent'>
     
        <div className='container'>
       <center><h1>Age Calculator</h1></center>
       <div className="input_box">
        <input type="date" name="date" id="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}
        max="9999-12-31"
        min="0000-01-01"
        /></div>
       
        <div className='button_container'>
            <button type='submit' className='btn1' onClick={CalculateAge}>Calculate Age</button>  

            <button type='reset' className='btn2' onClick={handleClick}>Reset</button> 
        </div>

        {age && (
            <div className="result">
              <center> <p>You are {age.years} <span>years</span>, {age.months} <span>months</span> and <br /> {age.days} <span>days</span> old.</p></center>
               </div>
        )}
         </div>
      </div>
      
    </>
  )
}
export default AgeCalculator