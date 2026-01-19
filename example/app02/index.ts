/**
 * メインエントリーポイント
 * 実行方法: npx tsx index.ts
 */

import { add, multiply, greet, greetJa } from './utils';

// サンプル実行
const result1 = add(1, 2);
const result2 = multiply(3, 4);
const message = greet('World');
const messageJa = greetJa('世界');

console.log(`1 + 2 = ${result1}`);
console.log(`3 * 4 = ${result2}`);
console.log(message);
console.log(messageJa);
