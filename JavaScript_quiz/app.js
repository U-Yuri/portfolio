const quiz = [
  {
    question: 'CSS の cursor プロパティの値の中で、十字カーソルを表示させるものはどれか。以下より 1 つ選択しなさい。',
    answers: [
      '1.  bitmap',
      '2.  plus',
      '3.  area-selection',
      '4.  crosshair',
    ],
    correct: '4.  crosshair'
  },

  {
    question: '明示的にセクションを発生させる要素を以下より 1 つ選択しなさい。',
    answers: [
      '1.  h1からh6要素',
      '2.  p要素',
      '3.  div 要素',
      '4.  aside 要素',
    ],
    correct: '4.  aside 要素'
  },

  {
    question: 'br 要素の用途として最も適切なものを以下より 1 つ選択しなさい。',
    answers: [
      '1.  改行によって段落をあらわす。',
      '2.  改行によってグループを分離する。',
      '3.  住所を表記する際の改行として使用する。',
      '4.  段落内で余白が必要なときに余白の量に応じて複数個を配置する。',
    ],
    correct: '3.  住所を表記する際の改行として使用する。'
  },
  {
    question: 'チェックボックス( input type="checkbox"要素 )に、次のような HTML コードで項目ラベル( label 要素 )を添えた。このとき、項目ラベルをクリックしても、チェックボックスのオン・オフが切り替えられるようにしたい。その場合にAとBに定めるべき属性として適切な組み合わせを以下より 1 つ選択しなさい。 <input type="checkbox" name="item" A ="item"> <label B ="item">項目ラベル</label>',
    answers: [
      '1.  A:label  B:for',
      '2.  A:id　B:for',
      '3.  A: label　B: to',
      '4.  A: target　B: to',
    ],
    correct: '2.  A:id　B:for'
  },

  {
    question: 'HTML のテキストに打ち消し線(取り消し線)を表示するために、CSS プロパティの text-decoration に与える値として適切なものはどれか。以下より 1 つ選択しなさい。',
    answers: [
      '1. line-through',
      '2. overline',
      '3. override',
      '4. overwrite',
    ],
    correct: '1. line-through'
  },

  {
    question: `次の CSS が適用された p 要素はどのように表示されるか。適切な説明を以下より 1 つ選択しなさい。
    p{background-color: blue; margin: 10px;} p{background-color: yellow;}`,
    answers: [
      '1. 背景は黄色で表示され、上下左右の余白が 10 ピクセルになる。',
      '2. 背景は青色で表示され、上下左右の余白が 10 ピクセルになる。',
      '3. 背景は黄色で表示され、余白は初期値になる。',
      '4. 背景は青色で表示され、上下左右の余白は 0 になる。',
    ],
    correct: '1. 背景は黄色で表示され、上下左右の余白が 10 ピクセルになる。'
  },

  {
    question: 'ウェブページの内容に関する問い合わせ先(連絡先情報)をマークアップする際に使用すべき要素はどれか。最も適切なものを以下より 1 つ選択しなさい。',
    answers: [
      '1. p',
      '2. div',
      '3. footer',
      '4. address',
    ],
    correct: '4. address'
  },

  {
    question: 'HTML と CSS はそれぞれコンピュータ言語のうちのどの言語に該当するか。最も適切な組み合わせを以下より1 つ選択しなさい。',
    answers: [
      '1. HTML:スクリプト言語 CSS:プログラミング言語',
      '2. HTML:マークアップ言語 CSS:スタイルシート言語',
      '3. HTML:プログラミング言語 CSS:プログラミング言語',
      '4. HTML:プログラミング言語 CSS:スタイルシート言語',
    ],
    correct: '2. HTML:マークアップ言語 CSS:スタイルシート言語'
  },

  {
    question: 'ワームの説明として正しいものはどれか。以下より 1 つ選択しなさい。',
    answers: [
      '1. 無害なファイルやプログラムに偽装した上で侵入した後に、悪意のある振る舞いをするマルウェア',
      '2. コンピュータの内部情報を外部に勝手に送信するマルウェア',
      '3. コンピュータのファイルへのアクセスを制限するなどし、身代金を要求するマルウェア',
      '4. 自己増殖機能によって他のシステムに拡散する性質を持ったマルウェア',
    ],
    correct: '4. 自己増殖機能によって他のシステムに拡散する性質を持ったマルウェア'
  },

  {
    question: 'レスポンシブウェブデザインに関する説明として適切なものを、以下より 1 つ選択しなさい。',
    answers: [
      '1. デバイスの環境に応じてレイアウトが自動的に変わるウェブデザイン手法',
      '2. ウェブデザイナーの意図通りにデザインを強制的に合わせる手法',
      '3. ユーザの好みに合わせてデザインが変わるウェブデザイン手法',
      '4. ユーザの TPO に合わせてレイアウトが自動的に変わるウェブデザイン手法',
    ],
    correct: '1. デバイスの環境に応じてレイアウトが自動的に変わるウェブデザイン手法'
  }
];

const quizLength = quiz.length;
let quizIndex = 6;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題、選択肢の定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();
const clickHandler = (e) => {
  console.log(quizIndex);
  console.log(quiz[quizIndex]);
  console.log(quiz[quizIndex].correct);
  if(quiz[quizIndex].correct　=== e.target.textContent){
    window.alert('正解！')
    score++;
  } else {
    window.alert('不正解！')
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数があればこちらを実行
    setupQuiz();
  }else{
    // 問題数がもうなければこちらを実行
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンを押したら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
    });
    handlerIndex++;
}
