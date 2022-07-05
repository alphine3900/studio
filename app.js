
function toggleWhatWedo1(){
        $('.para1').hide();
        if($('.img1').on('click',function(){
            $('.para1').show();
            $('.img1').hide();
        })){}
        if($('.para1').on('click',function(){
            $('.img1').show();
            $('.para1').hide();
        })){}
}
toggleWhatWedo1();

function toggleWhatWedo2(){
    $('.para2').hide();
        if($('.img2').on('click',function(){
            $('.para2').show();
            $('.img2').hide();
        })){}
        if($('.para2').on('click',function(){
            $('.img2').show();
            $('.para2').hide();
        })){}
}
toggleWhatWedo2();

function toggleWhatWedo3(){
    $('.para3').hide();
        if($('.img3').on('click',function(){
            $('.para3').show();
            $('.img3').hide();
        })){}
        if($('.para3').on('click',function(){
            $('.para3').hide();
            $('.img3').show();
        })){}
}
toggleWhatWedo3();

// portfolio hover effects
   $(document).ready(function(){
       $('.image').mouseenter(function(){
           $(this).css("opacity","0.3");
       })
       $('.image').mouseleave(function(){
        $(this).css("opacity","12");
    })
   })

//    contact section
$('#form').submit(function(e){
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    if(name !== '' && email !== ''){
        alert(`${name} we have recieved your message, thank you for reaching out to us.`);
    }else{
        alert('Fill all the required fields');
    }
    $('#form')[0].reset();
})
