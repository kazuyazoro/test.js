const question = 'ONEPICIEキャラクター、剣士キャラはこの中で誰？';
const answers = ['ルフィ','マルコ','サンジ','ゾロ'];
const correct = 'ゾロ';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent =question;

const $button = document.getElementsByTagName('button');



$button[0].textContent =answers[0];
$button[1].textContent =answers[1];
$button[2].textContent =answers[2];
$button[3].textContent =answers[3];

let buttonIndex = 0;
let Length = $button.Length;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

//ボタンを押したらクリック　
$button[0].addEventListener('click',() => {
if(correct === $button[0].textContent ){
  window.alert('正解！');

} else{
  window.alert('不正解！');
}
});
$button[1].addEventListener('click',() => {
  if(correct === $button[1].textContent ){
    window.alert('正解！');
  
  } else{
    window.alert('不正解！');
  }
  });
  $button[2].addEventListener('click',() => {
    if(correct === $button[2].textContent ){
      window.alert('正解！');
    
    } else{
      window.alert('不正解！');
    }
    });
    $button[3].addEventListener('click',() => {
      if(correct === $button[3].textContent ){
        window.alert('正解！');
      
      } else{
        window.alert('不正解！');
      }
      });