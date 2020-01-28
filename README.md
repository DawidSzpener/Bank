# BANK


## Testing framework


##### How to run jasmine tests

* Go to bank/jasmine directory
* Open SpecRunner.html file in your browser


##### How to install and run coverage tools

* Run npm install
* Type `npm test` in command line (That should start a `http://localhost:9878` server) 
* The coverage should be displayed in command line
* To run ESlint tests use `npx eslint ./jasmine/src/file_name.js`



## OO design and aproach


  I realized that 3 classes would be enough for all the specifications for this project,
  but the "Validation" class could come useful later on if I want to expand on this project and add
  backend to it (E.g. database with users) and "Today" class makes code more readable.


#### 5 "classes" 

* Account - uses transaction and balance class to manage account operations 


* Transaction - manipulates balance by deposit and withraw


* Balance - stores the balance


* Today - gets todays date


* Validation - checks if transaction is valid (E.g. if you have enough balance to withdraw)