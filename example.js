
refreshFigures();

salesFigure = 600;
enrollementsFigure = 900;
growthFigure = 789;
growthFigure = 45.6;

refreshFigures();

// ARRAYS

let exampleArray = [7, 9, 20, "stringexampl"];
console.log("The first item in exampleArray is " + exampleArray[0]);

console.log("The last item in exampleArray is " + exampleArray[3]);
// add new values to list
exampleArray.push(9999);

// [JSON]
// It is similar to list, but values have a "key".

let exampleJson = {
  //  key        value
  //  \/          \/
  "firstName": "John",
  "lastName": "Doe"
};

console.log("The first name of the person is " + exampleJson["firstName"]);
exampleJson["age"] = 20; // add a new value to json

console.log("The age of the person is " + exampleJson["age"]);
