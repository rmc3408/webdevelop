
CONST
----

If declares CONST to variable = not change number.
``` const a = 5; ```

But if declare CONST to [array]. The elements assign at beginning won't change. BUT you can Add new value.

``` 
const a = [5];
a.push(6); //Output: a = [5,6]
a = [20];  // error!

```

Same to Objects => You can change value in key name. 
You can NOT change the key name. 

``` 
const MyObj = {'key':"value'};

MyObj = {'otherkey':"value'}; //ERROR
MyObj.key = 'Value2'; // Ok!
```



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
