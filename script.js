const buttons = document.querySelectorAll("button")
const input = document.querySelector("#inputBox")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")
// console.log(equal);


 buttons.forEach(btn => {
   btn.addEventListener("click", () => {
     let val = btn.innerText;
     if (val === '×') val = '*';
     if (val === '÷') val = '/';
     input.value += val;
   });
 });


 clear.addEventListener("click", () => {
    input.value = ""

})

// ------- evaluate (=) -------------
equal.addEventListener('click', () => {
  try {
    input.value = eval(input.value || '0');
  } catch {
    input.value = 'error';
  }
});
