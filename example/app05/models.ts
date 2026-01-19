/**
 * データモデルとユーティリティ関数
 */

export interface User {
  name: string;
  age: number;
  role: string;
}

/**
 * 新しいユーザーを作成する
 */
export function createUser(name: string, age: number, role: string): User {
  return { name, age, role };
}

/**
 * 成年（18歳以上）のユーザーをフィルタリングする
 */
export function filterAdults(users: User[]): User[] {
  return users.filter(user => user.age >= 18);
}

/**
 * 年齢の昇順でソートする
 */
export function sortByAge(users: User[]): User[] {
  return [...users].sort((a, b) => a.age - b.age);
}

/**
 * 役割ごとにグループ化する
 */
export function groupByRole(users: User[]): Record<string, User[]> {
  return users.reduce((acc, user) => {
    if (!acc[user.role]) {
      acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
  }, {} as Record<string, User[]>);
}
