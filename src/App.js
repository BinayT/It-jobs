import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import useFetchJobs from './hooks/useFetchJobs';
import JobCard from './components/JobCard';
import JobPagination from './components/JobPagination';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>IT Jobs - Powered By Github</h1>
      <JobPagination page={page} setPage={setPage} hasNextPage={true} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <JobPagination page={page} setPage={setPage} hasNextPage={true} />
    </Container>
  );
}

export default App;
