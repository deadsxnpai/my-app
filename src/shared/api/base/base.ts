/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  from,
} from '@apollo/client'
import { getMainDefinition, } from '@apollo/client/utilities'
import { GraphQLWsLink, } from '@apollo/client/link/subscriptions'
import { createClient, } from 'graphql-ws'
import { onError, } from '@apollo/client/link/error'
import { RetryLink, } from '@apollo/client/link/retry'
import { EndPoints, } from '@/shared/constants/endpoints'
import { useNavigate, } from 'react-router-dom'


const httpLink = new HttpLink({
  uri: `${ EndPoints.api }/graphql`,
  credentials: 'include',
})

const wsLink = new GraphQLWsLink(createClient({
  url: `${ EndPoints.wss }/graphql`,
  keepAlive: 10_000,
  shouldRetry (err) {
    console.log('shouldRetry', err)
    return true // err.code !== 4403;
  },

  on: {
    connected: (socket, payload) => {
      // updateBackendState(true)
    },
    ping: recv => {
      // console.log("PING !",recv);;
    },
    pong: recv => {
      console.log('PONG !', recv)
    },
    error: err => {
      // @ts-expect-error TS(2571): Object is of type 'unknown'.
      console.error('Socket err', err.code)
    },
    closed: err => {
      console.log('Socket close', err)
      // updateBackendState(false)
    },
  },
}))


const errorLink = onError(({ graphQLErrors, networkError, }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, }) => console.log(
      `[GraphQL error]: Message: ${ message }, Location: ${ locations }, Path: ${ path }`
    )
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${ networkError }`)
  }
})

const retryLink = new RetryLink({
  attempts: (count, op, err) => {
    if (err.statusCode === 401) {
      window.location.replace(EndPoints.endSession)
    }
    if ([
      'ecExportTable_EffectiveStats',
      'ecExportTable_EffectiveStats_all',
      'ecExportTable_EffectiveStats_mounthly',
    ].includes(op.operationName)) {
      return false
    }
    console.log(`###### Should retry ? ${ op.operationName }`, err?.statusCode !== 401)
    console.log(err)
    console.log(op)
    return err?.statusCode !== 401
  },
  delay: (count, op, err) => {
    console.log(`###### Retry on ${ op.operationName }`, count)
    return count * 1000 * Math.random()
  },
})

// мда

const splitLink = split(
  ({ query, }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)


export const client = new ApolloClient({
  link: from([
    errorLink,
    retryLink,
    splitLink,
  ]),
  cache: new InMemoryCache(),

})
