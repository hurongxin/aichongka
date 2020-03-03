var b1=false,b2=false,b3=false;
  function blur_phone(){
    if(!phone.value){
      msg_phone.innerHTML="手机号不能为空";
    }else if(phone.value.length==11){
      msg_phone.innerHTML="√";
      b1=true;
    }else{
      msg_phone.innerHTML="手机号格式错误";
      b1=false;
    }
  }
  function focus_upwd(){
    msg_upwd.innerHTML="包含数字、字母、下划线的6-18位";
  }
  function blur_upwd(){
    if(!upwd.value){
        msg_upwd.innerHTML="密码不能为空";
    }else if(upwd.value.length>=6&&upwd.value.length<=18){
        msg_upwd.innerHTML="√";
        b2=true;
    }else{
        msg_upwd.innerHTML="×";
        b2=false;
    }
  }
  function focus_epwd(){
      msg_epwd.innerHTML="确认密码";
  }
  function blur_epwd(){
    if(upwd.value===epwd.value){
      msg_epwd.innerHTML="√";
      b3=true;
    }else{
      msg_epwd.innerHTML="×";
      b3=false;
    }
  }
  function reg(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4 && xhr.status==200){
        var result=xhr.responseText;
        if(b1&b2&b3){
          if(result==1){
            alert("注册成功");
          }else{
            alert("注册失败");
          }
        }else{
          msg_epwd.innerHTML="密码不匹配";
        }
      }
    }
    xhr.open("post","user/reg/",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var formdata=`phone=${phone.value}&upwd=${upwd.value}`;
    xhr.send(formdata);
  }
    /*//验证码
    var show_num = [];
    draw(show_num);
    window.onload=function(){
        createCode();
    }
    function dj(){
        draw(show_num);   
    }
    function blur_code(){
    var val=document.getElementById("code").value;  
    var num = show_num.join("");
    if(val==''){
        msg_code.innerHTML='请输入验证码！';
    }else if(val == num){
        msg_code.innerHTML='提交成功！';
        document.getElementById(".input-val").val('');
        draw(show_num);
    }else{
        msg_code.innerHTML='验证码错误！';
        document.getElementById("code").value='';
        draw(show_num);
    }
  }
    function draw(show_num) {
        var canvas_width=document.getElementById('canvas').clientWidth;
        var canvas_height=document.getElementById('canvas').clientHeight;
        var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度
			
        for (var i = 0; i <= 3; i++) {
            var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
            var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
            var txt = aCode[j];//得到随机的一个内容
            show_num[i] = txt;
            var x = 10 + i * 20;//文字在canvas上的x坐标
            var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
            context.font = "bold 23px 微软雅黑";

            context.translate(x, y);
            context.rotate(deg);

            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
        }
        for (var i = 0; i <= 5; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 30; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
    }
    function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }*/