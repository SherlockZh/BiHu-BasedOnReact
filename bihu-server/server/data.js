const users = [
	{
		"uid": 1,
		"name": "sherlock",
		"passwd": "123456",
		"questions": [1,2,3]
	},
	{
		"uid": 2,
		"name": "gene",
		"passwd": "123456",
		"questions": [4,5,6]
	}
];

const AllQuestions = [
	{
		"qid": 0,
		"title": "question title1",
		"description": "what the question is",
		"ans": [1,2,3]
	},
	{
		"qid": 1,
		"title": "question title2",
		"description": "what the question is",
		"ans": ["ans1", "ans2", "ans3"]
	},
	{
		"qid": 2,
		"title": "question title3",
		"description": "what the question is",
		"ans": ["ans1", "ans2", "ans3"]
	},
];

const answers = [
	{
		"aid":1,
		"content": "this is an answer"
	},
	{
		"aid":2,
		"content": "this is two answer"
	}
]

const ansToQues = [4,5,6];
qid = ansToQues[1]
AllQuestions[qid].qid;