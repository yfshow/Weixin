$('.speech-tell').click(function(){
    if ($(this).hasClass('on')) {
        $(this).find('audio')[0].pause();
        $(this).removeClass('on');
    }else{
        if ($(this).hasClass('current')) {
            // $(this).find('audio')[0].src = $(this).find('source')[0].src;
            $(this).find('audio')[0].play();
            $(this).find('audio')[0].onended = function(){
                $(this).parents('.speech-tell').removeClass('on');
            }
            $(this).find('audio')[0].onstalled = function(){
                console.log('不可用');
            }
            $(this).addClass('on');
        }else{
            var allAudio = document.getElementsByTagName('audio');
            for (var i = 0; i < allAudio.length; i++) {
                allAudio[i].pause();
                allAudio[i].currentTime = 0.0;
            };
            $('.speech-tell').removeClass('on');
            $('.speech-tell').removeClass('current');

            $(this).find('audio')[0].play();
            $(this).find('audio')[0].onended = function(){
                $(this).parents('.speech-tell').removeClass('on');
            }
            $(this).addClass('on');
            $(this).addClass('current');
        }
        
    }
});
var ios;
var u = navigator.userAgent;
var ua = u.toLowerCase();
//判断是否是安卓设备
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
//判断是否是移动设备
var isApp = !!u.match(/AppleWebKit.*Mobile.*/);
var isWeiXin = ua.match(/MicroMessenger/i) == "micromessenger";


$('.speech-tell-2').click(function () {
        if ($(this).hasClass('on')) {
            $(this).find('audio')[0].pause();
            $(this).removeClass('on');
        } else {
            if ($(this).hasClass('current')) {
                $(this).addClass('on');
                // $(this).find('audio')[0].src = $(this).find('source')[0].src;
                $(this).find('audio')[0].play();
                if (isAndroid) {
                   setTimeout(function(){
                        $(this).parents('.speech-tell-2').removeClass('on');
                        $(this).parents('.speech-tell-2').removeClass('current');
                    },1000); 
               }
                $(this).find('audio')[0].onended = function () {
                    $(this).parents('.speech-tell-2').removeClass('on');
                    $(this).parents('.speech-tell-2').removeClass('current');
                }
            } else {
                var curr = $(".on").find('audio');
                if (curr.length > 0) {
                    curr[0].pause();
                    curr[0].currentTime = 0;
                }
                var curr1 = $(".current").find('audio');
                if (curr1.length > 0) {
                    curr1[0].pause();
                    curr1[0].currentTime = 0;
                }
                $('.speech-tell-2').removeClass('on');
                $('.speech-tell-2').removeClass('current');

                $(this).addClass('on');
                $(this).addClass('current');
                // $(this).find('audio')[0].src = $(this).find('source')[0].src;
                $(this).find('audio')[0].play();
                $(this).find('audio')[0].onended = function () {
                    $(this).parents('.speech-tell-2').removeClass('on');
                    $(this).parents('.speech-tell-2').removeClass('current');
                }
            }

        }
    });