-- Exercise 1

-- 1.
-- SELECT COUNT(title) AS rating_g FROM film WHERE rating = 'G'; 
-- SELECT COUNT(title) AS rating_pg FROM film WHERE rating = 'PG'; 
-- SELECT COUNT(title) AS rating_pg_13 FROM film WHERE rating = 'PG-13'; 
-- SELECT COUNT(title) AS rating_r FROM film WHERE rating = 'R'; 
-- SELECT COUNT(title) AS rating_nc_17 FROM film WHERE rating = 'NC-17'; 

-- 2.
-- SELECT * FROM film WHERE (rating = 'G' OR rating = 'PG-13') AND (length < 120 AND rental_rate < 3.00)
-- ORDER BY title ASC;

-- 3.
-- UPDATE customer
-- SET first_name = 'Wayne', last_name = 'Celestin', email = 'waynecelestin.a3@gmail.com'
-- WHERE customer_id = 2;
-- SELECT * FROM customer;

-- 4.
-- SELECT customer.customer_id, first_name, last_name, email, address FROM customer
-- INNER JOIN address
-- ON customer.address_id = address.address_id;
-- UPDATE customer
-- SET address.address = '9 Morcellement Lonrho Highlands Phoenix'
-- WHERE customer_id = 2
-- RETURNING
-- 	customer_id,
-- 	first_name,
-- 	last_name,
-- 	email,
-- 	address;


