const queries = require("./_queries");
const mutations = require("./_mutations");
const equipments = require("./equipments");
const supplies = require("./supplies");

const typeDefs = [queries, mutations, equipments.typeDefs, supplies.typeDefs];

const resolvers = [equipments.resolvers, supplies.resolvers];

module.exports = { typeDefs, resolvers };
