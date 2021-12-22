const Router = require('express').Router;
const StatusCodes = require('http-status-codes');

const statusRoute = Router();

statusRoute.get('/stats',(req , res, next)=>{
    res.sendStatus(StatusCodes.OK);
});

module.exports = statusRoute;