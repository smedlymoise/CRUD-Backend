const db = require("./db");
const { Campus } = require("./index");
const { Student } = require("./index");

const seed = async () => {
  db.logging = false;
  await db.sync({ force: true }); // Drop and recreate tables

    const campus = await Campus.bulkCreate([
    {
      name: "BMCC",
      address: "123",
      description: "very nice college",
      imageUrl: "",
    },
    { 
      name: "City College",
      address: "456",
      description: "nice college",
      imageUrl: "",
    },
    { 
      name: "Jhon Jay",
      address: "789",
      description: "college",
      imageUrl: "",
    },
  ]);

  const student = await Student.bulkCreate([
    {
      name: "Bar Yaakov",
      email: "baryaakov555@gmail.com",
      gpa: 3.5,
      imageUrl: "",
      campusId: campus[0].id,
    },
    { 
      name: "testing test",
      email: "baryaakov5050@gmail.com",
      gpa: 3.0,
      imageUrl: "",
      campusId: campus[1].id,
    },
    {
      name: "silly goose",
      email: "baryaakov5151@gmail.com",
      gpa: 2.5,
      imageUrl: "",
      campusId: campus[2].id,
    },
  ]);

  console.log(`Created ${student.length} student`);
  console.log(`Created ${campus.length} campus`);

  console.log("Seeded the database");

  await db.close();
};

seed();