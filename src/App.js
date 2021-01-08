import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import useFetchJobs from './hooks/useFetchJobs';
import JobCard from './components/JobCard';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Container>
  );
}

export default App;
