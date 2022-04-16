import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/user', () => [
      'teste'
    ])

    this.post('/user', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      data.id = Math.floor(Math.random()*100)
      return {data}
    })
  }
})