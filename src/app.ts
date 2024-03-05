import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error ', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // todo: here we should log to an external tool like DataDog/Sentry/NewRelic
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
