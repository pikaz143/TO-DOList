//toggling between done and not-done
$("ul").on("click","li",function(){
    $(this).toggleClass("done");
});
//Removing elements
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function()
{
    $("this").remove();
});
event.stopPropagation();
});
//adding new ToDo element
i=0
$("input").keypress(function(){
    if(event.which===13)
    {
        var text=$(this).val();
        $(this).val("");
        $("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'></i></span> "+ text +"</li>");
    }
});


