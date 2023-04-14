// Code your solution in this file!

const returnFirstTwoDrivers = function (driverNames){
    const selectedDriver =driverNames.slice(0,2);
    return selectedDriver;
}

const returnLastTwoDrivers = function (driverNames){
    const selectedDriver = driverNames.slice(driverNames.length-2,driverNames.length)
    return selectedDriver;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){                            //work in progress, adjust as more functions are inputed
    return (function fareMultiplier(fare){return fare*multiplier;})
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(allDrivers, driverSelectorFunction){
    return driverSelectorFunction(allDrivers);
}