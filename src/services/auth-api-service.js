import config from '../config'
// import dummyUsers from '../dummyData/dummyUsers'

const AuthApiService = {
  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/authorization/login`, {
    // return fetch(dummyUsers, {
      method: `POST`,
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      // return fetch(dummyUsers, {
      method: `POST`,
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  }
}

export default AuthApiService