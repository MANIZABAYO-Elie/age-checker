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
    const ageDifference = today.getFullYear() - DateOfBirth.getFullYear()
    if (ageDifference >=18){
        allowedAgeMessage.style.display = "block"
    }else{
        unAllowedAgeMessage.style.display = "block"
    }
    
}

