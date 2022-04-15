-- Exercise 1
-- 1.
-- SELECT name FROM language;

-- 2.
-- SELECT title, description, name FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id;

-- SELECT title, description, name FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id;

-- SELECT title, description, name FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id;

-- SELECT title, description, name FROM film
-- FULL JOIN language
-- ON film.language_id = language.language_id;

-- 3.
-- CREATE TABLE new_film (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(100) NOT NULL
-- );

-- INSERT INTO new_film (name)
-- VALUES('Avengers Endgame'), ('Infinity War'), ('Geo Storm'), ('San Andreas');
-- SELECT * FROM new_film;

-- 4.
-- CREATE TABLE customer_review (
-- 	reveiw_id SERIAL PRIMARY KEY,
-- 	film_id INTEGER,
-- 	FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
-- 	language_id INTEGER,
-- 	FOREIGN KEY (language_id) REFERENCES language(language_id),
-- 	title VARCHAR(255) NOT NULL,
-- 	score SMALLINT NOT NULL,
-- 	review_text TEXT NOT NULL,
-- 	last_update DATE NOT NULL
-- );
-- SELECT * FROM customer_review;

-- 5.
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES((SELECT id FROM new_film WHERE name = 'Avengers Endgame'),
-- 	 	(SELECT language_id FROM language WHERE name = 'English'),
-- 	  	'Excellent Movie',
-- 	   	10,
-- 	   	'Very emotional movie. On of the best movie I ever watched',
-- 	   	'04/14/2022'),
-- 		((SELECT id FROM new_film WHERE name = 'Infinity War'),
-- 	 	(SELECT language_id FROM language WHERE name = 'English'),
-- 	  	'Strange Movie',
-- 	   	10,
-- 	   	'This is the start of a new univese!!!',
-- 	   	'05/14/2022');
-- SELECT * FROM customer_review;

-- 6.
-- DELETE FROM new_film
-- WHERE id = 1;
-- SELECT * FROM new_film;
-- SELECT * FROM customer_review;