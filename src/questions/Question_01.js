import React from 'react'
import ExpectedImg from '../resources/img/Expected_Question_01.png'
//ここに画像（イラスト）インポート指定するよ　画像は「image_illust.png」
import ExpectedImg2 from '../resources/img/image_illust.png'

export default function Question_01() {

  // 定数群
  const message = "";   // こんにちは！
  const date = "";    // 本日の日付 (YYYY/MM/DD)
  const id = ""; // 名前を入力
 //const Ageを追加して年齢を表示させてみましょう
  
 //const locationを追加して現在地を表示させてみましょう
  

 return (
    <div>
      <h1>【問１】復習：React要素の作成JSXで書きますよ！</h1>
      <div className='question-content'>
      {/* ↓↓↓ 描画する内容を書く ↓↓↓ */}
     
      {/* ↑↑↑ 描画する内容を書く ↑↑↑ */}
      </div>
      <h1 className='question-title'>仕上がり見本 (画像)</h1>
      <img src={ExpectedImg} />
    </div>
  );
}

