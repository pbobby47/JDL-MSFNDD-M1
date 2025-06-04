// ? Pattern 1:
/*
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 *  *  *  *  *
 */
/*
let n = 5;

let pattern = "";

for (let row = 1; row <= n; row++) {
  //   console.log("row - ", row);

  for (let col = 1; col <= n; col++) {
    // console.log("column is", col);

    pattern += " * ";
  }

  pattern += "\n";
}
console.log(pattern);
*/
/*
let n = 5;

for (let row = 1; row <= n; row++) {
  let line = "";

  for (let col = 1; col <= n; col++) {
    line += " * ";
  }

  console.log(line);
}
*/

// ? Pattern 2:
/*
11111
22222
33333
44444
55555
*/
/*
let n = 5;

let pattern = "";

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    pattern += row;
  }

  pattern += "\n";
}
console.log(pattern);
*/

// ? Pattern 3:
/*
12345
12345
12345
12345
12345
*/
/*
let n = 5;

let pattern = "";

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    pattern += col;
  }

  pattern += "\n";
}

console.log(pattern);
*/

// ? Pattern 4:
/*
 1  0  1  0  1
 1  0  1  0  1
 1  0  1  0  1
 1  0  1  0  1
 1  0  1  0  1
*/
/*
let n = 5;

let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (col % 2 == 0) {
      pattern += " 0 ";
    } else {
      pattern += " 1 ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
*/

// ? Pattern 5:
/*
 1  1  1  1  1
 0  0  0  0  0
 1  1  1  1  1
 0  0  0  0  0
 1  1  1  1  1
*/
/*
let n = 5;

let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row % 2 == 0) {
      pattern += " 0 ";
    } else {
      pattern += " 1 ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
*/

// ? Pattern 6:
/*
 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *
 */
/*
let n = 5;

let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    pattern += " * ";
  }
  pattern += "\n";
}

console.log(pattern);
*/

// ? Pattern 7:
/*
 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 *
 */
/*
let n = 5;

let pattern = "";
for (let row = 5; row >= 1; row--) {
  for (let col = 1; col <= row; col++) {
    pattern += " * ";
  }
  pattern += "\n";
}

console.log(pattern);
*/
/*
let n = 5;

let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row == 1 || col == 1 || row + col <= n + 1) {
      pattern += " * ";
    } else {
      pattern += "   ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
*/

// ? Pattern 8:
/*
let n = 5;

let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    if (row == n || col == n || row + col >= n + 1) {
      pattern += " * ";
    } else {
      pattern += "   ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
*/

// ? Patter 9:

let n = 5;

for (let row = 0; row < n; row++) {
  let line = "";

  for (let col = 0; col < n; col++) {
    if (col < row) {
      line += "   ";
    } else {
      line += " * ";
    }
  }

  console.log(line);
}
