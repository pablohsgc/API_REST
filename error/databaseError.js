class DatabaseError extends Error{
    constructor (message, error){
        super(message);
    }
}

module.exports = DatabaseError;