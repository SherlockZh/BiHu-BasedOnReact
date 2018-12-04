const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = 4000;

const createUID = a();
const createQID = b();
const createAID = c();

const log = console.log;

function a() {
	let count = 2;
	return function () {
		return count++;
	};
}

function b() {
	let count = 3;
	return function () {
		return count++;
	};
}

function c() {
	let count = 4;
	return function () {
		return count++;
	};
}

const users = [
	{
		"uid": 0,
		"username": "sher",
		"password": "1",
		"questionIDs": [0]
	},
	{
		"uid": 1,
		"username": "gene",
		"password": "1",
		"questionIDs": [1]
	}
];

// 创建问题，post到AllQuestions数组
const AllQuestions = [
	{
		"qid": 0,
		"quesUserID": 0,
		"title": "Which programming language is the best?",
		"description": "I think PHP is the best language, anyone disagree?",
		"ansIDs": [0,1]
	},
	{
		"qid": 1,
		"quesUserID": 1,
		"title": "What should I prepare for interview?",
		"description": "I want to find a job. Please help me!",
		"ansIDs": [2]
	},
	{
		"qid": 2,
		"quesUserID": 1,
		"title": "I want to learn React, please give me some advice?",
		"description": "React is awesome, so I really want to learn. Any suggestion?",
		"ansIDs": [3]
	}
]; 

const answers = [
	{
		"aid":0,
		"ansUserID": 0,
		"content": "No! JavaScript is the best! "
	},
	{
		"aid":1,
		"ansUserID": 1,
		"content": "Agree!"
	},
	{
		"aid":2,
		"ansUserID": 1,
		"content": "Practice coding. Practice makes perfect. Good luck!"
	},
	{
		"aid":3,
		"ansUserID": 0,
		"content": "Please take info6250, this is the best course that I have ever taken."
	}
]; 

app.get('/questions', (req, res) => {
	res.json(AllQuestions);
});

app.get('/users', (req, res) => {
	res.json(users);
})

app.get('/answers', (req, res) => {
	res.json(answers);
})

app.post('/answer', (req, res) => {
	const {content, ansUserID, questionID} = req.body;
	const aid = createAID();
	answers.push({aid, ansUserID, content});
	for(let i = 0; i < AllQuestions.length; i++){
		if(AllQuestions[i].qid === questionID){
			AllQuestions[i].ansIDs.push(aid);
		}
	}
})


app.post('/question', (req, res) => {
	const{quesUserID, title, description} = req.body;
	const qid = createQID();
	let ansIDs = [];
	AllQuestions.push({qid, quesUserID, title, description, ansIDs});
	for(let i = 0; i < users.length; i++){
		if(users[i].uid === quesUserID){
			users[i].questionIDs.push(qid);
		}
	}
})

app.post('/signup/:username', (req, res) => {
	const {username, password, action} = req.body;
	if(action === 'signup'){
		if(!usernameOccupied({username})){
			const uid = createUID();
			const questionIDs = [];
			users.push({uid, username, password, questionIDs});
			log(`signup success: ${username}, ${password}, ${action}`);
			res.json({userID: uid, username: username})
		}
		else{
			res.status(409).end();
			log(`${username} is occupied`);
		}
	}
	else if(action === 'login'){
		const userID = verifyUserPass(username, password);
		if(userID !== null){
			log(`login success: ${username}, ${password}, ${action}`);
			res.json({userID: userID, username: username});
		}
		res.status(409).end();
	}
	else{
		res.status(409).end();
	}
});

const usernameOccupied = function({username}) {
	for(let i = 0; i < users.length; i++){
		if(users[i].username === username){
			return true;
		}
	}
	return false;
}

const verifyUserPass = function (username, password) {
  for(let i = 0; i < users.length; i++){
		if(users[i].username === username && users[i].password === password){
			return users[i].uid;
		}
	}
	return null;
}

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));