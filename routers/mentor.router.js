const mentor = require('../model/mentor.model');

/* get all mentor details */

function GET_ALL_MENTOR(req, res, next) {
  mentor.find()
    .then((response) => {
      if (response.length < 1) {
        return res.status(200).json({
          success: true,
          data: response,
          message: "No Mentor details found",
        });
      } else {
        return res.status(200).json({
          success: true,
          data: response,
          message: "Mentordetails fetched successfully",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: err,
        message: "Something went wrong",
      });
    });
}


/* create mentor */

function CREATE_NEW_MENTOR(req, res, next) {
    const newmentor = new mentor(req.body);
    newmentor
      .save()
      .then((response) => {
        if (response._id) {
          return res.status(200).json({
            success: true,
            data: response,
            message: "Mentor created successfully",
          });
        } else {
          throw new Error({
            message: "Something went wrong",
          });
        }
      })
      .catch((err) => {
        return res.status(402).json({
          success: false,
          error: err,
        });
      });
  }




/* get mentor based on ID */
function GET_MENTOR_BY_ID(req, res, next) {
    const { id } = req.params;
  
    mentor.findById({ _id: id })
      .then((response) => {
        res.status(200).json({
          success: true,
          data: response,
          message: "Mentor fetched successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          error: err,
        });
      });
  }
  



module.exports = {
    GET_ALL_MENTOR,
    CREATE_NEW_MENTOR,
    GET_MENTOR_BY_ID
};