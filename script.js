//ランダムにおみくじ画像のパスを返す処理（Math.floorは小数点切り捨て）
function getRandomImage(){
   const number = Math.floor(Math.random() * 7) ;
   const imagePath = "./images/omikuji_" + number.toString() + ".png";
    return imagePath;
}
//確認よう
console.log(getRandomImage());

//ボタンを押したらスロットが回転する処理
function playOmikuzi(){
   const timer = setInterval(function(){
    document.querySelector("#js-result").setAttribute("src",getRandomImage())
   },100);
   //数秒後にスロットが止まる処理
   setTimeout(function(){
    clearInterval(timer);
   },3000);

}
document.querySelector("#js-button").addEventListener("click", playOmikuzi);

// document.querySelector("#button").addEventListener("click",function(){

// })