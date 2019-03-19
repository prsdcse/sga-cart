const YAML = require('yamljs');

// YAML.load uses fs internally and its root path is the bottom App level.
const database = YAML.load('./server/database/database.yml');

module.exports = {
    database: database,
};
