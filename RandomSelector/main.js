$(document).ready(function() {
    $("#123").click(function()
    {
        var numbers_of_li = $("#choice li").length;
        var random_list_number = Math.floor(Math.random()*numbers_of_li);
        var image = ["curry.jpg","james.png", "kobe.jpg", "kd.jpeg", "ki.jpg"];
        $("#place_image").attr("src", image[random_list_number]);
        $("#place_image").width(700);
        $("#place_image").height(500);
        
        
        $("#234").text($("#choice li").eq(random_list_number).text());
    });
});