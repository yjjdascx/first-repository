$(document).ready(function(){
    $("#btn-hide").click(function(){
        $("#hide-show").hide();
    });
    $("#btn-show").click(function(){
        $("#hide-show").show();
    });

    $("#btn-fadeOut").click(function(){
        $("#fadeOut-fadeIn").fadeOut();
    });
    $("#btn-fadeIn").click(function(){
        $("#fadeOut-fadeIn").fadeIn();
    });

    $("#btn-slideUp").click(function(){
        $("#slideUp-slideDown").slideUp();
    });
    $("#btn-slideDown").click(function(){
        $("#slideUp-slideDown").slideDown();
    });
})