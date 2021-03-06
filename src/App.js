import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import useFetchJobs from './hooks/useFetchJobs';
import JobCard from './components/JobCard';
import JobPagination from './components/JobPagination';
import SearchForm from './components/SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((params) => {
      return { ...params, [param]: value };
    });
  }

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>IT Jobs - Powered By Github</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
