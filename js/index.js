let btnAdd = document.querySelector('[data-btn]')
let display = document.querySelector('[data-display]')

let array = [3,6,9,12]



btnAdd.addEventListener('click',function(){
sumofnum(array)
})
function sumofnum(arr) {
let sum = 0
let hasNumbers = false;

for(let i = 0;i<arr.length;i++){
if(typeof arr[i] === 'number'){
sum += arr[i]
hasNumbers= true;
}
}

if(hasNumbers){
display.value = `sum of numbers: ${sum}`
} else {
display.value = 'provide only numbers'
}
}