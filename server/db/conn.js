const { MongoClient } = require("mongodb");
// MongoDB URI points to the 'mongo' container from docker-compose.yml
const Db = "mongodb://mongo:27017/employees";
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect();
            _db = client.db("employees");
            console.log("Successfully connected to MongoDB.");
            
            return callback(null);
        } catch (error) {
            return callback(error);
        }
    },

    getDb: function () {
        return _db;
    }
};
