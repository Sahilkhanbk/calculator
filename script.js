const buttons = document.querySelectorAll("button")
const input = document.querySelector("#inputBox")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")
// console.log(equal);



buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        input.value = input.value + btn.innerText;
    })
})

clear.addEventListener("click", () => {
    input.value = ""

})

equal.addEventListener("click", () => {
    try {

        input.value=eval(input.value || '0');

    }catch(err){
        input.value = "error"
    }
    
})