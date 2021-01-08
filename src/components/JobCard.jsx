import React from 'react';
import { Badge, Card } from 'react-bootstrap';

function JobCard({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div>
            <Card.Title>
              {job.title} -{' '}
              <span className='text-muted font-weight-light'>
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle>
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant='secondary' className='mr-2'>
              {job.type}
            </Badge>
            <Badge variant='info'>{job.location}</Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
