
$(document).ready(function(){
    $(".header").click(function(){
        $(".body").slideUp();
        $(this).next(".body").slideDown();
    });
});