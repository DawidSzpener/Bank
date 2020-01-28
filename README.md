# BANK


## Testing framework

* Run npm install to get all dependencies
* We use jasmin for running our tests and karma with extensions (istanbul, phantomjs) for test coverage and ESlint for linting


##### How to run jasmine tests

* Go to bank/jasmine directory
* Open SpecRunner.html file in your browser


##### How to install and run coverage tools


* To run ESlint tests use `npx eslint ./jasmine/src/file_name.js`
* Type `npm test` in command line (That should start a `http://localhost:9878` server) 
* The coverage should be displayed in command line



## OO design and aproach

  I decided to go with javascript for this project because one of my personal goals is to
  learn it and understand it well enough to use react framework.
  I believe that 3 classes would be enough for all the specifications for this project,
  but "Today" class is there to make code abit more readable.


#### 4 "classes" 

* Account - uses transaction and balance class to manage account operations 


* Transaction - manipulates balance by deposit and withraw


* Balance - stores the balance


* Today - gets todays date



### APP working in console (screenshot)



![alt text](https://github.com/DawidSzpener/Bank/blob/master/sc.png)
