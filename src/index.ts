// おみくじの結果タイプ
type OmikujiResult = '大吉' | '中吉' | '小吉' | '凶' | '大凶';

// おみくじの結果配列
const omikujiResults: OmikujiResult[] = ['大吉', '中吉', '小吉', '凶', '大凶'];

/**
* ランダムにおみくじを引く関数
* @returns OmikujiResult おみくじの結果
*/
function drawOmikuji(): OmikujiResult {
  const randomIndex = Math.floor(Math.random() * omikujiResults.length);
  return omikujiResults[randomIndex];
}

// メイン処理
const result = drawOmikuji();
console.log(`🔮 おみくじ結果: ${result}！`);
