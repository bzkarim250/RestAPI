import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';

import User from '../model/User';
import server from '../index';

dotenv.config();

chai.should();
chai.use(chaiHttp);

const user={
    name:"bzkarim",
    email:"bzkarim@gmail.com",
    password:"Aa@12345",
    age:80
};
const login={
    email:"bzkarim@gmail.com",
    password:"1Aa@12345"
}

const update={
    name:"bz250",
    email:"bzkarim@gmail.com",
    password:"12345"
}
let token;
let id;

describe('users',()=>{
    beforeEach((done)=>{
        User.deleteMany({},(error)=>{
            done();
        })
    })
});

describe('users endpoints', () => {
    it('it should create user', (done) => {
      chai
        .request(server)
        .post('/api/auth/signup')
        .send(user)
        .end((error, res) => {
          chai.expect(res).to.have.status(201);
          chai.expect(res.body.data).to.be.a('object');
          done();
        });
    });
});