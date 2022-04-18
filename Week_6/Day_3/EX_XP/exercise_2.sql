--  EXERCISE 2
-- 1.
-- UPDATE film
-- SET language_id = 2
-- WHERE film_id = 4 OR film_id = 15 OR film_id = 384 OR film_id = 184;

-- UPDATE film
-- SET language_id = 4
-- WHERE film_id = 10 OR film_id = 200 OR film_id = 256 OR film_id = 3;

-- UPDATE film
-- SET language_id = 6
-- WHERE film_id = 100 OR film_id = 150 OR film_id = 275 OR film_id = 638;
-- SELECT * FROM film;

-- 2.
-- store_id, and address_id are the foreign keys defined in the customers table
-- WHen we insert we need to go fetch the value from the respective parent table

-- 3.
-- DROP TABLE IF EXISTS customer_review;

-- 4.
-- SELECT COUNT(*) FROM rental WHERE return_date = NULL; -- ALL have been returned

-- 5.
-- SELECT film_id, title, rental rate, rental_id, rental_date, return_date FROM film
-- INNER JOIN rental
-- ON 



