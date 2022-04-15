-- Exericse XP GOLD

-- Update
-- 1.
-- UPDATE students
-- SET birth_date = '11/02/1998'
-- WHERE id = 3;
-- SELECT * FROM students;

-- 2.
-- UPDATE students
-- SET last_name = 'Guez'
-- WHERE id = 5;
-- SELECT * FROM students;

-- Delete
-- 1.
-- DELETE FROM students
-- WHERE id = 3;
-- SELECT * FROM students;

-- Count
-- 1.
-- SELECT COUNT(*) FROM students;

-- 2.
-- SELECT COUNT(*) FROM students WHERE birth_date > '01/01/2000';

-- Insert / Alter
-- 1.
-- ALTER TABLE students ADD COLUMN math_grade INTEGER;

-- 2.
-- UPDATE students
-- SET math_grade = 80
-- WHERE id = 1;
-- SELECT * FROM students;

-- 3.
-- UPDATE students
-- SET math_grade = 90
-- WHERE id = 2 OR id = 4;
-- SELECT * FROM students;

-- 4.
-- UPDATE students
-- SET math_grade = 40
-- WHERE id = 6;
-- SELECT * FROM students;

-- 5.
-- SELECT COUNT(*) FROM students
-- WHERE math_grade > 83;

-- 6.
-- INSERT INTO students (first_name, last_name, birth_date, math_grade)
-- VALUES ('Omer', 'Simpson', '10/03/1980', 70);
-- SELECT * FROM students;

-- 7.
-- SELECT first_name, last_name, sum(math_grade) AS total_grade
-- FROM students GROUP BY first_name, last_name;

-- Sum
-- 1.
-- SELECT sum(math_grade) FROM students;






