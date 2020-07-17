$(document).ready(function(){
  

    $('#tab .tab_btns>li').on('click', function(e){
        e.preventDefault();

        let i = $(this).index();

        $('#tab .tab_btns>li>a').removeClass('on');
        $('#tab .tab_btns>li').eq(i).children('a').addClass('on')

        $('#tab .wrap>div').hide().removeClass('on');
        $('#tab .wrap>div').eq(i).show();

        setTimeout(function(){
            $('#tab .wrap>div').eq(i).addClass('on');
        }, 100);

    });

});