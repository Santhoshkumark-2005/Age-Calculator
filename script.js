
function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const output = document.getElementById('output');
    
    if (!birthdate) {
        output.textContent = "Please enter a valid birthdate.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();
    
    let ageYears  =  currentDate.getFullYear() - birthDateObj.getFullYear();
    let ageMonths = currentDate.getMonth() -  birthDateObj.getMonth();
    let ageDays  =   currentDate.getDate() -     birthDateObj.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDays += daysInLastMonth;
    }

    const totalMonths = (ageYears * 12) + ageMonths;

    const ageInMilliseconds = currentDate - birthDateObj;
    const secondsPassed = Math.floor(ageInMilliseconds / 1000);
    const minutesPassed = Math.floor(secondsPassed / 60);
    const hoursPassed  =  Math.floor(minutesPassed / 60);
    const daysPassed   =  Math.floor(hoursPassed / 24);

    output.innerHTML = `
        <p>Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.</p>
        <p>Total months passed: ${totalMonths} months.</p>
        <p>Seconds passed: ${secondsPassed} seconds.</p>
        <p>Minutes passed: ${minutesPassed} minutes.</p>
        <p>Hours passed: ${hoursPassed} hours.</p>
        <p>Days passed: ${daysPassed} days.</p>
    `;
}
