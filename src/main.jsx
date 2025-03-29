import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "./app/store.js";
import {ApolloProvider} from "@apollo/client";
import client from "./apolloClient.js";
import {ProductQueryProvider} from "./store/ProductQueryProvider.jsx";
import {DeviceCheckedProvider} from "./store/DeviceCheckedProvider.jsx";
import {UserCartProvider} from "./store/UserCartProvider.jsx";
import {OrderInformationProvider} from "./store/OrderInformationProvider.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <DeviceCheckedProvider>
                    <ProductQueryProvider>
                        <UserCartProvider>
                            <OrderInformationProvider>
                                <App />
                            </OrderInformationProvider>
                        </UserCartProvider>
                    </ProductQueryProvider>
                </DeviceCheckedProvider>
            </Provider>,
        </ApolloProvider>
    </BrowserRouter>
)
