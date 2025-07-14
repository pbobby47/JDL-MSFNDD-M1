db.students.insertMany([
  {
    name: { firstName: "Aarav", lastName: "Sharma", preferedName: "Avi" },
    age: 23,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    gotjob: { status: true, companyName: "Infosys" },
    subjects_completed: [
      { subjectName: "html", percentage: 95 },
      { subjectName: "CSS", percentage: 88 },
      { subjectName: "JavaScript", percentage: 78 },
      { subjectName: "React JS", percentage: 80 },
    ],
    subjects_pending: [
      { subjectName: "Node JS", startMonth: "July" },
      { subjectName: "Express JS", startMonth: "July" },
      { subjectName: "Tailwind CSS", startMonth: "August" },
      { subjectName: "Mongo DB", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Neha", lastName: "Verma", preferedName: "Neh" },
    age: 21,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 100 },
      { subjectName: "CSS", percentage: 95 },
      { subjectName: "JavaScript", percentage: 60 },
    ],
    subjects_pending: [
      { subjectName: "React JS", startMonth: "July" },
      { subjectName: "Node JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Rahul", lastName: "Mishra", preferedName: "Rahu" },
    age: 24,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS"],
    gotjob: { status: true, companyName: "Wipro" },
    subjects_completed: [
      { subjectName: "html", percentage: 90 },
      { subjectName: "CSS", percentage: 80 },
      { subjectName: "JavaScript", percentage: 85 },
      { subjectName: "React JS", percentage: 75 },
      { subjectName: "Node JS", percentage: 70 },
    ],
    subjects_pending: [
      { subjectName: "Express JS", startMonth: "July" },
      { subjectName: "Mongo DB", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Sneha", lastName: "Rao", preferedName: "Sneh" },
    age: 22,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 98 },
      { subjectName: "CSS", percentage: 89 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
      { subjectName: "Node JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Ravi", lastName: "Kumar", preferedName: "Rav" },
    age: 23,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Mongo DB"],
    gotjob: { status: true, companyName: "Accenture" },
    subjects_completed: [
      { subjectName: "html", percentage: 92 },
      { subjectName: "CSS", percentage: 85 },
      { subjectName: "JavaScript", percentage: 82 },
      { subjectName: "React JS", percentage: 76 },
      { subjectName: "Node JS", percentage: 74 },
      { subjectName: "Mongo DB", percentage: 70 },
    ],
    subjects_pending: [],
  },
  {
    name: { firstName: "Isha", lastName: "Mehta", preferedName: "Ish" },
    age: 21,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 93 },
      { subjectName: "CSS", percentage: 86 },
      { subjectName: "JavaScript", percentage: 65 },
    ],
    subjects_pending: [
      { subjectName: "React JS", startMonth: "July" },
      { subjectName: "Node JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Karan", lastName: "Gill", preferedName: "Kay" },
    age: 24,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS"],
    gotjob: { status: true, companyName: "Capgemini" },
    subjects_completed: [
      { subjectName: "html", percentage: 85 },
      { subjectName: "CSS", percentage: 82 },
      { subjectName: "JavaScript", percentage: 80 },
      { subjectName: "React JS", percentage: 70 },
    ],
    subjects_pending: [
      { subjectName: "Express JS", startMonth: "August" },
      { subjectName: "Mongo DB", startMonth: "September" },
    ],
  },
  {
    name: { firstName: "Meena", lastName: "Jain", preferedName: "Mimi" },
    age: 22,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 96 },
      { subjectName: "CSS", percentage: 89 },
      { subjectName: "JavaScript", percentage: 78 },
    ],
    subjects_pending: [
      { subjectName: "React JS", startMonth: "July" },
      { subjectName: "Node JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Vikram", lastName: "Singh", preferedName: "Vicky" },
    age: 25,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Mongo DB"],
    gotjob: { status: true, companyName: "Tech Mahindra" },
    subjects_completed: [
      { subjectName: "html", percentage: 90 },
      { subjectName: "CSS", percentage: 80 },
      { subjectName: "JavaScript", percentage: 85 },
      { subjectName: "React JS", percentage: 77 },
    ],
    subjects_pending: [
      { subjectName: "Node JS", startMonth: "July" },
      { subjectName: "Express JS", startMonth: "July" },
    ],
  },
  {
    name: { firstName: "Anjali", lastName: "Yadav", preferedName: "Anju" },
    age: 21,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 97 },
      { subjectName: "CSS", percentage: 90 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
      { subjectName: "Node JS", startMonth: "August" },
    ],
  },

  // 10 more similar but unique records:
  {
    name: { firstName: "Yash", lastName: "Patel", preferedName: "Yashu" },
    age: 22,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 92 },
      { subjectName: "CSS", percentage: 87 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Priya", lastName: "Sen", preferedName: "Pree" },
    age: 23,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    gotjob: { status: true, companyName: "Mindtree" },
    subjects_completed: [
      { subjectName: "html", percentage: 98 },
      { subjectName: "CSS", percentage: 91 },
      { subjectName: "JavaScript", percentage: 84 },
      { subjectName: "React JS", percentage: 78 },
    ],
    subjects_pending: [
      { subjectName: "Node JS", startMonth: "August" },
      { subjectName: "Express JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Nikhil", lastName: "Das", preferedName: "Nik" },
    age: 25,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "React JS"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 85 },
      { subjectName: "CSS", percentage: 76 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Divya", lastName: "Nair", preferedName: "Divs" },
    age: 21,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "Bootstrap"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 88 },
      { subjectName: "CSS", percentage: 77 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Arjun", lastName: "Reddy", preferedName: "AJ" },
    age: 23,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Mongo DB"],
    gotjob: { status: true, companyName: "Zoho" },
    subjects_completed: [
      { subjectName: "html", percentage: 90 },
      { subjectName: "CSS", percentage: 85 },
      { subjectName: "JavaScript", percentage: 88 },
      { subjectName: "React JS", percentage: 82 },
      { subjectName: "Node JS", percentage: 80 },
    ],
    subjects_pending: [{ subjectName: "Express JS", startMonth: "August" }],
  },
  {
    name: { firstName: "Ritika", lastName: "Gupta", preferedName: "Ritz" },
    age: 22,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 95 },
      { subjectName: "CSS", percentage: 87 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Dev", lastName: "Kapoor", preferedName: "Devu" },
    age: 24,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "Node JS"],
    gotjob: { status: true, companyName: "Cognizant" },
    subjects_completed: [
      { subjectName: "html", percentage: 88 },
      { subjectName: "CSS", percentage: 80 },
      { subjectName: "JavaScript", percentage: 85 },
    ],
    subjects_pending: [
      { subjectName: "React JS", startMonth: "July" },
      { subjectName: "Mongo DB", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Simran", lastName: "Kaur", preferedName: "Simi" },
    age: 21,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript"],
    gotjob: { status: false },
    subjects_completed: [
      { subjectName: "html", percentage: 89 },
      { subjectName: "CSS", percentage: 84 },
    ],
    subjects_pending: [
      { subjectName: "JavaScript", startMonth: "July" },
      { subjectName: "React JS", startMonth: "August" },
    ],
  },
  {
    name: { firstName: "Tarun", lastName: "V", preferedName: "Taz" },
    age: 22,
    course: "MERN Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React JS"],
    gotjob: { status: true, companyName: "HCL" },
    subjects_completed: [
      { subjectName: "html", percentage: 91 },
      { subjectName: "CSS", percentage: 83 },
      { subjectName: "JavaScript", percentage: 82 },
      { subjectName: "React JS", percentage: 80 },
    ],
    subjects_pending: [{ subjectName: "Node JS", startMonth: "August" }],
  },
]);

db.students.find(
  {
    "subjects_pending.startMonth": "August",
  },
  {
    "subjects_pending.subjectName": 1,
    name: 1,
    _id: 0,
  }
);

db.students.find(
  {
    "subjects_pending.startMonth": "August",
  },
  {
    "subjects_pending.subjectName": 1,
    "name.firstName": 1,
    _id: 0,
  }
);

db.students.find({
  "gotjob.status": false,
});

db.students.updateOne(
  { "gotjob.status": false },
  { $set: { instituteName: "Qspiders Delhi", trainerName: "Bobby" } }
);

db.students.updateMany(
  { "gotjob.status": false },
  { $set: { "outerObj.innerObj": "DSA" } }
);

ar.forEach(element => {
  console.log(element[0].toLowerCase());
});
