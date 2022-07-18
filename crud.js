const Users= require('../models/users');
var usersfunc = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
}

function findAll() {
    return Users.findAll();
}

function findById(id) {
    return Users.findByPk(id);
}

function deleteById(id) {
    return Users.destroy({ where: { id: id } });
}

function create(gig) {
    var newGig = new Users(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    var updateGig = {
        title: gig.title,
        technologies: gig.technologies,
        description: gig.description,
        budget: gig.budget,
        contact_email: gig.contact_email
    };
    return Gig.update(updateGig, { where: { id: id } });
}module.exports = gigDao;