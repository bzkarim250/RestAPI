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

export const userRouteDocs={
    "/api/user/all":{
        get:allUsers,
    }
}