$(document).ready(function(){

    $('button').click(function(){
        var buttonId = this.id; 
        var elems = $('.text-description');
        //hide element unless the class matches the id of the button clicked
        elems.each(function(){
            if($(this).hasClass(buttonId)){
                $(this).slideDown("fast");
            } else {
                $(this).hide();
            }
        });

        var buttons = $('.button');
        buttons.each(function(){
            if(this.id == buttonId){
                $(this).css({"background-color":"rgb(2,173,156)", "color":"whitesmoke"});
            } else {
                $(this).css({"background-color":"whitesmoke", "color":"rgb(2,173,156)"});
            }
        })

    });

});