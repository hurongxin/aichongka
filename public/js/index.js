// 轮播图
var lb = document.getElementById("lunbo");
var num = 1;
// 自动换图
setInterval(function () {
  num++;
  if (num == 4) {
    num = 1;
  }
  lb.src = `images/index/banner${num}.jpg`;
}, 2000)