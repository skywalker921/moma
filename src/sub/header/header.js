$(document).ready(function(){


    let doneClose = true;

    rwd_subheader();

    $(window).on('resize', rwd_subheader);


    //skip_navi
    $('#skip_navi a').on('focusin', function(){
        $(this).addClass('on');
    })

    $('#skip_navi a').on('focusout', function(){
        $(this).removeClass('on');
    })


    //rwd header
    $('.bars').on('click', function(){
        let isOpen = $('#gnbMo').hasClass('on');

        //
        $(this).toggleClass('on');

        if(isOpen){
            $('#gnbMo').removeClass('on');
        } else {
            $('#gnbMo').addClass('on');
        }
    })

    $('#gnbMo>ul>li>a').on('click', function(){

        //패널 비활성화
        $('#gnbMo>ul>li>a').removeClass('on');
        $('#gnbMo>ul>li>ul').slideUp();

        $(this).addClass('on');
        $(this).next('ul').slideDown();
    });



    function rwd_subheader(){
        let wid = $(window).width();

        if(wid>=1180){
                    
            //header
            $('#sub_header').on('mouseenter', openSub);
            $('#sub_header').on('mouseleave', closeSub);

                    
            //gnb 1depth에 마우스오버시 버튼 활성화 유지
            $('#gnb>li').on('mouseenter', function(){
                $(this).children('a').addClass('on');
            });

            $('#gnb>li').on('mouseleave', function(){
                $(this).children('a').removeClass('on');
            });

            //focus 
            $('#gnb>li>a').on('focusin', function(){
                $('#gnb>li>ul').stop().slideDown();
                $('.bgGnb').stop().slideDown();
            });

            $('#gnb li').last('a').last().on('focusout', function(){
                $('#gnb').find('ul').stop().slideUp();
                $('.bgGnb').stop().slideUp();
            });

            $('#gnbMo').removeClass('on');
        } else {
            $('#sub_header').off('mouseenter');
            $('#sub_header').off('mouseleave');
        }
    }



    function openSub(){
        $('#gnb').find('ul').stop(true, true).slideDown();
        $('.bgGnb').stop(true, true).slideDown();

        if(doneClose){
            doneClose = false;
            $('#gnb>li>ul').stop(true, true).slideDown();
            $('.bgGnb').stop(true, true).slideDown();
        }
    }

    function closeSub(){
        $('#gnb').find('ul').stop().slideUp();
        $('.bgGnb').stop().slideUp();
    }
});