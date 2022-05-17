    //load registration page
exports.getRegistration =(req, res, next)=>{
    res.render('./registration/registration');
}

    //form submission handler
exports.postRegistration =(req, res, next)=>{
    const data = [req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5];
    console.log(data);
}