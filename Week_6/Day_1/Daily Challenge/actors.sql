-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Chris','Evans','06/13/81', 0);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Ranveer','Singh','07/06/81', 0);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Morgan','Freeman','06/01/37', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Morgot','Robbie','07/02/1990', 2);

-- SELECT * FROM actors WHERE number_oscars > 1;

-- SELECT * FROM actors WHERE last_name != 'Singh';

-- SELECT * FROM actors WHERE number_oscars > 0 AND age > '01/01/1950';

-- SELECT * FROM actors WHERE last_name LIKE '%mon%';

-- SELECT * FROM actors WHERE last_name LIKE '%o%';

-- UPDATE actors
-- SET age = '06/01/1937'
-- WHERE actor_id = 5;

-- SELECT first_name, last_name FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon' ;

-- SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC;

-- SELECT * FROM actors LIMIT 4;

-- SELECT * FROM actors ORDER BY last_name DESC;

-- SELECT COUNT(*) FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES(NULL);

-- SELECT * FROM actors;