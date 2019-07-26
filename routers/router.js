const router = require('express').Router();

module.exports = (wagner) => {
    
    const Ctrl = wagner.invoke((Mess) => 
        require('../controllers/controller')(Mess));

    

    router.get('/:email',(req,res)=>
        Ctrl.sendMessage(req,res));
    router.get('/',(req,res)=>
        Ctrl.findAll(req,res));
       
    

    return router;
}