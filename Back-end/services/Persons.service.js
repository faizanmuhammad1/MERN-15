const PersonsModel = require("../models/persons.model");

async function addPerson(data) {
  return await PersonsModel.create(data);
}

async function addManyPerson(data) {
  return await PersonsModel.insertMany(data);
}

async function deletePerson(id) {
    const person = await PersonsModel.findByIdAndDelete(id);
    console.log(person);
    
    if (!person) {
        return "Person not found";
    }
    
    return "Person removed successfully";
    }

async function deleteMany() {
    await PersonsModel.deleteMany();
    return "Persons removed successfully";
}

async function getPersons() {
    return await PersonsModel.find();
}

async function updatePerson(id, updateData) {
    const person = await PersonsModel.findByIdAndUpdate(id, updateData);
    
    if (!person) {
        return "Person not found";
    }
    
    return "Data is updated";
}

    




