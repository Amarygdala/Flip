var score = 0;
var flipped=false;

var time=-1;
var timedEvent;
var pressed=false;

var gamePlayState = new Phaser.Class({
    // Define scene
    Extends: Phaser.Scene,
    initialize:
    function GamePlay(){
        Phaser.Scene.call(this, {key: 'GamePlay'});
    },
  
    preload: function() {
        // Preload images for this state
        this.load.image('button','assets/images/button.png');
    },

    create: function() {
        // Create objects


function timer(){

  time=10;
  pressed=true;
setInterval(countDown, 1000);
}

function countDown(){
  time-=1;
  console.log(time);
 
}

        this.button = this.add.image(game.config.width / 2, game.config.height / 2, "button");
        this.button.setInteractive().on('pointerup', () => timer());
        
        window.addEventListener("deviceorientation", handleOrientation, true);


        console.log("GamePlay");
   
        //if score
        Score = this.add.text(
            32,
            24,
            '0'
          );
        xpos =  this.add.text(
            32,
            55,
            '0'
          );

        accel =  this.add.text(
            32,
            77,
            '0'
          );
          function handleOrientation(event) {
   
            var beta     = Math.abs(event.beta);
            var gamma    = Math.abs(event.gamma);
            if(time>0){
              
            if((beta > 0&&beta<10)&&!flipped&&(gamma<20)){
            Score.setText(score+=1);
            
            flipped=true;
            }
            else if(flipped&&(beta>170&&beta<180)&&(gamma<20)){
              flipped=false;
            }
            xpos.setText(beta);
            accel.setText(gamma);
            
          }
        }
          
    },

    update: function() {
        // Update objects & variables
        if(pressed){
          this.button.visible = false
        }
    }
});

// Add scene to list of scenes
myGame.scenes.push(gamePlayState);