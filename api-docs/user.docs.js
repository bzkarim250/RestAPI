const allUsers={
    tags:['Users'],
    description:"Get All Users",
    security:[
        {
            token:[],
        }
    ],
        responses:{
            200:{
                description:"OK",
                content:{
                    "application/json":{
                        type:'object',
                        example:{
                            status:"success",
                            data:[]
                        }
                    }
                }
            }
        }
}
const getUserByID={
    tags:['User'],
    description:"get user by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"user id",
            type:"string",
            example:"63d24ca51e652d2500753e6f",

        }
    ],
    security:[{
        token:[],
    },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}
export const userRouteDocs={
    "/api/user/all":{
        get:allUsers,
    },
    "/api/user/{id}":{
        get:getUserByID,
    }
}