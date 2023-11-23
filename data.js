  
  zenclass> db.users.find().pretty();
  [
    {
      _id: ObjectId("64d62a114fd1af0b7529a44a"),
      user_id: 1,
      name: 'hari',
      email: 'hari@gmail.com',
      mentor_id: 1
    },
    {
      _id: ObjectId("64d62ee24fd1af0b7529a44b"),
      user_id: 2,
      name: 'ajay',
      email: 'ajay@gmail.com',
      mentor_id: 2
    },
    {
      _id: ObjectId("64d62ee24fd1af0b7529a44c"),
      user_id: 3,
      name: 'Anil',
      email: 'anil@gmail.com',
      mentor_id: 3
    },
    {
      _id: ObjectId("64d650874fd1af0b7529a44d"),
      user_id: 4,
      name: 'rohit',
      email: 'rohit@gmail.com',
      mentor_id: 2
    },
    {
      _id: ObjectId("64d650874fd1af0b7529a44e"),
      user_id: 5,
      name: 'David',
      email: 'david@gmail.com',
      mentor_id: 3
    },
    {
      _id: ObjectId("64d650c94fd1af0b7529a44f"),
      user_id: 6,
      name: 'rohan',
      email: 'rohan@gmail.com',
      mentor_id: 2
    },
    {
      _id: ObjectId("64d650c94fd1af0b7529a450"),
      user_id: 7,
      name: 'Kirti',
      email: 'kirti@gmail.com',
      mentor_id: 3
    }
  ]

/*.............................................................................................................................................*/
zenclass> db.tasks.find();
[
  {
    _id: ObjectId("64d76e10e1655c8c7d69811e"),
    taskid: 1,
    topicId: 1,
    userId: 1,
    task: 'css task',
    submitted: true,
    due_date: ISODate("2020-10-14T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76e9be1655c8c7d69811f"),
    taskid: 2,
    topicId: 2,
    userId: 2,
    task: 'HTMLtask',
    submitted: true,
    due_date: ISODate("2020-10-12T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76eb3e1655c8c7d698120"),
    taskid: 3,
    topicId: 3,
    userId: 3,
    task: 'Express task',
    submitted: false,
    due_date: ISODate("2020-10-07T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76ecee1655c8c7d698121"),
    taskid: 4,
    topicId: 4,
    userId: 4,
    task: 'React task',
    submitted: true,
    due_date: ISODate("2020-10-07T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76ee7e1655c8c7d698122"),
    taskid: 5,
    topicId: 5,
    userId: 5,
    task: 'Javascript task',
    submitted: true,
    due_date: ISODate("2020-10-20T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76f37e1655c8c7d698123"),
    taskid: 6,
    topicId: 6,
    userId: 6,
    task: 'NodeJS task',
    submitted: true,
    due_date: ISODate("2020-10-25T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76f5ae1655c8c7d698124"),
    taskid: 7,
    topicId: 7,
    userId: 7,
    task: 'DOM task',
    submitted: true,
    due_date: ISODate("2020-10-19T00:00:00.000Z")
  }
]

/*.............................................................................................................................................*/

zenclass> db.attendance.find();
[
  {
    _id: ObjectId("64d77263e1655c8c7d69812a"),
    user_id: 1,
    attended: true,
    topicID: 1
  },
  {
    _id: ObjectId("64d7728ee1655c8c7d69812b"),
    user_id: 2,
    attended: true,
    topicID: 2
  },
  {
    _id: ObjectId("64d77295e1655c8c7d69812c"),
    user_id: 3,
    attended: false,
    topicID: 3
  },
  {
    _id: ObjectId("64d772a2e1655c8c7d69812d"),
    user_id: 4,
    attended: false,
    topicID: 4
  },
  {
    _id: ObjectId("64d772ade1655c8c7d69812e"),
    user_id: 5,
    attended: true,
    topicID: 5
  },
  {
    _id: ObjectId("64d772b8e1655c8c7d69812f"),
    user_id: 6,
    attended: true,
    topicID: 6
  },
  {
    _id: ObjectId("64d772c3e1655c8c7d698130"),
    user_id: 7,
    attended: false,
    topicID: 7
  }
]

/*.............................................................................................................................................*/

zenclass> db.topics.find();
[
  {
    _id: ObjectId("64d76880e1655c8c7d698119"),
    topic_id: 1,
    topic: 'CSS',
    topic_date: ISODate("2020-10-15T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d769fc4fd1af0b7529a452"),
    topic_id: 2,
    topic: 'HTML',
    topic_date: ISODate("2020-10-14T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76b4b4fd1af0b7529a453"),
    topic_id: 3,
    topic: 'Express',
    topic_date: ISODate("2020-10-12T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76c8ee1655c8c7d69811a"),
    topic_id: 4,
    topic: 'React',
    topic_date: ISODate("2020-10-29T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76d01e1655c8c7d69811b"),
    topic_id: 5,
    topic: 'JAVASCRIPT',
    topic_date: ISODate("2020-10-25T00:00:00.000Z")
  },
  {
    _id: ObjectId("64d76d5ee1655c8c7d69811c"),
    topic_id: 6,
    topic: 'NodeJS',
    topic_date: ISODate("2020-10-16T00:00:00.000Z")
  }
]

/*.............................................................................................................................................*/

zenclass> db.mentors.find();
[
  {
    _id: ObjectId("64d77333e1655c8c7d698132"),
    mentor_id: 1,
    mentor_Name: 'farook',
    mentor_email: 'farook@gmail.com'
  },
  {
    _id: ObjectId("64d774fbe1655c8c7d698133"),
    mentor_id: 2,
    mentor_Name: 'Priyanka',
    mentor_email: 'priyanka@gmail.com'
  },
  {
    _id: ObjectId("64d7751ae1655c8c7d698134"),
    mentor_id: 3,
    mentor_Name: 'Rahul',
    mentor_email: 'rahul@gmail.com'
  }
]

/*.............................................................................................................................................*/

zenclass> db.company_drives.find();
[
  {
    _id: ObjectId("64d775a7e1655c8c7d69813c"),
    user_id: 1,
    drive_date: ISODate("2020-10-12T00:00:00.000Z"),
    company_name: 'Google'
  },
  {
    _id: ObjectId("64d77603e1655c8c7d69813d"),
    user_id: 2,
    drive_date: ISODate("2020-10-05T00:00:00.000Z"),
    company_name: 'Microsoft'
  },
  {
    _id: ObjectId("64d77672e1655c8c7d69813e"),
    user_id: 3,
    drive_date: ISODate("2020-10-16T00:00:00.000Z"),
    company_name: 'TCS'
  },
  {
    _id: ObjectId("64d776aee1655c8c7d69813f"),
    user_id: 4,
    drive_date: ISODate("2020-10-25T00:00:00.000Z"),
    company_name: 'Amazon'
  },
  {
    _id: ObjectId("64d776d1e1655c8c7d698140"),
    user_id: 6,
    drive_date: ISODate("2020-10-19T00:00:00.000Z"),
    company_name: 'Deollite'
  },
  {
    _id: ObjectId("64d776f5e1655c8c7d698141"),
    user_id: 5,
    drive_date: ISODate("2020-10-22T00:00:00.000Z"),
    company_name: 'Globant'
  }
]

/*.............................................................................................................................................*/

zenclass> db.codekata.find();
[
  {
    _id: ObjectId("64d765364fd1af0b7529a451"),
    user_id: 1,
    problems: 10
  },
  {
    _id: ObjectId("64d765fbe1655c8c7d69810e"),
    user_id: 2,
    problems: 12
  },
  {
    _id: ObjectId("64d76698e1655c8c7d698111"),
    user_id: 3,
    problems: 9
  },
  {
    _id: ObjectId("64d7678ee1655c8c7d698114"),
    user_id: 4,
    problems: 20
  },
  {
    _id: ObjectId("64d767a2e1655c8c7d698115"),
    user_id: 5,
    problems: 26
  },
  {
    _id: ObjectId("64d767b2e1655c8c7d698116"),
    user_id: 6,
    problems: 50
  },
  {
    _id: ObjectId("64d767bde1655c8c7d698117"),
    user_id: 7,
    problems: 15
  }
]

