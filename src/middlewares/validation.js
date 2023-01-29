export const validate=(schema)=>{
    return(req,res,next)=>{
    const { error } = schema.validate(req.body);
    if(error){
        const errors=error.details[0].message.split('\"');
        return res.status(404).json({status:"errors",message:errors[1]+errors[2]});
    }
    next();
}
}
