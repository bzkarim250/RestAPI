import Joi from "joi";

export const signupSchema = Joi.object({
    name:Joi.string()
        .pattern(new RegExp('^[a-zA-Z]+(?:[- ]?[a-zA-Z]+)*$'))
        .required()
    ,
    email:Joi.string()
        .pattern(new RegExp('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}$'))
        .lowercase()
        .required()
    ,
    password:Joi.string()
    .pattern(new RegExp('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})'))
    .required()
    ,
});
export default signupSchema;