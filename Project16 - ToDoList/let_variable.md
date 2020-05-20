
LET
----

If declares inside block of function (if-Else/function), ONLY will be execute inside block of syntax. 

```
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```

VAR
----

If declares in a block-scoped (if-Else / function-scoped) variable, change k-scoped of local and global variable. 

```
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2
``
