
const queries  = {
    getCoursesWithConditions: `
        SELECT *, AVG(annual_tuition) as avg_annual_tuition
        FROM Country c
        INNER JOIN University u
        ON c.country_id = u.country_id
        INNER JOIN Course co
        ON co.university_id = u.university_id
        INNER JOIN Scholarship s
        ON u.university_id = s.university_id
        INNER JOIN EducationLevel e
        ON e.level_id = co.level_id
        WHERE (c.country_name LIKE '_country_%') AND (e.level_name LIKE '_level_%')  AND (u.university_name LIKE '_univ_%' OR co.course_name LIKE '_course_%')
        GROUP BY co.course_id, s.scholarship_id
        ORDER BY co.course_id, s.scholarship_id;
    `,
    getCourses: `
        SELECT *, AVG(annual_tuition) as avg_annual_tuition
        FROM Country c
        INNER JOIN University u
        ON c.country_id = u.country_id
        INNER JOIN Course co
        ON co.university_id = u.university_id
        INNER JOIN Scholarship s
        ON u.university_id = s.university_id
        INNER JOIN EducationLevel e
        ON e.level_id = co.level_id
        GROUP BY co.course_id, s.scholarship_id
        ORDER BY co.course_id, s.scholarship_id
    `
} 

module.exports = queries;