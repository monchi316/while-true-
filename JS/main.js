'use strict'

const tasks = ['掃除', '買い物', '散歩'];

console.log('========================');
console.log('現在持っているタスク');
console.log('========================');

for (let i = 0; i < tasks.length; i++) {
  console.log(`${i}:${tasks[i]}`);
}

while (true) {


  tasks.push(prompt('タスクを入力して下さい'));

    prompt('「確認,追加,削除,終了」の4つのいずれかを入力して下さい');
    alert('新しいタスクを追加しました');

    console.log('========================');
    console.log('現在持っているタスク');
    console.log('========================');

    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i}:${tasks[i]}`);
    }
}