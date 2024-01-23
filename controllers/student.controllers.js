const {GET_ALL_STUDENTS_RECORD,
    CREATE_NEW_STUDENT,
    ASSIGN_MENTOR_TO_STUDENTS,
    ASSIGN_OR_CHANGE_MENTOR_FOR_STUDENT,
    SHOW_ALL_STUDENT_PARTICULAR_MENTOR,} = require('../routers/student.router');


const StudentRouter =  require('express').Router();


/**
 * METHOD = GET
 * DESCRIPTION = Helps to get data from the database
 * COLLECTION = Student
 */

StudentRouter.get("/", GET_ALL_STUDENTS_RECORD);


/**
 * METHOD = POST
 * DESCRIPTION = Helps to post data to the database
 * COLLECTION = Student
 */

StudentRouter.post("/create", CREATE_NEW_STUDENT);


/**
 * METHOD = PUT
 * DESCRIPTION = Helps to change or update the data which is stored in the database
 * COLLECTION = Student
 */

StudentRouter.put("/assign-mentor-students", ASSIGN_OR_CHANGE_MENTOR_FOR_STUDENT);

/**
 * METHOD = PUT
 * DESCRIPTION = Helps to change or update the data which is stored in the database
 * COLLECTION = Student
 */

StudentRouter.put("/assign-mentor/:id", ASSIGN_MENTOR_TO_STUDENTS);


/**
 * METHOD = GET
 * DESCRIPTION = Helps to get data from the database
 * COLLECTION = Student
 */

StudentRouter.get("/mentorstudents/:id", SHOW_ALL_STUDENT_PARTICULAR_MENTOR);


module.exports = StudentRouter;

