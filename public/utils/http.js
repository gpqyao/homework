axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
)

axios.interceptors.request.use(
  config => {
    config.baseURL = 'http://localhost:9000'
    config.timeout = 10000
    return config
  },
  err => Promise.reject(err)
)
const get = url => axios.get(url)

const post = (url, data = {}) => axios.post(url, data)
const put = (url, data = {}) => axios.put(url, data)
const del = url => axios.delete(url)
