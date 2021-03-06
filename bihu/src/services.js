export const sendUserPass = (
	username, password, action
) => {
	return fetch(`/signup/${username}`, {
		method: 'POST',
		body: JSON.stringify({username, password, action}),
		headers: new Headers({
			'content-type': 'application/json'
		})
	})
	.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject('fetch-error !!!');
		}
	});
};

export const sendAnswerInfo = (
	content, ansUserID, questionID
) => {
	return fetch(`/answer`, {
		method: 'POST',
		body: JSON.stringify({content, ansUserID, questionID}),
		headers: new Headers({
			'content-type': 'application/json'
		})
	})
	.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject('fetch-error !!!');
		}
	});
};


export const sendQuestionInfo = (
	quesUserID, title, description
) => {
	return fetch(`/question`, {
		method: 'POST',
		body: JSON.stringify({quesUserID,title, description}),
		headers: new Headers({
			'content-type': 'application/json'
		})
	})
	.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject('fetch-error !!!');
		}
	});
};

export const getQuestions = () => {
  return fetch(`/questions`, {
    method: 'GET'
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

export const getUsers = () => {
  return fetch(`/users`, {
    method: 'GET'
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

export const getAnswers = () => {
  return fetch(`/answers`, {
    method: 'GET'
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

