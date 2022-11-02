const returnFirstTwoDrivers = function(names){
    return names.slice(0,2);
};

const returnLastTwoDrivers = function (names){
    return names.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(amount){
    const multiply = function (newAmount = amount){
        return amount * newAmount;
    };
    return multiply;
}

const fareDoubler = function (amount){
        return amount * 2;
    };


const fareTripler = function (amount){
        return amount * 3;
    };

function selectDifferentDrivers(drivers, driverFunctions){
    return driverFunctions(drivers);
}