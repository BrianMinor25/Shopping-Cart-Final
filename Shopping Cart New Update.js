// Start from the bottom and work your way up.
var calendar = {
  name: "CALENDAR",
  price: 5.00,
  count: 1
}

var bookbag = {
  name: "BOOKBAG",
  price: 10.00,
  count:1
}

var textbook = {
  name: "TEXTBOOK",
  price: 20.00,
  count:1
}
var itemsArray = [calendar, bookbag, textbook];
var cartArray = [];

/* 6.
/* 6. This handles the user's response to adding MORE items.*/
var addMoreItems = function ()
{
  var temp = true;
   var askForMore = prompt("Would you like to add MORE items to your cart? y/n");
   if (askForMore === "y" || askForMore === "Y")
  {
    cartManager(temp);
  }
  else if (askForMore === "n" || askForMore === "N")
  {
    alert("Alright. We wont add anymore items.");
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
      alert("Added another " + item.name + " to your cart!");
      console.log(anItemArray);
      return;

    }
  }
  anItemArray.push(item);
  alert("Added your first " + item.name + " to your cart!");
}
/* 4. */
var decideWhatToAdd = function ()
{
  var userInput = prompt("CALENDAR - $5\nBOOKBAG - $10\nTEXTBOOK - $20\nPlease enter the name of the item to add it to your cart.\nType -1 to exit");
  var userInputUpper = userInput.toUpperCase(); // Capitalizing whatever the user inputs.

  if(userInputUpper === "-1")
  {
    alert("Very well then! Here is your total list of items.");
    return (-1); // End the program.
  }
  else if(userInputUpper === "BOOKBAG")
  {
    addItem(cartArray, bookbag);
  }
  else if(userInputUpper === "CALENDAR")
  {
    addItem(cartArray, calendar);
  }
  else if(userInputUpper === "TEXTBOOK")
  {
    addItem(cartArray, textbook);
  }
  else
  {
    alert(userInputUpper + " is not a valid value! Try again.")
    decideWhatToAdd();
  }
}
/* 3. This functions handles WHEN to call the other functions.*/
var cartManager = function(trueOrFalse)
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
    alert("Very well then. Goodbye!"); // Doesn't make run equal true, so the cartManager never gets called.
  }
  else
  {
    alert("It seems you did not put in a real value, so we'll assume no. Goodbye!"); // Doesn't make run equal true, so the cartManager never gets called.
  }
  return run;
}

/* 1. This is going call the function that will ask if the user wants to start the program.*/
var startCaller = function()
{
  var what = true;
  alert("Welcome to the Year Up Shopping Cart!");

  var runProgram = decideToRunProgram();     // 1. Stores whatever the user entered: if they decided to start the program, this is true; it's false otherwise.
  if (runProgram === true)
  {
    cartManager(what);                         // 2. If their response was true, we'll start the whole cart managing process, otherwise function will end naturally.
  }
}
startCaller();