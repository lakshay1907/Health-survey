class Form{
    constructor(){

    }
    display(){
        
        var title = createElement("h1");
        title.html("Health Survey");
    title.position(510,0);
    var greeting = createElement("h3");
  
    var input= createInput("");
   input.position(550,640);
   var button= createButton("Vote");
   button.position(700,640);
   button.mousePressed(function(){
       input.hide();
       button.hide();
       var mail = input.value();
       playerCount = playerCount+1;
       player.update(mail);
       player.updateCount(playerCount);
       greeting.html(" Thanks "+mail+" for voting ");
       greeting.position(450,640);
   })
    var button1 = createButton("Yes ")
    button1.position(386,136);
    button1.mousePressed(function(){
        button3.hide();
        button2.hide();
       
    })
    var button2 = createButton("Sometimes")
    button2.position(590,136);
    button2.mousePressed(function(){
        button3.hide();
        button1.hide();
       
    })
    var button3 = createButton("No")
    button3.position(806,136);
    button3.mousePressed(function(){
        button2.hide();
        button1.hide();
       
    })
    
    var button5 = createButton("Yes, I take a perfect balanced diet")
    button5.position(386,190);
    button5.mousePressed(function(){
        button6.hide();
        button7.hide();
        button8.hide();
    })
    var button6 = createButton("Yes, but I don't eat green vegetables")
    button6.position(646,190);
    button6.mousePressed(function(){
        button5.hide();
        button7.hide();
        button8.hide();
    })
    var button7 = createButton("Diet comprise of healthy and junk food")
    button7.position(386,220);
    button7.mousePressed(function(){
        button5.hide();
        button6.hide();
        button8.hide();
    })
    var button8 = createButton("No, I don't have a nutritional diet")
    button8.position(656,220);
    button8.mousePressed(function(){
        button5.hide();
        button6.hide();
        button7.hide();
    })
    var button9 = createButton("Yes, I do on a regular basis")
    button9.position(386,270);
    button9.mousePressed(function(){
        button10.hide();
        button11.hide();
        button12.hide();
    })
    var button10 = createButton("No, I don't do due to lack of time ")
    button10.position(576,270);
    button10.mousePressed(function(){
        button9.hide();
        button11.hide();
        button12.hide();
    })
    var button11 = createButton("Most of the time")
    button11.position(386,300);
    button11.mousePressed(function(){
        button9.hide();
        button10.hide();
        button12.hide();
    })
    var button12 = createButton("Sometimes I do but most of the time I neglect it")
    button12.position(575,300);
    button12.mousePressed(function(){
        button9.hide();
        button10.hide();
        button11.hide();
    })
    var button13 = createButton("Perfect")
    button13.position(384,356);
    button13.mousePressed(function(){
        button14.hide();
        button15.hide();
        
    })
    var button14 = createButton("Average")
    button14.position(570,356);
    button14.mousePressed(function(){
        button13.hide();
        button15.hide();
       
    })
    var button15 = createButton("Bad")
    button15.position(775,356);
    button15.mousePressed(function(){
        button13.hide();
        button14.hide();
       
    })
    var button16 = createButton("<8")
    button16.position(384,455);
    button16.mousePressed(function(){
        button17.hide();
        button18.hide();
        button19.hide();
       
    })
    
    var button17 = createButton("5-7")
    button17.position(854,455);
    button17.mousePressed(function(){
        button16.hide();
        button18.hide();
        button19.hide();
      
    })
    var button18 = createButton("3-4")
    button18.position(534,455);
    button18.mousePressed(function(){
        button16.hide();
        button17.hide();
        button19.hide();
      
    })
    var button19 = createButton(">2")
    button19.position(684,455);
    button19.mousePressed(function(){
        button16.hide();
        button17.hide();
        button18.hide();
      
    })
    var button20 = createButton("Yes,it was very useful")
    button20.position(384,510);
    button20.mousePressed(function(){
        button21.hide();
        button22.hide();
       })
       var button21 = createButton("Sometimes")
       button21.position(384,535);
       button21.mousePressed(function(){
           button20.hide();
           button22.hide();
          })
          var button22 = createButton("No, not at all")
          button22.position(384,560);
          button22.mousePressed(function(){
              button20.hide();
              button21.hide();
             })
}


}