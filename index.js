// Case-insensitive matching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Matches names that start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Matches objects where the name property matches the given string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  