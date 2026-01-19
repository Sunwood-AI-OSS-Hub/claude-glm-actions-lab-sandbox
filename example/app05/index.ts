/**
 * app05 - データ構造とアルゴリズムのサンプル
 * 実行方法: npx tsx index.ts
 */

import { User, createUser, filterAdults, sortByAge, groupByRole } from './models';

// サンプルユーザーデータを作成
const users: User[] = [
  createUser('Alice', 25, 'developer'),
  createUser('Bob', 17, 'designer'),
  createUser('Charlie', 35, 'manager'),
  createUser('Diana', 28, 'developer'),
  createUser('Eve', 16, 'intern'),
];

console.log('=== 全ユーザー ===');
users.forEach(user => console.log(`- ${user.name} (${user.age}歳): ${user.role}`));

console.log('\n=== 成年ユーザーのみ ===');
const adults = filterAdults(users);
adults.forEach(user => console.log(`- ${user.name} (${user.age}歳): ${user.role}`));

console.log('\n=== 年齢順にソート ===');
const sorted = sortByAge(users);
sorted.forEach(user => console.log(`- ${user.name} (${user.age}歳): ${user.role}`));

console.log('\n=== 役割でグループ化 ===');
const grouped = groupByRole(users);
Object.entries(grouped).forEach(([role, members]) => {
  console.log(`${role}: ${members.map(u => u.name).join(', ')}`);
});
