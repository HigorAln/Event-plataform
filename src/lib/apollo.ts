import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl72hzxn12zjx01t83rz86w8q/master",
  cache: new InMemoryCache(),
})