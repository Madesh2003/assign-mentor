const { GET_ALL_MENTOR, GET_MENTOR_BY_ID, CREATE_NEW_MENTOR } = require('../routers/mentor.router');


const MentorRouter =  require('express').Router();

/**
 * METHOD = GET
 * DESCRIPTION = Helps to get data from the database
 * COLLECTION = Mentor
 */
MentorRouter.get("/", GET_ALL_MENTOR);


/**
 * METHOD = GET
 * DESCRIPTION = Helps to get data from the database
 * COLLECTION = Mentor
 */
MentorRouter.get("/get-mentor/:id", GET_MENTOR_BY_ID);

/**
 * METHOD = POST
 * DESCRIPTION = Helps to post data to the database
 * COLLECTION = Mentor
 */
MentorRouter.post("/creatementor", CREATE_NEW_MENTOR);


module.exports = MentorRouter;