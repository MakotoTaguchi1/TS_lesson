type Result = {
  id: number;
  name: string;
  score: number;
};

const yamada: Result = {
  id: 10,
  name: "山田太郎",
  score: 79,
};
const suzuki: Result = {
  id: 11,
  name: "鈴木次郎",
  score: 55,
};

// Omit型: 既存の型から、指定した一部のプロパティを除いた型を生成
function showResult(result: Omit<Result, "id">): void {
  console.log(`名前: ${result.name}`);
  console.log(`点数: ${result.score}`);
}

showResult(yamada);
showResult(suzuki);
