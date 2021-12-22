const Router = require('express').Router;
const StatusCodes = require('http-status-codes');
const userRepository = require('../repositories/usersRepository')

const usersRoute = Router();

usersRoute.get('/users', async (req,res,next)=>{
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req, res, next)=>{
    try{
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send(user);
    } catch (error){
        console.log(error);
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

usersRoute.post('/users', async (req ,res ,next )=>{
    const newUser = req.body;
    
    try{
        const uuid = await userRepository.create(newUser);
        res.send({uuid:uuid});
    }catch(erro){
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
});

usersRoute.put('/users/:uuid',async (req, res, next)=>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);

    res.sendStatus(StatusCodes.CREATED).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', async(req ,res, next)=>{
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

module.exports = usersRoute;