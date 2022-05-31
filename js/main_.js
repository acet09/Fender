$(document).ready(function(){

        
    // 햄버거 메뉴 제이쿼리 (보류)
    // var sw=0;
    // $('#nav-icon4').click(function(){
        
    //     $('.gnb nav > ul > li > .sub').hide();
    //     if(sw==0){
    //         sw=1;
    //         $(this).addClass('open');
    //         $('.gnb').animate({
    //             right:0
    //         });
    //     }else{
    //         sw=0;
    //         $(this).removeClass('open');
    //         $('.gnb').animate({
    //             right:'-100%'
    //         });
    //     }  
    // });   

    // 사이드 메뉴 제이쿼리
    // $('header .menu .menu_btn2 a').click(function(){
    //     $('.gnb').animate({
    //         right:0
    //     })
    // });
    // $('header .gnb .close a').click(function(){
    //     $('.gnb').animate({
    //         right:'-100%'
    //     })
    // });

    // full page 팝업 활성화시 스크롤 비활성화
    // GNB 메뉴 활성 / 비활성 버튼 애니메이션
    $('header .menu .menu_btn2 a').click(function(){        
        $('.gnb').animate({
            right:0
        })
        // $('body').addClass('fixed');
        $('body').on('scroll touchmove mousewheel', function(event) {
        //e.preventDefault는 고유 동작을 중단시키고, 
        //e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단시킨다.
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
        });        
        $('header .gnb .close a').click(function(){
            $('.gnb').animate({
                right:'-100%'
            });
            $('.gnb nav > ul > li > a').removeClass('active');
            $('.gnb nav .sub').hide();
        // $('body').removeClass('fixed');
        $('body').off('scroll touchmove mousewheel');
        });

    
    //사이드메뉴1 아코디언(li에 높이값 주면 안밀림)
    $('.gnb nav > ul > li > .sub').hide();
    $('.gnb nav > ul > li > a').click(function(){
        if($(this).attr('class') != 'active'){
            $('.gnb nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('.gnb nav .sub').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });

    //사이드 메뉴2 아코디언(li에 높이값 주면 안밀림)
    // $('.gnb nav > ul > li > .sub').hide();
    // $('.gnb nav > ul > li').click(function(){
    //     if ($(this).hasClass('active')) {
    //         $(this).find('.sub').stop().slideUp();
    //         $(this).removeClass('active');
    //     }
    //     else {
    //         $('.gnb nav > ul > li > .sub').stop().slideUp();
    //         $(this).find('.sub').stop().slideDown();
    //         $('.gnb nav > ul > li').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });

    // 숫자 애니메이션1
    function addNum(){
        // prop() : 객체에 속성을 추가하거나, 객체의 속성을 알아내는 메서드, 0:초기값
        // each() : 객체 개수만큼 반복
        $('.addNumber span').each(function(){
            $(this).prop('Counter',0).animate({
            //Counter속성을 객체에 추가함. 초기값은 0, 최종값은 19246 
            Counter:1946
        }, {
            duration:1000,
            step:function(now){
                //Math.ceil : 실수 -> 정수 변환
                var num=numberfn(Math.ceil(now));
                $(this).text(num);
            }
        });
    });
    }
    // numverfn 함수 선언
    function numberfn(x) {
        // toString() : 전달받은 x값 문자로 변환
        // replace() : 문자열로 바꿔주는 메서드(치환)
        // 정규표현식 참고사이트(https://hamait.tistory.com/342)        
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // 숫자 애니메이션2
    function addNum2(){
        $('.addNumber2 span').each(function(){
            $(this).prop('Counter',0).animate({
            Counter:1959
        }, {
            duration:1000,
            step:function(now){
                var num2=number2fn(Math.ceil(now));
                $(this).text(num2);
            }
        });
    });
    }
    function number2fn(x) {     
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 기타 애니메이션
    // 해당 페이지 도착
    function guitar(){
        $('section.s4 .top_menu .img').animate({
            right:'12%',
            opacity:1,        
        },700);
        $('section.s4 .bottom_menu .img').animate({
            right:'24%',
            opacity:1,
        },800);
    }
    //  다른 페이지로 이동
    function guiter_not(){
        $('section.s4 .top_menu .img').animate({
            right:'-50%',
            opacity:0,        
        },100);
        $('section.s4 .bottom_menu .img').animate({
            right:'80%',
            opacity:0,
        },100);
    }
    

    // swiper slide
    var swiper = new Swiper(".mySwiper", {        
        pagination: {
        el: ".swiper-pagination",
        clickable:true, 
        // dynamicBullets: true
        }
    });

    // fullpage
    $('#fullpage').fullpage({
		//options here
        // navigator: true,
        // navigatorPosition: 'right',
		autoScrolling:true,
		scrollHorizontally: true,
        keyboardScrolling:false,      
                
        afterLoad:function(anchorLink ,index){
            if(index==2){
                addNum();
            } 
            if(index==3){
                addNum2();
            }
            if(index==4){
                guitar();
            }else{
                guiter_not();
            }
            // 선생님 예제
            // if(index==4){
            //     $(.ani).addClass('avtive');
            // }else{
            //     $(.ani).removeClass('avtive');
            // }

        }

	});   
    

    // var win_width=$(window).width();
    // var map_scroll=$
    // if(win_width>=480){
    // };  
    
});//END