export {};

let name = 'TypeScript'

// javascript での記述
let isFinished = true;
console.log({isFinished});

// typescript での記述
let isFinish: boolean = true;
// isFinish = 1;
console.log({isFinish});
// 型注釈。ブーリアン型で定義していることを示している