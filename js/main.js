var elUserForm = document.querySelector(".js-form");
var elUserInput = document.querySelector(".js-input");
var elUserSelect = document.querySelector(".js-select");
var elUserResult = document.querySelector(".js-result");
console.log(elUserForm, elUserInput, elUserResult)
elUserForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var money = elUserInput.value;
    var selectmoney = elUserSelect.value;
    if (selectmoney=="USD")
        var current = money * 11569;
    elUserResult.textContent = current;
    console.log(elUserResult)
    if (selectmoney=="YEVRO") {
        var current = money * 13000;
        elUserResult.textContent = current;
        console.log(elUserResult)
    }
    if (selectmoney=="RUBL")
     {
        var current = money * 128;
        elUserResult.textContent = current;
        console.log(elUserResult)
    }
}
)