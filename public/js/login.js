// 给button登录按钮绑定单击事件
// 使用dom操作
  // 验证函数
  phone.onfocus=upwd.onfocus=function(){
    this.className="";
  }
  function vali(reg){
    var span=this.previousElementSibling;
    var bool=reg.test(this.value);
    if(bool==true){
      span.className="vali_success";
      return true;
    }else{
      span.className="vali_fail";
      return false;
    }
  }
  // 失去焦点时验证
  phone.onblur=function(){
    var reg=/^\d{11}$/;
    vali.call(this,reg);
  }
  upwd.onblur=function(){
    var reg=/^\d{6,8}$/
    vali.call(this,reg);
  }
  // 单击按钮，先验证文本框
btn_login.onclick=function(){
  // 
  var bool=vali.call(phone,/^\d{11}$/);
  if(bool==false){
    phone.focus();
  }else{
    var bool=vali.call(upwd,/^\d{6,8}$/);
    if(bool==false){
      upwd.focus();
    }else{
      var xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
          var result=xhr.responseText;
          if(result==1){
            alert("登录成功");
            window.location="../index.html"
          }else{
            alert("登录失败");
          }
        }
      }
      xhr.open("get","user/login/"+phone.value+"&"+upwd.value,true);
      xhr.send();
    }
  }
};
