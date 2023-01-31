import Joi from "joi";

export const signupSchema = Joi.object().keys({
    name:Joi.string().min(4).required().label("name"),
    email:Joi.string().lowercase().required().label('email'),
    password:Joi.string().min(8).required().label('password'),
    age: Joi.number().min(18).max(100).required().label('age')
});