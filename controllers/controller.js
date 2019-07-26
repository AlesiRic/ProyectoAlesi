const http = require('http');
const path = require('path');
const status=require('http-status');

let _mess;

const findAll=(req,res)=>{
    _mess.find()
    .then((data)=>{
        if(data.length==0){
            res.status(status.NO_CONTENT);
            res.json({msg:"No se encontraron personajes"});
        }else{
            res.status(status.OK);
            res.json({msg:"Éxito!!",data:data});
        }
    })
    .catch((err)=>{

    });
}

const sendMessage=(req,res)=>{
    const {email}=req.params;
    _mess.find()
    .then((data)=>{
        if(data.length==0){
            res.status(status.NO_CONTENT);
            res.json({msg:"No se encontraron personajes"});
        }else{

            const sendmail = require("../email/sendmail");
            const env = {
                to: email,
                subject: "Confirmacion",
                text: `Confirmar usuario`,
                html: `<p style="text-align: center;"><span style="color: #0000ff;"><strong>Welcome to the Fiction encyclopedia</strong></span></p>
                <p style="text-align: center;">&nbsp;</p>
                <p style="text-align: center;">&nbsp;You can learn about your favorite characters here!!!</p>
                ${data}
                `
            }
            sendmail.send(env);

            res.status(status.OK);
            res.json({msg:"Éxito!!",data:data});
        }
    })
    .catch((err)=>{

    });
}





module.exports = (Mess) => {
    _mess = Mess;
    return({
        findAll,
        sendMessage
    });
}