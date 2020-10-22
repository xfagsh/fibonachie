const n = 17; 
const fibonacci = [0, 1]; 

for (i = 2; i < n; i ++) {
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci.slice(0,n));


let result = document.createElement('p');
result.innerHTML = `Первые 17 элементов ряда чисел Фибоначчи: ${fibonacci.slice(0,n)} `
document.body.appendChild(result); 
