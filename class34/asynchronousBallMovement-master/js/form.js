class Form
{
constructor()
{
     this.input=createInput("name");
     this.button=createButton("Play");
     this.greeting=createElement('h3');
     this.title = createElement('h2')
}
hide()
{
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
}
display(){
    
    this.title.html("CAR RACING GAME")
    this.title.position(450,100)
    this.input.position(450,260)
    this.button.position(450,300);
    
   this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount);
        this.greeting.html("WELCOME  "+player.name)
        this.greeting.position(500,300)
    })
}

}