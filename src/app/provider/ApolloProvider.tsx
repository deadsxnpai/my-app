import React from 'react'
import { client } from '@/shared/api/base/base'
import { ApolloProvider, } from '@apollo/client'

export const ApolloClient = ({
  children,
}: any) => {
  return (
    <ApolloProvider client={ client }>
      { children }
    </ApolloProvider>
  )
}
