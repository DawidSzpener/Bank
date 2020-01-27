# BANK


## Testing framework


##### How to run jasmine tests

* Go to bank/jasmine directory
* Open SpecRunner.html file in your browser


## OO design and aproach


  I realized that 3 classes would be enough for all the specifications for this project,
  but the validation class could come useful later on if I want to expand on this project and add
  backend to it (E.g. database with users)


#### 4 "classes" 

* Account - uses transaction and balance class to manage account operations 


* Transaction - manipulates balance by deposit and withraw


* Balance - stores the balance


* Validation - checks if transaction is valid (E.g. if you have enough balance to withdraw)

