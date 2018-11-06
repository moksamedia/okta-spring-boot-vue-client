
import axios from 'axios'

const SERVER_URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
});

export default {
  getAll: () => instance.get('todos', {
    transformResponse: [function (data) {
      return data? JSON.parse(data)._embedded.todos : data;
    }]
  }),
  getForId: (id) => instance.get('todos/'+id, {
    transformResponse: [function (data) {
      return data ? JSON.parse(data) : data;
    }]
  }),
  removeForId: (id) => instance.delete('todos/'+id),
  updateForId: (id, text, completed) => instance.put('todos/'+id, {title: text, completed: completed}, {
    transformResponse: [function (data) {
      return data ? JSON.parse(data) : data;
    }]
  }),
  createNew: (text, completed) => instance.post('todos', {title: text, completed: completed})
}

