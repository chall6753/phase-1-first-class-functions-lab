// Code your solution in this file!
const drivers = function([]){
    
}

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length -2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
            return function(fare){
               return fare * multiplier
        }   
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, fn){
    return fn(drivers)

}