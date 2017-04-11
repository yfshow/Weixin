if ($(window).width() < 350) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/32+'px'; 
}else if ($(window).width() > 500) {
    document.documentElement.style.fontSize=document.documentElement.clientWidth/75+'px';
}else{
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px'; 
};
document.body.addEventListener('touchstart', function () {});  //开启ios伪类
//获取短信验证码
function valCode(){
    var time = 60;
    $('#valCode').html('60s');
    var timer = setInterval(function(){
        time--;
        $('#valCode').html(time+'s');
        if (time == 0) {
            $('#valCode').html('重新获取验证码');
            clearInterval(timer);
            $('#valCode').removeClass('on');
            $('#valCode').attr('onclick',"valCode()");

        };
    },1000);
    $('#valCode').addClass('on');
    $('#valCode').attr('onclick',"");
}
