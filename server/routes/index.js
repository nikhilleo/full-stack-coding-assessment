const { Router } = require("express");
const queries = require("../constants");
const connection = require("../database");

const router = Router()

router.get('/courses',async(req, res, next) => {
    try {
        const { university_course, level_name, university_country } = req.query;
        let query = queries.getCourses
        if(university_country || level_name || university_course) {
            query = queries.getCoursesWithConditions
            query = query.replace('_country_', university_country || '')
            query = query.replace('_level_',level_name || '')
            query = query.replace('_univ_', university_course || '')
            query = query.replace('_course_', university_course || '')
        }
        const result = await connection.query(query);
        return res.json({ courses: result });
    } catch (error) {
        next(error)
    }
})

module.exports = router;