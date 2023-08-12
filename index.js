// Code your solution here

const findMatching = (listOfDrivers, driver) => listOfDrivers.filter(item => item.toLowerCase() === driver.toLowerCase());

const fuzzyMatch = (listOfDrivers, letters) => listOfDrivers.filter(item => item.startsWith(letters));

const matchName = (listOfDrivers, providedName) => listOfDrivers.filter(driver => driver.name === providedName);