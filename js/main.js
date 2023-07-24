var elUserForm = document.querySelector(".js-form");
var elUserInput = document.querySelector(".js-input");
var elUserSelect = document.querySelector(".js-select");
var elUserResult = document.querySelector(".js-result");
console.log(elUserForm, elUserInput, elUserResult)
elUserForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var money = elUserInput.value;
    var selectmoney = elUserSelect.value;
    var USDCURRENT = 11569;
    var YEVROCURRENT = 13000;
    var RUBLCURRENT = 128;
    var current;
    if(money>0)
    {
        if (selectmoney === "USD")
    {
        current = money * USDCURRENT;
        elUserResult.textContent = current;
        console.log(elUserResult)
    }
    if (selectmoney === "YEVRO")
    {
        current = money * YEVROCURRENT;
        elUserResult.textContent= current;
        console.log(elUserResult)
    }
    if (selectmoney === "RUBL")
    {
        current = money * RUBLCURRENT;
        elUserResult.textContent = current;
        console.log(elUserResult)
    }
    }
    else{
       elUserInput.addEventListener("invalid" , function(){
        elUserInput.classList("invalid");
       })
    }
}


)