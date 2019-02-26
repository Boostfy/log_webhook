// Require the framework and instantiate it
const fastify = require('fastify')({
	logger: {
		level: 'info',
		file: './logs' // will use pino.destination()
	}
 })

// Declare a route
fastify.get('/webhook', async (request, reply) => {
	const challenge = request.query['hub.challenge']
	request.log.info(request.query)
	request.log.info(request.body)
	return challenge
})

fastify.post('/webhook', async (request, reply) => {
	const challenge = request.query['hub.challenge']
	request.log.info(request.query)
	request.log.info(request.body)
	return challenge
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
