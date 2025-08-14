let insurancePlans = [
    {   
        name:"Basic Plan",
        age: "18-23",
        cost:"20$"
    },
    {   
        name:"Advanced Plan",
        age: "24-35",
        cost:"25"
    },
    {   
        name:"Platinum Plan",
        age: "36-50",
        cost:"24$"
    },
    {   
        name:"Golden Plan",
        age: "50-60+",
        cost:"20"
    }
]

/*
If you are able to input the information we are checking
for each of these medical providers in the object array,
as you know which ones you have in mind, please do.
*/




let userName = document.getElementById("firstNameInput")
let userDOB = document.getElementById("dob")
let button = document.querySelector("button");
let userZipCode = document.getElementById("zipcode")
let userPhoneNum = document.getElementById("phone number")
let userInsurStatus = document.getElementById("insurance status")

let form = document.getElementById("formQuestions")
let title = document.getElementById("title")
let providerList = document.getElementById("providerList")





let currentDate = new Date();
let currentYear = currentDate.getFullYear()
console.log(currentYear)
button.onclick = function(event) {
    form.style.display = "none";
    title.style.display = "block";
    providerList.style.display = "flex";

    


    const userYear = parseInt(userDOB.value.split("-")[0])
    console.log(userYear)
    const userAge = currentYear - userYear;
    // console.log(userDOB.value.split("-")[0]) 
    event.preventDefault();
    if (userAge >= 60) {
       console.log(userDOB.value) 
    }
    


    // for(i = 0; i < insurancePlans.length; i++){
    // if(insurancePlans[i].cost < userData.income){
    //   validPlans.push(insurancePlans[i])
    // }
     
}
