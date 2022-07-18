import React from "react";
import App from "./App";
import {ResetCSS} from "./Global/reset-css";
import GithubProvider from "./Providers/github-provider";

const Provider = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS/>
                <App/>
            </GithubProvider>
        </main>
    );
};

export default Provider;