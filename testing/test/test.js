import assert from "assert";
// import sum from "../sum.js";
import chai from "chai"
import { expect,should } from "chai";
import chaiHttp from 'chai-http'

import app from '../server.js'

chai.use(chaiHttp);

// chai.request(app object or url).get or post or put or del.type('form').send(json data).end((err,))


// describe("calling url with chai http",()=>{
//     it("testing get method",(done)=>{
//         chai.request(app).get('/userdata').end((err,res)=>{
//             expect(res.statusCode).to.be.equal(400);
//             console.log(res.body.msg);
//             done();
//         })
//     })
// })

describe("testing post method",()=>{
    it("testing user login method",(done)=>{
        chai.request(app).post('/userlogin').type('form').send({email:"deepak@gmail.com",pass:"test123"}).end((err,res)=>{
            expect(res.statusCode).to.be.equal(200);
            expect(res.body.msg).to.be.equal(1);
            done();
        })
    })
})




// describe("Testing web ",()=>{
//     const url = "http://localhost:8080";
//     it("testing url data ",(done)=>{
//         request(url+'/userdata'),(err,res,body)=>{
//             console.log(res.statusCode)
//             console.log(body)
//         };

//         done();
//     })
// })
