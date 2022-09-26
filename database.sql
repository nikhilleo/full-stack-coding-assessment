show databases;

use mock_project;

show tables;

select * from course;

SELECT * FROM Country;

SELECT * 
FROM Country c
INNER JOIN University u
ON c.country_id = u.country_id
INNER JOIN Course co
ON co.university_id = u.university_id
INNER JOIN Scholarship s
ON u.university_id = s.university_id
INNER JOIN EducationLevel e
ON e.level_id = co.level_id
ORDER BY course_id;

SELECT * 
FROM Country c
INNER JOIN University u
ON c.country_id = u.country_id
INNER JOIN Course co
ON co.university_id = u.university_id
INNER JOIN Scholarship s
ON u.university_id = s.university_id
INNER JOIN EducationLevel e
ON e.level_id = co.level_id
WHERE (c.country_name LIKE '%') AND (e.level_name LIKE '%')  AND (u.university_name LIKE '%' OR co.course_name LIKE '%');


    SELECT *
FROM Country c
INNER JOIN University u
ON c.country_id = u.country_id
INNER JOIN Course co
ON co.university_id = u.university_id
INNER JOIN Scholarship s
ON u.university_id = s.university_id
INNER JOIN EducationLevel e
ON e.level_id = co.level_id
WHERE (c.country_name LIKE '%') AND (e.level_name LIKE '%')  AND (u.university_name LIKE '%' OR co.course_name LIKE '%')