const db = require('../db')
const DatabaseError = require('../error/databaseError')

class UserRepository {
    async findAllUsers(){
        const query = 'SELECT uuid, username FROM application_user';
        
        const result = await db.query(query);

        const rows = result.rows;

        return rows || [];
    }

    async findById(uuid){
        try{
            const query = 'SELECT uuid,username FROM application_user WHERE uuid = $1';
            
            const values = [uuid];
            
            const {rows} = await db.query(query,values);

            const [user] = rows;

            return user;
        }catch(error){
            console.log(error);
            throw new DatabaseError("Erro na consulta por ID",error);
        }
    }

    async create(user){
        const script = 'INSERT INTO application_user (username,password) VALUES ($1, $2) RETURNING uuid';
        
        const values = [user.username,user.password];
        console.log(values)

        return await db.query(script, values).then((res) => {
            return res.rows.uuid
        }).catch((erro) => {
            throw erro
        });
    }

    async update(user){
        const script = 'UPDATE application_user SET username=$1,password=$2 WHERE uuid = $3';
    
        const values = [user.username,user.password,user.uuid];

        return db.query(script,values);
    }

    async remove(uuid){
        const script = 'DELETE FROM application_user WHERE uuid = $1';
        
        const values = [uuid];

        await db.query(script,values);
    }
}

module.exports = new UserRepository();