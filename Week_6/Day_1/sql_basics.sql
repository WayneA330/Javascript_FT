-- create a table
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT NOT NULL
);
-- insert some values
INSERT INTO students VALUES (1, 'Ryan', 'M');
INSERT INTO students VALUES (2, 'Joanna', 'F');
-- fetch some values
SELECT * FROM students WHERE gender = 'F';

-- delete values
DELETE FROM students WHERE name = 'Joanna';

SELECT * FROM students;

-- update values
UPDATE students
SET name='Ryan', gender = 'F' -- can be on multiple lines
WHERE name='Ryan'; -- SQL commands are not case sensitve + terminate commands with ';'

SELECT * FROM students;
