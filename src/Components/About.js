import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  const teamMembers = [
    {
      name: 'Naruto',
      role: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Sasuke',
      role: 'CFO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Gaara',
      role: 'MD',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <Container>
      <h1>About Page</h1>

      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              {member.image && (
                //<Card.Img variant="top" src={member.image} alt={member.name} />
                <Card.Img variant="top" src={member.image} alt={member.name} style={{ width: '350px', height: '350px' }} />

              )}
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text>{member.description}</Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
