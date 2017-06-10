// Start from the bottom and work your way up.
var calendar = {
  name: "CALENDAR",
  price: 15.00,
  count: 0
}

var bookbag = {
  name: "BOOKBAG",
  price: 25.00,
  count: 0
}

var textbook = {
  name: "TEXTBOOK",
  price: 50.00,
  count: 0
}
var itemsArray = [calendar, bookbag, textbook];

/* 10. Checks to see if user wants to go back through shopping cart again.*/
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

/* 9. Checks if the total is greater or less than $100.*/
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
  if(totalPlusTax >= 100){
    alert("Since your total is $100 or greater, a CREDIT CARD can be used at checkout.");
  }
  else if(totalPlusTax === 0){
    alert("You have no items in your cart. The method of payment doesn't matter.");
  }
  else{
    alert("Since your total is less than $100, CASH payment is required for checkout.");
  }
  finalCheck();
}

/* 8. This finds the math for the total and total plus tax.*/
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
  alert("Your Cart:\n" + calendar.name + ": " + calendar.count + " = $" + (calendar.count*calendar.price) + ".00\n" + bookbag.name + ": " + bookbag.count + " = $" + (bookbag.count*bookbag.price) + ".00\n" + textbook.name + ": " + textbook.count + " = $" + (textbook.count*textbook.price) + ".00\n\nSUBTOTAL: $" + (total.toFixed(2)) + "\n\nTOTAL w/ TAX: $" + (totalPlusTax.toFixed(2)));
}

/* 7. This handles the user's response to removing items.*/
var removeMoreItems = function ()
{
  var temp = true;
   var askToRemove = prompt("Would you like to REMOVE an item from your cart? y/n");
   if (askToRemove === "y" || askToRemove === "Y")
  {
    decideWhatToRemove(temp);
  }
  else if (askToRemove === "n" || askToRemove === "N")
  {
    alert("Very well. We won't continue to remove items.");
    currentCart();
    totalCheck();
    console.log(itemsArray);
  }
  else
  {
    alert(askToRemove + " is not a valid response! Please try again.");
    removeMoreItems();
  }
}

/* 6. This handles the actual process of removing items from the cart array.*/
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

/* 5. This prompts the user to remove items.*/
var decideWhatToRemove = function ()
{
  var userInput = prompt("Items For Sale:\nCALENDAR ($15.00)\nBOOKBAG ($25.00)\nTEXTBOOK ($50.00)\nThis is not case sensitive.\n\nPlease enter the NAME of the item to REMOVE it from your cart.\n\nType -1 to STOP removing items and CONTINUE.");
  var userInputUpper = userInput.toUpperCase(); // Capitalizing whatever the user inputs.

  if(userInputUpper === "-1")
  {
    currentCart();
    totalCheck();
    return (-1); // End the program.
  }
  else if(userInputUpper === "BOOKBAG")
  {
    if(bookbag.count > 0){
      removeItem(itemsArray, bookbag);
      currentCart();
      decideWhatToRemove();
    }
    else{
      alert("This item does not exist in your cart! We can't remove it.")
      decideWhatToRemove();
    }
  }
  else if(userInputUpper === "CALENDAR")
  {
    if(calendar.count > 0){
      removeItem(itemsArray, calendar);
      currentCart();
      decideWhatToRemove();
    }
    else{
      alert("This item does not exist in your cart! We can't remove it.")
      decideWhatToRemove();
    }
  }
  else if(userInputUpper === "TEXTBOOK")
  {
    if(textbook.count > 0){
      removeItem(itemsArray, textbook);
      currentCart();
      decideWhatToRemove();
    }
    else{
      alert("This item does not exist in your cart! We can't remove it.")
      decideWhatToRemove();
    }
  }
  else
  {
    alert(userInputUpper + " is not a valid value! Try again.")
    decideWhatToRemove();
  }
}

/* 4. This handles the actual process of adding items to the cart array.*/
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

/* 3. This prompts the user to input items from the alert.*/
var decideWhatToAdd = function ()
{
  var userInput = prompt("Items For Sale:\nCALENDAR ($15.00)\nBOOKBAG ($25.00)\nTEXTBOOK ($50.00)\n\nPlease enter the NAME of the item you want to ADD to your cart.\nThis is not case sensitive.\n\nType -1 to STOP adding items and CONTINUE.");
  var userInputUpper = userInput.toUpperCase(); // Capitalizing whatever the user inputs.

  if(userInputUpper === "-1")
  {
    removeMoreItems();
    return (-1); // End the program.
  }
  else if(userInputUpper === "BOOKBAG")
  {
    addItem(itemsArray, bookbag);
    currentCart();
    decideWhatToAdd();
  }
  else if(userInputUpper === "CALENDAR")
  {
    addItem(itemsArray, calendar);
    currentCart();
    decideWhatToAdd();
  }
  else if(userInputUpper === "TEXTBOOK")
  {
    addItem(itemsArray, textbook);
    currentCart();
    decideWhatToAdd();
  }
  else
  {
    alert(userInputUpper + " is not a valid value! Try again.")
    decideWhatToAdd();
  }
}

/* 2. Determine if we should even run the program.*/
var decideToRunProgram = function()
{
  var run = false;
  var userReady = prompt("Would you like to ADD items? y/n");

  if(userReady === "y" || userReady === "Y")
  {
    run = true;
  }
  else if(userReady === "n" || userReady === "N")
  {
    alert("Very well then. Goodbye!");
  }
  else
  {
    alert("It seems you did not put in a real value, so we'll assume no. Goodbye!");
  }
  return run;
}

/* 1. This is going call the function that will ask if the user wants to start the program.*/
var startCaller = function()
{
  var what = true;
  alert("Welcome to the Year Up Shopping Cart!");

  var runProgram = decideToRunProgram(); // Stores whatever the user entered: if they decided to start the program, this is true; it's false otherwise.
  if (runProgram === true)
  {
    decideWhatToAdd(what); // If their response was true, we'll start the whole cart managing process, otherwise function will end naturally.
  }
}

startCaller();