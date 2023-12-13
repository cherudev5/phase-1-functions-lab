// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const hqBlock = 42;
    return Math.abs(pickUpLocation-hqBlock);

}
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
function distanceTravelledInFeet(startingBlock, endingBlock) {
        const blocksTravelled = Math.abs(startingBlock - endingBlock);
        const feetPerBlock = 264;
        return blocksTravelled * feetPerBlock;
      }

function calculatesFarePrice(startingBlock,endingBlock){
    const distance = distanceTravelledInFeet(startingBlock, endingBlock) ;
    let fare;
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
    return fare;
  }
