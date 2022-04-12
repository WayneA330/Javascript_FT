-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES('Benichou', 'Marc', '11/02/1998'), ('Cohen', 'Yoan', '12/03/2010'), ('Lea', 'Benichou', '07/27/1987'), ('Amelia', 'Dux', '04/07/1996'), ('David', 'Grez', '06/14/2003'), ('Omer', 'Simpsom', '10/03/1980');

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES('Celestin', 'Wayne', '12/30/2003');

-- SELECT * FROM students;

-- SELECT first_name, last_name FROM students;

-- SELECT first_name, last_name FROM students WHERE id = 2;

-- Did a mistake!
-- UPDATE students
-- SET first_name = 'David'
-- SET last_name = 'Grez'
-- WHERE id = 5;
-- SELECT * FROM students;

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' OR last_name = 'Benichou';

-- SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

-- SELECT first_name, last_name FROM students WHERE id = 1 OR id = 3;

-- SELECT * FROM students WHERE birth_date >= '01/1/2000';



-- Exercise XP GOLD

-- SELECT first_name, last_name, birth_date FROM students WHERE id <= 4 ORDER BY last_name ASC; -- can't use limit because order by will want to go through the whole array

-- SELECT first_name, last_name, birth_date FROM students ORDER BY birth_date DESC LIMIT 1;

SELECT first_name, last_name, birth_date FROM students OFFSET 2 LIMIT 3;

