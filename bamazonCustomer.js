var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  // start();
  showInventory()
});


function showInventory() {

  //query database to show current inventory/items for sale
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);
    buyItem();
  });
}

function buyItem() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;

    // once you have the items, prompt the user for which they'd like to bid on
    inquirer.prompt([
      {
        name: "choice",
        type: "number",
        message: "What is the ID number of the item you would like to buy?"
      },
      {
        name: "quantity",
        type: "number",
        message: "How many units would you like to buy?"
      }
    ])
      .then(function (answer) {
        // console.log(answer);


        connection.query(`SELECT * FROM products WHERE id = ${answer.choice}`, function (err, results) {
          if (err) throw err;


          if (answer.quantity <= results[0].stock_quantity) {
            var newQuantity = results[0].stock_quantity - answer.quantity;
            var total = results[0].price * answer.quantity;
            connection.query(`UPDATE products SET stock_quantity = ${newQuantity} WHERE id = ${answer.choice}`, function (err, results) {
              if (err) throw err;
              console.log("Your order was successful and we charged your card $" + total);
              connection.end();
            });

          }
          else {
            console.log('Sorry, Not enough in stock!');
            connection.end();
          }

        })



      });
  })
};


// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.




