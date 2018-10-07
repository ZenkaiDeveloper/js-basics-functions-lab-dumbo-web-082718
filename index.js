function distanceFromHqInBlocks(block){
  return Math.abs(42-block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264; 
}

function distanceTravelledInFeet(block1,block2){
  const blockDistance = Math.abs(block2-block1);
  return blockDistance*264;
}

function calculateFarePrice(start,finish){
  const distance = distanceTravelledInFeet(start, finish);
  let result = "";
  if(distance > 2500){
    result = ""
  }
  
}