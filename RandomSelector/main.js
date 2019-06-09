var pictures=[
    "curry.jpg","kobe.jpg","james.png","kd.jpeg","ki.jpg"
]

$(document).ready(function() {
    $("input").click(function()
    {
        //$("H1").text("Hello");
        //$("H1").text($("li:first").text());
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("H1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",pictures[randomChildNumber]);
        
    });
});