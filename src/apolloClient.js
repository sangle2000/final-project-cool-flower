import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {api} from "./utils/constant.js";

// Backend API endpoint
const httpLink = createHttpLink({
    uri: api, // Replace with your backend URL
    cache: new InMemoryCache()
});

// Middleware to add token to headers
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("authToken");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

// Create Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
