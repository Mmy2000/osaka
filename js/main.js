///=<reference types="../@types/jquery" />

let aboutOffset = $('#about').offset().top

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    if (scrollTop > aboutOffset) {
        $('nav').css('backgroundColor','#161028')
    }else{
        $('nav').css('backgroundColor','transparent')
    }
    console.log(aboutOffset);
})
$('nav a').click(function(e){
    let linkHref = $(e.target).attr('href')
    let sectionOffset = $(linkHref).offset().top
    $('body').animate({scrollTop:sectionOffset},500)
})