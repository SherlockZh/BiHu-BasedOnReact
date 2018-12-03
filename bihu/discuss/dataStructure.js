const users = [
	{
		"uid": 0,
		"name": "sherlock",
		"password": "123456",
		"questionIDs": [1,2,3]
	},
	{
		"uid": 1,
		"name": "gene",
		"password": "123456",
		"questionIDs": [4,5,6]
	}
];

// 创建问题，post到AllQuestions数组
const AllQuestions = [
	{
		"qid": 0,
		"quesUserID": 0,
		"title": "question title1",
		"description": "what the question is",
		"ansIDs": [1,2,3]
	},
	{
		"qid": 1,
		"quesUserID": 1,
		"title": "question title2",
		"description": "what the question is",
		"ansIDs": [4,5,6]
	},
	{
		"qid": 2,
		"quesUserID": 2,
		"title": "question title3",
		"description": "what the question is",
		"ansIDs": [7,8,9]
	}
]; 

const answers = [
	{
		"aid":0,
		"ansUserID": 1,
		"content": "this is an answer"
	},
	{
		"aid":1,
		"ansUserID": 2,
		"content": "this is two answer"
	}
]; 

const ansToQues = [4,5,6];
qid = ansToQues[1]
AllQuestions[qid].qid;