// 1) for loop, which prints numbers from 1 to 20, but skips 7 and 13
for (let i = 1; i <= 20; i++) {
    if (i === 7 || i === 13) {
        continue;
    }
    console.log(i);
}

// 2) for loop, which goes through numbers from 1 to 30, skips all odd numbers, 
// and stops the loop when a number is divisible by 8
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) { // Skip odd numbers
        continue;
    }
    if (i % 8 === 0) { // Stop loop when number is divisible by 8
        break;
    }
    console.log(i);
}

// 3) for loop, which goes through numbers from 1 to 30, skipping numbers divisible by 5
for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) { // Skip numbers divisible by 5
        continue;
    }
    console.log(i);
}