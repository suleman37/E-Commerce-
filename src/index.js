import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/shopcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-icsjx3gm7o2r0qm2.us.auth0.com"
    clientId="pgbpTOWLfORrXTJowRiRg1lm9G2EO7u4"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Auth0Provider>
);
