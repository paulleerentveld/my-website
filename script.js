
// Half triangle

/* 
let n = 10;

for(let i = 0; i<n;i++){
	let row = ""
	for(let j = 0; j<i+1; j++){
		row = row + "*"
	}
	console.log(row);
} */



// Pyramid

/* 
let n = 10;

for (let i = 0; i < n; i++) {
    let string = "";
    let k = (n*2)-1;
    for (let j = 0; j <= k ; j++) {
        if (j < n-i) {
            string = string + " ";
        } else if (j > n+i) {
            string = string + " ";
        } else {
            string = string + "*";
        }            
    }
    console.log(string);
} */





function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  //sayHelloTo('Isabel'); // "Hello, Isabel!"
  

/* 
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
    console.log("Greeting:", greeting);
    console.log("firstName:", firstName);
  } */

  //say("good evening","Kimmy");

  function add(x, y) {
      return 10 * (x + y);
  }

  //console.log (add (5,5));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`)
  }
say('Hello','Kimmy')




