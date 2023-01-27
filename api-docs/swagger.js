import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import { userRouteDocs } from "./user.docs";

const options={
    definition:{
        openapi:'3.0.0',
        info:{
            version:'1.0.0',
            title:'REST API',
            description:'My rest Api project',

        },
        servers:[
            {
                url: 'http://localhost:5000',
                description:'development server'
            }
        ],
        tags:[
            {name:'User', decription:'User Routes'}
        ],
        components:{
            securitySchems:{
                token:{
                    type:'apiKey',
                    scheme:'bearer',
                    bearerFromat:'JWT',
                    name:'token',
                    in:'header'
                },
            },
        },
        paths:{...userRouteDocs},
        },
        apis:['.../routes/**/*.js']
    };

    const swaggerSpec=swaggerJSDoc(options);
    const swaggerDocs=(app)=>{
        app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
        app.get('/api-docs.json',(req,res)=>{
            res.setHeader('Content-Type','/application/json');
            res.send(swaggerSpec);
        });
    }
    export default swaggerDocs;