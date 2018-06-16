window.onresize = function(){
    if(document.documentElement.clientWidth > 730) {
        var b1 = document.getElementById("b1");//блок перед которым ставим
        var b2 = document.getElementById("b2");//блок который передвигаем
        b1.parentNode.insertBefore(b2, b1);
    }
};


























//
// $(document).ready(function(){
//     $('.block__name__info').each(function () {
//         $(this).css('margin-top', $(this).parent('section').innerHeight()/2 - $(this).innerHeight()/2 + 'px');
//     });
//
//     $('.client__img1, .client__img2, .client__img3, .client__img4, .client__img5, .client__img6').each(function () {
// 		$(this).css('background-image', 'url' + "(" + "img/logos/logo"+ $(this).attr('class').slice(-1) + ".png" + ")")
//     });
//
//     setTimeout(animateHeader, 1100);
//
// 	$('.navbar-top').on('click', function () {
// 		/*if($(window).innerWidth() < 769) {*/
// 			if(!$('.nav-line ul').hasClass('active')){
//                 $('.nav-line ul').fadeIn('300');
//                 $('.nav-line ul').addClass('active');
// 			} else {
//                 $('.nav-line ul').fadeOut('300');
//                 $('.nav-line ul').removeClass('active');
// 			}
//
// 		/*}*/
//     });
//
// 	$('.border-info').css('margin-left', ($('.section14').innerWidth() - $('.border-info').innerWidth() - 30) / 2 + 'px');
// });
//
// $(window).scroll(function(){
//     if($(window).innerWidth() > 769) {
//         if (isInView($('.section12 .unit'))) {
//             $('#line5, #line8').animate({
//                 height: "40%"
//             }, 1000, function () {
//
//             });
//
//             $('#line6, #line7').animate({
//                 height: "25%"
//             }, 1000, function () {
//
//             });
//         }
//     }
// });
//
// function isInView(elem){
//     return $(elem).offset().top - $(window).scrollTop() < $(elem).height() ;
// }
//
//
// function animateHeader() {
//     $('#line3').animate({
//         width: "65%"
//     }, 900, function () {
//         $('#line2').animate({
//             height: "25%"
//         }, 700, function () {
//
//         });
//
//         $('#line1').animate({
//             height: "25%"
//         }, 600, function () {
//         });
//     });
//
//     $('#line4').animate({
//         height: "20%"
//     }, 600, function () {
//     });
//
//     $('#line55').animate({
//         width: "65%"
//     }, 600, function () {
//     });
// }
//
//
//
// var ggmap = null;
// var ggmrkr = null;
// var gms_init = function(){
// 	var map_ctr = new google.maps.LatLng(50.43,30.48);
// 	var optz = {
// 		zoom: 12,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		center: map_ctr
// 	};
// 	ggmap = new google.maps.Map(document.getElementById('ggmap'),optz);
// 	ggmap.scrollwheel = true;
// 	ggmap.setOptions({mapTypeControl:true});
// };
// // /m3956: google map
// jQuery(function($){
//     var max_col_height = 0; // максимальная высота, первоначально 0
//     $('.hight_new').each(function(){ // цикл "для каждой из колонок"
//         if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
//             max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
//         }
//     });
//     $('.hight_new').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
// });
// jQuery(function($){
//     var max_col_height = 0; // максимальная высота, первоначально 0
//     $('.hight_new2').each(function(){ // цикл "для каждой из колонок"
//         if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
//             max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
//         }
//     });
//     $('.hight_new2').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
