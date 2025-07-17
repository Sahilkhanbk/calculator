// ----- grab elements -----
const buttons = document.querySelectorAll('button');
const input   = document.querySelector('#inputBox');  // id matches HTML
const clean   = document.querySelector('#clear');     // <-- matches id in HTML
const equal   = document.querySelector('#equal');
// ----- build the expression -----
buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // skip action keys
    if (btn === clean || btn === equal) return;

    // translate pretty symbols for eval()
    let val = btn.innerText;
    if (val === '×') val = '*';
    if (val === '÷') val = '/';

    input.value += val;
  });
});

// ----- clear -----
clean.addEventListener('click', () => {
  input.value = '';
});

// ----- evaluate (=) -----
equal.addEventListener('click', () => {
  try {
    input.value = eval(input.value || '0');
  } catch {
    input.value = 'error';
  }
});
