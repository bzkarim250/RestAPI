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
    password:"12345Aa@"
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
        .post('/api/user/signup')
        .send(user)
        .end((error, res) => {
          chai.expect(res).to.have.status(201);
          chai.expect(res.body.data).to.be.a('object');
          done();
        });
    });
    it('it should return all users',(done)=>{
        chai
        .request(server)
        .get('/api/user/all')
        .end((error,res)=>{
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.data).to.be.a('array');
            done();
        });
    });
    it('it shoulld return user by id',(done)=>{
        chai
        .request(server)
        .get('/api/user/63d24ca51e652d2500753e6f')
        .end((error,res)=>{
            chai.expect(res).to.hava.status(200);
            chai.expect(res.body.data).to.be.a('array');
            done();
        })
    })
});
