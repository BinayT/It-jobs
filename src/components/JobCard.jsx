import React, { useState } from 'react';
import { Badge, Button, Card, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

function JobCard({ job }) {
  const [open, setOpen] = useState(false);
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
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className='d-sm-none d-md-block'
            height='50'
            alt={`${job.company}'s Logo`}
            src={job.company_logo}
          />
        </div>
        <Card.Text>
          <Button
            variant='primary'
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className='mt-4'>
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
