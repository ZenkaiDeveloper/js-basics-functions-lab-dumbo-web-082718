function distanceFromHqInBlocks(block){
  return Math.abs(42-block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264; 
}

function distanceTraveledInFeet(block1,block2){
  const blockDistance = Math.abs(block2-block1);
  return blockDistance*264;
}