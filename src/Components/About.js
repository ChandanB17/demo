import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  const teamMembers = [
    {
      name: 'Naruto',
      role: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2022%2F08%2F53e15-16596004347246.png%3Fw%3D840&tbnid=kWVsVVfqP_aULM&vet=12ahUKEwjrvOa-oK6AAxVQgv0HHWIqAnoQMygGegUIARD8AQ..i&imgrefurl=https%3A%2F%2Fwiki.sportskeeda.com%2Fnaruto%2Fnaruto-uzumaki&docid=Xi5cUqTYzP1rWM&w=840&h=471&q=naruto&ved=2ahUKEwjrvOa-oK6AAxVQgv0HHWIqAnoQMygGegUIARD8AQ'
    },
    {
      name: 'Sasuke',
      role: 'CFO',
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
