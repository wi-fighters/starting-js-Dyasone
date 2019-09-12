function setLocation(city) {
  var country = "France"; 

  function printLocation(city) {       
    console.log("You are in " + city + ", " + country);  
  }

  return printLocation;
}

var currentLocation = setLocation ();   

currentLocation("jooooooooooooo"); 

// function setLocation() {
//   var country = "France";
// ​
//   function printLocation(city) {
//       console.log("You are in " + city + ", " + country);
//   }
// ​
//   return printLocation;
// }
// ​
// var currentLocation = setLocation();
// ​
// currentLocation("Paris");