let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    let message = ""
    const para = document.createElement('p')
    output.appendChild(para)
    if (i != 10 && i != 0) {
        para.textContent = i
    } else if (i == 10) {
        para.textContent = "Countdown 10"
    } else if (i == 0) {
        para.textContent = "Blast off!"
    }
}

// SOLUTION
// const output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//   const para = document.createElement('p');
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {
//     para.textContent = 'Blast off!';
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);

//   i--;
// }