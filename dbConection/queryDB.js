const Database = require('./databaseConection.js');

class queryDB {
    constructor(database) {
        this.connection = database.getConnection();
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
}

module.exports = queryDB;