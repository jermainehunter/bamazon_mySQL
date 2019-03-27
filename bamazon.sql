DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INT (5.2) DEFAULT 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tower 10 IPA", "beer", 28, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Aurora Hoppyalis IPA", "beer", 29, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boat Shoes Hazy IPA", "beer", 29, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Trolley Ale", "beer", 29, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Isomerizer IPA", "beer", 30, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Follow The Sun Pilsner", "beer", 27, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pintail Pale Ale", "beer", 27, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mosaic Session IPA", "beer", 29, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Columbia Street Amber Ale", "beer", 28, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wreck Alley Imperial Stout", "beer", 35, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("WindandSea Wheat", "beer", 31, 100);

SELECT*FROM products;

-- DELETE FROM products WHERE id = ();

