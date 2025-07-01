// checking age

 

function validateAge(){
    const  inputAge = document.getElementById('date');
    const errorMessage =document.getElementById('h2');
    const allowedAgeMessage = document.getElementById('allowed-age')
    const unAllowedAgeMessage = document.getElementById('un-allowed-age')
    const  ageInput =  document.getElementById('dob').value;
    const DateOfBirth = new Date(ageInput);
    const today = new Date();
    console.log(today.getFullYear())
    console.log(DateOfBirth)
    
    const month = today.getMonth()-DateOfBirth.getMonth()
    let ageDifference = today.getFullYear() - DateOfBirth.getFullYear()
    const date = today.getDate()- DateOfBirth.getDate();
    console.log(date)
    
    if (month<0 && date<0) {
       return ageDifference--
        
    }
    if (ageDifference >=18 ){
        allowedAgeMessage.style.display = "block"
    }else{
        unAllowedAgeMessage.style.display = "block"
    }
    
}

