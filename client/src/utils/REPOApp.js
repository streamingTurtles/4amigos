
import axios from 'axios'
import React, { useEffect, useState } from 'react';
// import './REPOApp.css';
import REPOList from '../components/REPOList';
import REPOLoading from '../components/REPOLoading';


function REPOAppy() {
  const Loading = REPOLoading(REPOList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/streamingturtles/repos?per_page=1';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
  return (
    <div className='REPOAppy'>
      <div className='container'>
        <h1>My Repo</h1>
      </div>
      <div className='repo-container'>
        <Loading isLoading={appState.loading} repos={appState.repos} />
      </div>

    </div>
  );
}
export default REPOAppy;

