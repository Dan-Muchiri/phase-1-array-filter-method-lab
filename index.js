// Code your solution here
function findMatching(arr, driver){
    const dr = driver.toUpperCase();
    const driverName = arr.filter(element => element.toUpperCase() === dr)
    return (driverName);
}

function fuzzyMatch(arr, letters){
    const driverName = arr.filter(element => element.startsWith(letters));
    return (driverName);
}

function matchName(arr, driver){
    const driverName = arr.filter(element => element.name === driver) 
    return (driverName);
}