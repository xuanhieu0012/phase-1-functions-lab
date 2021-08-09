// Code your solution in this file!
function distanceFromHqInBlocks(n){
    const headQuarter = 42;
    if (n > headQuarter){
       let blocksOfDistance = n - headQuarter;
        return blocksOfDistance;
    }
    else if (n < headQuarter){
       let blocksOfDistance = headQuarter - n;
        return blocksOfDistance;
    }

}
function distanceFromHqInFeet(feet){
    const blocksOfDistance = 264;
    return blocksOfDistance * distanceFromHqInBlocks(feet);

}

function distanceTravelledInFeet(d, f){
    let numberOfBlocks;
    const distanceOfBlocks = 264
    if (d > f){
        numberOfBlocks = d - f;
        
    }else if(d < f){
        numberOfBlocks= f - d;
    }
    return (numberOfBlocks * distanceOfBlocks);
}

function calculatesFarePrice(start, destination){
    let calculatesFarePrice;
    let calculatesFeet= distanceTravelledInFeet(start, destination);
   if (calculatesFeet < 400 ){
        return calculatesFarePrice = 0;
   } else if (calculatesFeet > 400 && calculatesFeet < 2000){
       calculatesFarePrice = calculatesFeet - 400;
       return (calculatesFarePrice * 0.02);
   }
   else if (calculatesFeet > 2000 && calculatesFeet < 2499){
       calculatesFarePrice = 25;
       return calculatesFarePrice;
   }
   else if (calculatesFeet > 2500){
       return 'cannot travel that far';
   }

}