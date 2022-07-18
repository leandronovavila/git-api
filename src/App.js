import React from "react";
import Layout from "./Components/layout";
import NoSearch from "./Components/no-search";
import Profile from "./Components/profile";
import Repositories from "./Components/repositories";
import useGithub from "./Hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;