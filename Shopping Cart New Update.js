// Start from the bottom and work your way up.
var calendar = {
  name: "CALENDAR",
  price: 5.00,
  count: 0
}

var bookbag = {
  name: "BOOKBAG",
  price: 10.00,
  count: 0
}

var textbook = {
  name: "TEXTBOOK",
  price: 20.00,
  count: 0
}
var itemsArray = [calendar, bookbag, textbook];

var exitProgram = function ()
{
 window.stop();
}
/* 15. Checks to see if user wants to go back through shopping cart again.*/
var finalCheck = function ()
{
  var check = prompt("Would you like to input anymore items? If not, we will exit the program. y/n")
  if (check === "y" || check === "Y"){
    decideWhatToAdd();
  }
  else{
    console.log("ending program");
    return -1;
  }
}

/* 14. Checks if the total is greater or less than $100.*/
var totalCheck = function ()
{
  {
  var tax = 0;
  var total = 0;
  var totalPlusTax=0;
  for(var i=0; i<= itemsArray.length -1; i++){
  tax += (parseFloat(itemsArray[i].price) * parseFloat(itemsArray[i].count) * .075);
  }
  for(var i=0; i<= itemsArray.length -1; i++){
  total += (parseFloat(itemsArray[i].price) * parseFloat(itemsArray[i].count));
  }
  totalPlusTax = total + tax;
  }
  if(totalPlusTax < 100){
    alert("Your subtotal is $" + total + "\nYour total with tax is $" + (totalPlusTax.toFixed(2)) + ".\nSince your total is less than $100, cash payment is required.");
  }
  else{
    alert("Your subtotal is $" + total + "\nYour total with tax is $" + (totalPlusTax.toFixed(2)) + ".\nSince your total is greater than $100, a credit card can be set up.");
  }
  finalCheck();
}

/* 13. Makes sure price doesn't get below 0.*/
var checkArray = function ()
{
  if (itemsArray[i].length = 0){
    alert("thing")
  }
  else{
    alert("other thing")
  }
}

/* 12. This handles the user's response to removing MORE items.*/
var removeMoreItems = function ()
{
  var temp = true;
   var askToRemove = prompt("Would you like to remove an item from your cart? y/n");
   if (askToRemove === "y" || askToRemove === "Y")
  {
    removeFromCart(temp);
  }
  else if (askToRemove === "n" || askToRemove === "N")
  {
    alert("Alright. We won't remove anymore items.");
    //removeMoreItems();
    totalCheck();
    console.log(itemsArray);
  }
  else
  {
    alert(askToRemove + " is not a valid response!");
    removeMoreItems();
  }
}

/* 11. This handles the actual process of removing items from the cart array.*/
var removeItem = function(anItemArray, item)
{
  for (var i = 0; i < anItemArray.length; i++)
  {
    if (anItemArray[i].name === item.name)
    {
      anItemArray[i].count--;
      console.log("Removed another " + item.name + " from your cart!");
      console.log(anItemArray);
      return;
    }
  }
}

/* 10. This prompts the user to remove items.*/
var decideWhatToRemove = function ()
{
  var userInput = prompt("CALENDAR - $5\nBOOKBAG - $10\nTEXTBOOK - $20\nPlease enter the name of the item to remove it to your cart.\nType -1 to continue.");
  var userInputUpper = userInput.toUpperCase(); // Capitalizing whatever the user inputs.

  if(userInputUpper === "-1")
  {
    currentCart();
    return (-1); // End the program.
  }
  else if(userInputUpper === "BOOKBAG")
  {
    if(bookbag.count > 0){
      removeItem(itemsArray, bookbag);
      currentCart();
    }
    else{
      alert("This item does not exist in your cart! We can't remove it.")
    }
  }
  else if(userInputUpper === "CALENDAR")
  {
    removeItem(itemsArray, calendar);
    currentCart();
  }
  else if(userInputUpper === "TEXTBOOK")
  {
    removeItem(itemsArray, textbook);
    currentCart();
  }
  else
  {
    alert(userInputUpper + " is not a valid value! Try again.")
    decideWhatToRemove();
  }
}

/* 9. This functions handles WHEN to call the other functions (in regards to removing).*/
var removeFromCart = function(trueOrFalse)
{
  var keepGoing = trueOrFalse;

  while(keepGoing)
  {
    console.log("Entered while statement.");

    if(decideWhatToRemove() === -1) // We want the while statement to end.
    {
      currentCart();
      return;
    }
    removeMoreItems();
  }
}





/* 7. This handles the user's response to adding MORE items.*/
var addMoreItems = function ()
{
  var temp = true;
   var askForMore = prompt("Would you like to add an item to your cart? y/n");
   if (askForMore === "y" || askForMore === "Y")
  {
    addToCart(temp);
  }
  else if (askForMore === "n" || askForMore === "N")
  {
    alert("Alright. We won't add more items.");
    removeMoreItems();
  }
  else
  {
    alert(askForMore + " is not a valid response!");
    addMoreItems();
  }
}

/* 5. This handles the actual process of adding items to the cart array.*/
var addItem = function(anItemArray, item)
{
  for (var i = 0; i < anItemArray.length; i++)
  {
    if (anItemArray[i].name === item.name)
    {
      anItemArray[i].count++;
      console.log("Added another " + item.name + " to your cart!");
      console.log(anItemArray);
      return;
    }
  }
}

/* 4. This prompts the user to input items from the alert.*/
var decideWhatToAdd = function ()
{
  var userInput = prompt("CALENDAR - $5\nBOOKBAG - $10\nTEXTBOOK - $20\nPlease enter the name of the item to add it to your cart.\nType -1 to continue.");
  var userInputUpper = userInput.toUpperCase(); // Capitalizing whatever the user inputs.

  if(userInputUpper === "-1")
  {
    currentCart();
    removeMoreItems();
    return (-1); // End the program.
  }
  else if(userInputUpper === "BOOKBAG")
  {
    addItem(itemsArray, bookbag);
    currentCart();
  }
  else if(userInputUpper === "CALENDAR")
  {
    addItem(itemsArray, calendar);
    currentCart();
  }
  else if(userInputUpper === "TEXTBOOK")
  {
    addItem(itemsArray, textbook);
    currentCart();
  }
  else
  {
    alert(userInputUpper + " is not a valid value! Try again.")
    decideWhatToAdd();
  }
}

/* 3. This functions handles WHEN to call the other functions.*/
var addToCart = function(trueOrFalse)
{
  var keepGoing = trueOrFalse;

  while(keepGoing)
  {
    console.log("Entered while statement.");

    if(decideWhatToAdd() === -1) // We want the while statement to end.
    {
      return;
    }
    addMoreItems();
  }
}

/* 2. Determine if we should even run the program.*/
var decideToRunProgram = function()
{
  var run = false;
  var userReady = prompt("Would you like to input items? y/n");

  if(userReady === "y" || userReady === "Y")
  {
    run = true;
  }
  else if(userReady === "n" || userReady === "N")
  {
    alert("Very well then. Goodbye!"); // Doesn't make run equal true, so the addToCart never gets called.
  }
  else
  {
    alert("It seems you did not put in a real value, so we'll assume no. Goodbye!"); // Doesn't make run equal true, so the addToCart never gets called.
  }
  return run;
}

/* 1. This is going call the function that will ask if the user wants to start the program.*/
var startCaller = function()
{
  var what = true;
  alert("Welcome to the Year Up Shopping Cart!");

  var runProgram = decideToRunProgram(); // 1. Stores whatever the user entered: if they decided to start the program, this is true; it's false otherwise.
  if (runProgram === true)
  {
    addToCart(what); // 2. If their response was true, we'll start the whole cart managing process, otherwise function will end naturally.
  }
}

/*This finds the math for the total and total plus tax.*/
var currentCart = function()
{
  var tax = 0;
  var total = 0;
  var totalPlusTax=0;
  for(var i=0; i<= itemsArray.length -1; i++){
  tax += (parseFloat(itemsArray[i].price) * parseFloat(itemsArray[i].count) * .075);
}
  for(var i=0; i<= itemsArray.length -1; i++){
  total += (parseFloat(itemsArray[i].price) * parseFloat(itemsArray[i].count));
}
  totalPlusTax = total + tax;
  alert("Your subtotal is $" + (total.toFixed(2)) + "\nYour total with tax is $" + (totalPlusTax.toFixed(2)));
}

startCaller();