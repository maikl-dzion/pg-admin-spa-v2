
class HttpService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }
  async send(url, method = 'get', data = null) {
    const apiUrl = this.apiUrl + url
    let response = await fetch(apiUrl)
    if (response.ok) {
      const result = await response.json()
      return result.data
    }
    alert('Ошибка HTTP: ' + response.status)
  }
}

const http = new HttpService(apiUrl);

const user = {

  state: {
    userId : 0,
    user   : {},
    users  : [],
    userFiles : [],
    errors : [],
  },

  mutations: {
  },

  actions: {
  },

  getters: {
  },
};

export default user;
