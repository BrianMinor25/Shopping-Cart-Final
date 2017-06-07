var correct = true;
var calendar = {
  name: "CALENDAR",
  price: 5.00,
}

var bookbag = {
  name: "BOOKBAG",
  price: 10.00,
}

var textbook = {
  name: "TEXTBOOK",
  price: 20.00,
}
var itemsArray = [calendar, bookbag, textbook];
var cartArray = [];

alert("Welcome to the Year Up Shopping Cart!");
var cartStart = prompt("Would you like to input items? y/n");
  if(cartStart === "y")
  {
    while(correct){
    {
      var enterItem = prompt("CALENDAR - $5\nBOOKBAG - $10\nTEXTBOOK - $20\nPlease enter the name of the item to add it to your cart.\nType -1 to exit");
        if(enterItem === "-1")
         {
           alert("Goodbye!");
           var correct = false;
           break;
         }
        else if(enterItem === "BOOKBAG")
         {
           cartArray.push(bookbag.price);
           console.log(cartArray);
         }
        else if(enterItem === "CALENDAR")
         {
           cartArray.push(calendar.price);
           console.log(cartArray);
         }
        else if(enterItem === "TEXTBOOK")
         {
           cartArray.push(textbook.price);
           console.log(cartArray);
         }
        else
         {
           alert("That doesn't seem to be a real value! Goodbye.")
           correct = false;
           break;
      }
      var getMore = prompt("Would you like to input MORE items? y/n")
        if(getMore == "y" && correct == true){
          var correct = true;
        }
        else if(getMore = "n"){
          var correct = false;
          break;
        }
        else
        {
          var correct = false;
          break;
        }
       }
      }
    }
else if(cartStart === "n")
  {
    alert("Very well then. Goodbye!");
  }
else
  {
    alert("It seems you did not put in a real value. Goodbye!");
  }