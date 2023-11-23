/*Find all the topics and tasks which are thought in the month of October*/

db.tasks.aggregate([
  {
    $lookup: {
      from: "topics",
      localField: "topicId",
      foreignField: "topic_id",
      as: "tasksAndTopics",
    },
  },
  {
    $match: {
      $and: [
        {
          $or: [
            {
              due_date: {
                $gt: ISODate("2020-09-30T00:00:00.000Z"),
              },
            },
            {
              due_date: {
                $lt: ISODate("2020-11-01T00:00:00.000Z"),
              },
            },
          ],
        },
        {
          $or: [
            {
              "tasksAndTopics.topic_date": {
                $gt: ISODate("2020-09-30T00:00:00.000Z"),
              },
            },
            {
              "tasksAndTopics.topic_date": {
                $lt: ISODate("2020-11-01T00:00:00.000Z"),
              },
            },
          ],
        },
      ],
    },
  },
]);

/*Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020*/

db.company_drives.find({
  $or: [
    { drive_date: { $gt: ISODate("2020-09-30") } },
    { drive_date: { $lt: ISODate("2020-11-01") } },
  ],
});

/*Find all the company drives and students who are appeared for the placement.*/

db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "apearedStudent",
    },
  },
  {
    $project: {
      _id: 0,
      apearedStudent: { name: 1, email: 1 },
      company_name: 1,
      drive_date: 1,
    },
  },
]);

/*Find the number of problems solved by the user in codekata*/

db.codekata.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "student",
    },
  },
  {
    $project: {
      _id: 0,
      problems: 1,
      student: { name: 1, email: 1 },
    },
  },
]);

/*Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020*/

db.attendance.aggregate([
  {
    $lookup: {
      from: "tasks",
      localField: "topicID",
      foreignField: "topicId",
      as: "tasks",
    },
  },
  {
    $match: {
      $and: [{ attended: false }, { "tasks.submitted": false }],
    },
  },
  {
    $match: {
      $and: [
        {
          "tasks.due_date": {
            $gt: ISODate("2020-10-15T00:00:00.000Z"),
          },
        },
        {
          "tasks.due_date": {
            $lt: ISODate("2020-11-01T00:00:00.000Z"),
          },
        },
      ],
    },
  },
  {
    $count: "totalUsersWhoAreAbsentAndTaskNotSubmitted",
  },
]);

/*Find all the mentors with who has the mentee's count more than 15*/

db.users.aggregate([
  {
    $lookup: {
      from: "mentors",
      localField: "mentor_id",
      foreignField: "mentor_id",
      as: "mentors",
    },
  },
  {
    $group: {
      _id: {
        mentor_ID: "$mentors.mentor_id",
        mentorName: "$mentors.mentor_Name",
      },
      MenteeCount: { $sum: 1 },
    },
  },
  { $match: { MenteeCount: { $gt: 15 } } },
]);
