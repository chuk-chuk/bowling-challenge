var BowlingGame = function(){
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins){
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function(){
  var result = 0;
  var rollIndex = 0; //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  var game = this;

  for (frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()){
      result += getStrikeScore();
      rollIndex += 1;
    } else if (isSpare()){
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
  return result;

  function isSpare(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
  }

  function isStrike(){
    return game.rolls[rollIndex] == 10;
  }

  function getSpareScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getStrikeScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getNormalScore(){
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }

};
