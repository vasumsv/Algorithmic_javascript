const rows = 5;
const symbol = '*';

// Upper half of the mirror pattern
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += symbol;
    }
    console.log(pattern);
}

// Lower half of the mirror pattern
for (let i = rows - 1; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += symbol;
    }
    console.log(pattern);
}
