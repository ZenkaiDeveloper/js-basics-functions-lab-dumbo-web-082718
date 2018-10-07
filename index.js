function distanceFromHqInBlocks(block){
  return Math.abs(42-block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264; 
}