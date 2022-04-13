-- EXERCISE XP

-- Exercise 1
-- Part I

-- Question 1
-- 1.
-- SELECT * FROM items ORDER BY price ASC;

-- 2.
-- SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

-- 3.
-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

-- 4.
-- SELECT last_name FROM customers ORDER BY last_name DESC;

-- Question 2
-- CREATE TABLE purchases (
-- 	id SERIAL PRIMARY KEY,
-- 	customer_id INTEGER,
-- 	FOREIGN KEY (customer_id) REFERENCES customers(id),
-- 	item_id INTEGER,
-- 	FOREIGN KEY (item_id) REFERENCES items(id),
-- 	quantity_purchased INTEGER
-- );
-- SELECT * FROM purchases;

-- Question 3
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES ((SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
-- 		(SELECT id FROM items WHERE items = 'Fan'),
-- 		1),
-- 		((SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
-- 		(SELECT id FROM items WHERE items = 'Large Desk'),
-- 		10),
-- 		((SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
-- 		(SELECT id FROM items WHERE items = 'Small Desk'),
-- 		1);
-- SELECT * FROM purchases;

-- Part II

-- Question 1
-- 1.
-- SELECT * FROM purchases;

-- 2.
-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.id;

-- 3.
-- SELECT * FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.id
-- WHERE customers.id = 5;

-- 4.
-- SELECT * FROM purchases
-- INNER JOIN items
-- ON purchases.item_id = items.id
-- WHERE items.items = 'Large Desk' OR items.items = 'Small Desk';

-- Question 2
-- SELECT first_name, last_name, items, quantity_purchased, price FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.id
-- INNER JOIN items
-- ON purchases.item_id = items.id;

-- Question 3
-- INSERT INTO purchases (customer_id)
-- VALUES ((SELECT id FROM customers WHERE first_name = 'Trevor' AND last_name = 'Green'));
-- SELECT * FROM purchases;

