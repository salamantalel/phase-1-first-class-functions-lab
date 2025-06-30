// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of selecting driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Fare doubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Function to select different drivers
function selectDifferentDrivers(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
}
