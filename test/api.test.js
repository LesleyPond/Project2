const chai = require('chai');
const chaihttp = require('chai-http');
const server = require('../app');
const db = require('../models');
const { createUser } = require('./testUtils')
const expect = chai.expect;

chai.use(chaihttp);

let request;

describe('GET /votes/:sessionID', function() {

  before(async function() {
    request = chai.request(server);
    await db.sequelize.sync({force: true});
    await db.sequelize.query('set foreign_key_checks = 0')
    await db.User.create({ email_address: 'whatever@whateverdude.com', password: 'ok' })
  });

  it('should show vote options for poll with specific session ID', function() {
    return new Promise((resolve, reject) => {
      db.Poll.bulkCreate([
        { question: 'Who you is?',
          option1: 'cheese',
          option2: 'grapes',
          sessionID: 123454,
          UserId: 1,
        },
        { question: 'What it do?',
          option1: 'beef',
          option2: 'hotdog',
          sessionID: 54321,
          UserId: 1,
        }
      ]).then(() => {
        request.get(`/votes/${54321}`).end((err, res) => {
          
  
          expect(res.status).to.equal(200);
  
          resolve('Done')
          
        })
      })
    })
    

   
  });
});
