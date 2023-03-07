# tdd-battleship
a helper repo to learn tdd with jest and javascript by building a battleship game.

## Step 0. Create the project from scratch and install dependencies.
- If you wish to start without this repository itself, create a new directory for the project:
```bash
mkdir battleship-jest
cd battleship-jest
```
- Navigate to the directory in the terminal and run the following command to initialise a repository and create a new package.json file:
```bash
 npm init -y
``` 
- Alternatively, you can clone this repository and continue from Step 1.

## Step 1. Install Jest and create the test files


- Now that we have a repository Install Jest by running 
```bash
npm install --save-dev jest
 ```
- Create a new file `index.js` which will contain the main code for the game
- Create a new file `index.test.js` which will contain the tests for the game
  
## Step 2. Write the first test
- In `index.test.js`, create a new test suite for the Gameboard module by calling `describe` with the string "Gameboard": 
```javascript
describe("Gameboard", () => {
  // test cases go here
});
```
- Nested inside the `Gameboard test suite`, create a new test case by calling test with the string `"Gameboard returns an object"` as follows:
```javascript
describe("Gameboard", () => {
    test("Gameboard returns an object", () => {
        // test case goes here
    });
});
```

- In the `Gameboard returns an object` test case, import the Gameboard module by calling require with the path to the Gameboard.js file. 
```javascript
const Gameboard = require("./index");
```
At this point, our test should look like this:
```javascript
describe("Gameboard", () => {
    test("Gameboard returns an object", () => {
        const Gameboard = require("./index");
        // we will update this part in the next step
    });
});
```
Next we will assert that the result of calling Gameboard() is an object by calling expect with the expression `typeof Gameboard() === "object"`
```javascript
describe("Gameboard", () => {
    test("Gameboard returns an object", () => {
        const Gameboard = require("./index");
        expect(typeof Gameboard() === "object").toBe(true);
    });
});
```

The whole file should look like this:
```javascript
const Gameboard = require("./index");

describe("Gameboard", () => {
    test("Gameboard returns an object", () => {
        expect(typeof Gameboard() === "object").toBe(true);
    });
});
```
<!-- 

notes
Run the first test
In the terminal, run npm test to run the tests
The first test should fail, since we haven't written any code yet
Write the code to pass the first test
In index.js, export a function Gameboard which returns an empty object
Run the tests again
In the terminal, run npm test to run the tests
The first test should pass
Write the second test
In index.test.js, create a new test case in the "Gameboard" suite by calling test with the string "Gameboard has a property 'grid'"
In the test case, import the Gameboard module and assign the result of calling Gameboard() to a variable board
Assert that board has a property grid by calling expect with the expression board.hasOwnProperty("grid")
Run the second test
In the terminal, run npm test to run the tests
The second test should fail, since we haven't added a grid property to the Gameboard object yet -->