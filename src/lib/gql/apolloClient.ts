import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
  type DefaultOptions,
} from "@apollo/client/core/index.js";
import { onError } from "@apollo/client/link/error";
import cfg from "@/config/config";

const SANITY_ENDPOINT = `https://${cfg.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/production/default`;

const sanityHttpLink = (fetchFn: typeof fetch) => {
  return createHttpLink({
    uri: SANITY_ENDPOINT,
    fetch: fetchFn,
  });
};

const errorLink = onError(({ graphQLErrors, networkError, operation }: any) => {
  let opMsg = "";
  if (operation) {
    opMsg = `operation.name: '${operation?.operationName}'`;
    let variablesMsg = "";
    for (const key in operation.variables) {
      variablesMsg = `${variablesMsg} ${key}: ${operation.variables[key]},`;
    }
    opMsg = `${opMsg}, operation.vars:'${variablesMsg}'`;
  }

  if (graphQLErrors && graphQLErrors.length > 0) {
    graphQLErrors.forEach(({ message, locations, path }: any) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}. ${opMsg} `,
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}. ${opMsg}`);
  }
});

/**
 * Apollo client configuration for SSR.
 * Disabling apollo cache for SSR requests.
 */
const ssrOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
};

const createApolloClient = (fetchFn: typeof fetch) => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, sanityHttpLink(fetchFn)]),
    cache: new InMemoryCache(),
    defaultOptions: ssrOptions,
  });
};

export default createApolloClient;
