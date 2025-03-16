import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./app/store.js";
import {ApolloProvider} from "@apollo/client";
import client from "./apolloClient.js";
import {ProductQueryProvider} from "./store/ProductQueryProvider.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ProductQueryProvider>
                    <App />
                </ProductQueryProvider>
            </Provider>,
        </ApolloProvider>
    </BrowserRouter>
)
