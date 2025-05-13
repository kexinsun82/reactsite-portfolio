const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  shortDescription: String,
  tech: [String],
  year: Number,
  status: String,
  url: String,
  order: { type: Number, default: 0 },
  imageUrl: String,
  images: [String],
  figmaUrl: String,
  outcomes: [String],
  team: [String],
  nextProject: {
    name: String,
    order: Number
  }
});

const Project = mongoose.model("Project", ProjectSchema);

async function connect() {
  await mongoose.connect(dbUrl);
}

async function initializeProjects() {
  await connect();
  const count = await Project.countDocuments();
  if (count === 0) {
    console.log("No projects found, please inserting portfolio data...");
    let projectList = [
      {
        name: "Focus Typing",
        shortDescription: "A typing speed test web app to help users improve typing skills.",
        description: "A typing speed test web app to help users improve typing skills.",
        tech: ["JavaScript", "React", "Node.js"],
        year: 2025,
        status: "Completed",
        url: "https://kexinsun82.github.io/javascript-focus-typing/",
        imageUrl: "https://i.postimg.cc/Vv5yZmTq/project2.png",
        images: ["https://i.postimg.cc/Vv5yZmTq/project2.png"],
        figmaUrl: "https://kexinsun82.github.io/javascript-focus-typing/",
        outcomes: ["JavaScript", "React", "Node.js"],
        team: ["Kexin Sun"],
        nextProject: {
          name: "Portfolio Website",
          order: 2
        }
      },
      {
        name: "Portfolio Website",
        shortDescription: "My personal portfolio showcasing my projects and skills.",
        description: "My personal portfolio showcasing my projects and skills.",
        tech: ["HTML", "CSS", "JavaScript", "Express"],
        year: 2025,
        status: "In Progress",
        url: "https://www.kellysun.ca/",
        imageUrl: "https://i.postimg.cc/hPkFMF0m/project6.png",
        images: ["https://i.postimg.cc/hPkFMF0m/project6.png"],
        figmaUrl: "https://www.kellysun.ca/",
        outcomes: ["HTML", "CSS", "JavaScript", "Express"],
        team: ["Kexin Sun"],
        nextProject: {
          name: "Focus Typing",
          order: 1
        }
      }
    ];
    await Project.insertMany(projectList);
    console.log("Portfolio projects added.");
  }
}

async function getProjects() {
  await connect();
  const projects = await Project.find().sort({ order: 1 });
  return projects;
}

async function getProjectByName(name) {
  await connect();
  const project = await Project.findOne({ name: name });
  return project;
}

async function addProject(name, description, shortDescription, tech, year, status, url, imageUrl, outcomes, team) {
  await connect();
  let newProject = new Project({ name, description, shortDescription, tech, year, status, url, imageUrl, outcomes, team });
  await newProject.save();
}

async function updateProjectStatus(name, newStatus) {
  await connect();
  await Project.updateOne(
    { name: name }, 
    { status: newStatus }
  );
}

async function deleteProjectsByName(name) {
  await connect();
  let result = await Project.deleteMany({ name: name });
}

async function updateProjectOrder(name, newOrder) {
  await connect();
  await Project.updateOne(
    { name: name },
    { $set: { order: newOrder } }
  );
}

module.exports = { 
  getProjects,
  getProjectByName,
  initializeProjects,
  addProject,
  updateProjectStatus,
  deleteProjectsByName,
  updateProjectOrder
};