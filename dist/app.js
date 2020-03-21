"use strict";
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('Btn clicked!');
});
let anyFlag;
const globalVar = 'Message';
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo('I am log string');
function multiply(a, b) {
    if (a && b) {
        return a * b;
    }
}
