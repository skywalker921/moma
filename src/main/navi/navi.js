$(document).ready(function(){

    let pos1 = $('#visual').offset().top;
    let pos2 = $('#business').offset().top;
    let pos3 = $('#tab').offset().top;
    let pos4 = $('#archive').offset().top;
    let pos5 = $('#more').offset().top;
    let pos6 = $('#news').offset().top;
    let pos7 = $('#service').offset().top;
    let pos8 = $('#notice').offset().top;
    let pos9 = $('#collection').offset().top;

    let base = -300;

    $(window).on('scroll', function(){

        let scroll = $(this).scrollTop();


        // for(i=1 ; i<=8 ; i++){
        //     if(scroll >= pos+$i+base && scroll < pos+($i+1)+base){
        //         $('#navi li a').removeClass('on');
        //         $('#navi li a').eq(i-1).addClass('on');
        //     }
        // }


        // 반복문으로
  
        if(scroll >= pos1+base && scroll < pos2+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(0).addClass('on');
		}
        if(scroll >= pos2+base && scroll < pos3+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(1).addClass('on');
		}
		if(scroll >= pos3+base && scroll < pos4+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(2).addClass('on');
		}
		if(scroll >= pos4+base && scroll < pos5+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(3).addClass('on');
        }
        if(scroll >= pos5+base && scroll < pos6+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(4).addClass('on');
        }
        if(scroll >= pos6+base && scroll < pos7+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(5).addClass('on');
        }
        if(scroll >= pos7+base && scroll < pos8+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(6).addClass('on');
        }
        if(scroll >= pos8+base && scroll < pos9+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(7).addClass('on');
        }
        if(scroll >= pos9+base){
			$('#navi li a').removeClass('on');
			$('#navi li a').eq(8).addClass('on');
		}

        

    })

});