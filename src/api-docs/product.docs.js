const allProducts={
    tags:['Product'],
    description:"List of All Products",
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
export const productRouteDocs={
    "/api/product/all":{
        get:allProducts
    }
}