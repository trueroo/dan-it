let start = new Date();

for (let i = 0; i < 10000000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

console.log(`${end - start}`);