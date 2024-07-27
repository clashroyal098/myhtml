
$(document).ready(function(){
    $(".item").click(function(){
        $(".item").removeClass("active");
        $(this).addClass("active");
        $(".par").removeClass("active");
        $("#" + $(this).attr("data-tab")).addClass("active")
    });
});