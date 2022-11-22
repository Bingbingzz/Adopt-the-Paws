import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";

function GridCard() {
  // TODO: read data from backend.
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("http://localhost:5000/api/tasks");
        if (!response.ok) {
          throw new Error("HTTP error! Status: ", response.status);
        }
        const data = await response.json();
        console.log(data);
        setAnimals(data);
      } catch (err) {
        console.log("Fetch data ", err);
      }
    }

    fetchData();
  }, [])

  return (
    <Row xs={1} md={2} className="g-4">

      {Array.from({ length: 4}).map((_, idx) => (
        <Col>
          <Card>
            {/* <Card.Img variant="top" src="https://media-be.chewy.com/wp-content/uploads/2015/08/18151603/when-can-kittens-be-adopted-1024x548.jpg" /> */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        
      ))}
      
    </Row>
  );
}

export default GridCard;