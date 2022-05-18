const s3Mod = require('./s3');

    //load registration page
function getRegistration(req, res, next){
    res.render('./registration/registration');
}

    //form submission handler
function postRegistration(req, res, next){
    const data = [req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5];
    console.log(data);
    new Promise(async(resolve, reject)=>{
    const fileLink= await s3Mod.UploadToS3(req.UniqefileName);
    // console.log(fileLink);
    resolve(fileLink);
    }).then((fileLink)=>{
        console.log(fileLink);
        res.send("sucessfull");
    })


}
module.exports = {getRegistration, postRegistration}