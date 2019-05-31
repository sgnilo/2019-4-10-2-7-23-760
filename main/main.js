module.exports = function main(inputs) {
    // write your code here...
    let waitPrice=0.25*inputs.parkTime
    let instancePrice=0
    if(inputs.distance<=2){
    	instancePrice=6
    }
    else if(inputs.distance>2&&inputs.distance<=8){
    	instancePrice=6+(inputs.distance-2)*0.8
    }
    else{
    	instancePrice=6+6*0.8+(inputs.distance-8)*(0.8+0.8*0.5)
    }
    return Math.round(waitPrice+instancePrice);
};
