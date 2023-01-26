import Joi from "joi";

export const signupSchema = Joi.object({
    name:Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+$'))
        .required()
    ,
    email:Joi.string()
        .pattern(new RegExp('^[A-Z0-9+_.-]+@[A-Z0-9.-]+$'))
        .lowercase()
        .required()
    ,
    password:Joi.string()
    .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'))
    .required()
    ,
});
export default signupSchema;