var testtext = 0;
window.addEventListener("deviceorientation", handleOrientation, true);
window.addEventListener('devicemotion', deviceMotionHandler);
function handleOrientation(event) {
   
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    if(beta > 0 &&beta<1){
    Score.setText(testtext+=1);
    xpos.setText(beta);
   
    }

  }
function deviceMotionHandler(event){
  var acceleration = event.acceleration.y;
  accel.setText(acceleration);
}
var gamePlayState = new Phaser.Class({
    // Define scene
    Extends: Phaser.Scene,
    initialize:
    function GamePlay(){
        Phaser.Scene.call(this, {key: 'GamePlay'});
    },
  
    preload: function() {
        // Preload images for this state
      
    },

    create: function() {
        // Create objects
        var textbox = document.getElementById('textbox');
        textbox.innerHTML="TESST";
        console.log("GamePlay");
   
        //if score
        Score = this.add.text(
            32,
            24,
            '0'
          );
            //onclick
            Score.setInteractive();

            Score.on('pointerup', () => {       Score.setText(testtext+=1); });
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
    },

    update: function() {
        // Update objects & variables
        
    }
});

// Add scene to list of scenes
myGame.scenes.push(gamePlayState);