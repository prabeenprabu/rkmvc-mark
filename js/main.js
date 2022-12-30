const link = "https://rkmvc.ac.in/marksheet/ug/marksheet_ug.php?reg_num=";

//button function
let alertString = document.getElementById("alertString");
document.getElementById("submit").addEventListener("click", () => {
    if (document.getElementById("regno").value.trim() == "") {
        alertString.innerText = "Enter Register Number!";
        alertString.classList.add("alertShow");
    } else {
        alertString.classList.remove("alertShow");
        let regexReg = /^[0-9]{13}$/;
        let regno = document.getElementById("regno").value;

        if (regexReg.test(regno)) {
            alertString.classList.remove("alertShow");
            const target = link + regno;
            window.open(target);
        } else {
            alertString.innerText = "Invalid Register Number";
            alertString.classList.add("alertShow");
        }
    }
});
