const projectService = require('./Project.service');

async function addProject(data) {
  return await projectService.create(data);
}

async function addManyProject(data) {
  return await projectService.insertMany(data);
}

async function deleteProject(id) {
  const project = await projectService.findByIdAndDelete(id);
  console.log(project);

  if (!project) {
    return 'Project not found';
  }

  return 'Project removed successfully';
}

async function deleteMany() {
  await projectService.deleteMany();
  return 'Projects removed successfully';
}


async function getProjects() {
  return await projectService.find();
}


async function updateProject(id, updateData) {
    
    const project = await projectService.findByIdAndUpdate(id, updateData);
    
    if (!project) {
        return 'Project not found';
    }
    
    return 'Data is updated';

}