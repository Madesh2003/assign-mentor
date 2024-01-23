const express = require('express');
const Student = require('../model/student.model');


// Get all the sudent records

function GET_ALL_STUDENTS_RECORD(req, res, next) {
  Student.find()
    .then((response) => {
      if (response.length < 1) {
        return res.status(200).json({
          success: true,
          data: response,
          message: "No student record found",
        });
      } else {
        return res.status(200).json({
          success: true,
          data: response,
          message: "Student records fetched successfully",
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


// create new student record


function CREATE_NEW_STUDENT(req, res, next) {
  const newStudent = new Student(req.body);
  newStudent
    .save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "Student created successfully",
          data: response,
        });
      } else {
        throw new Error("Something went wrong");
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        error: err,
      });
    });
}


//Assign multiple students to a Mentor

function ASSIGN_MENTOR_TO_STUDENTS(req, res, next) {
    const { mentor, stud_list } = req.body;
    let count = 0;
  
    stud_list.forEach((stud_id, index, array) => {
      Student.findById(stud_id, (err, student) => {
        if (err) {
          console.error(err);
          count++;
          if (count === array.length) {
            res.status(500).json({
              success: false,
              error: err,
              message: 'Error',
            });
          }
        } else if (student) {
          student.mentor = mentor;
          student.save((err) => {
            if (err) {
              console.error(err);
            }
            count++;
            if (count === array.length) {
              res.status(200).json({
                success: true,
                message: 'Updated Successfully',
              });
            }
          });
        } else {
          count++;
          if (count === array.length) {
            res.status(404).json({
              success: false,
              message: 'Student not found',
            });
          }
        }
      });
    });
  }


// Assign or Change Mentor for particular Student


function ASSIGN_OR_CHANGE_MENTOR_FOR_STUDENT(req, res, next) {
  const { id } = req.params;
  const { mentor } = req.body;

  Student.findById(id, (err, student) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: err,
        message: 'Error updating student',
      });
    } else if (student) {
      student.mentor = mentor;
      student.save((err) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            success: false,
            error: err,
            message: 'Error updating student',
          });
        } else {
          res.status(200).json({
            success: true,
            data: student,
            message: 'Student updated successfully',
          });
        }
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }
  });
}

//show all students for a particular mentor

function SHOW_ALL_STUDENT_PARTICULAR_MENTOR(req, res, next) {
  const { id } = req.params;

  Student.find({ mentor: id }, (err, students) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err,
        message: 'Error',
      });
    } else {
      res.status(200).json({
        success: true,
        data: students,
        message: 'Mentor students fetched successfully',
      });
    }
  });
}

module.exports = {
  GET_ALL_STUDENTS_RECORD,
  CREATE_NEW_STUDENT,
  ASSIGN_MENTOR_TO_STUDENTS,
  ASSIGN_OR_CHANGE_MENTOR_FOR_STUDENT,
  SHOW_ALL_STUDENT_PARTICULAR_MENTOR,
};
