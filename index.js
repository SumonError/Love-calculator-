$("#startbtn").click(function(){
    $("#startbtn").remove();

    var yourName= prompt("What's your name?")
    var yourCrush= prompt("What's your Crush name?")
    var randomNumber= Math.floor(Math.random()*100+1);
    
    $(".lovetext").text("Hello " + yourName + ", you and your crush " + yourCrush +("'s love is " +randomNumber + (" % pure")))

     
        if(randomNumber > 80){
            $(".advice").text("You are so lucky.")
        }

         else if(randomNumber > 60){
            $(".advice").text("Your are almost lucky. You are impressive.")
        
        }

       else if(randomNumber > 40){
            $(".advice").text("You need to be more impressive.")
        }
        else{
            $(".advice").text("You may try later after being impressive.")
        }
           
  

   
});