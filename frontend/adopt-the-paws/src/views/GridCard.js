// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from "react";



function GridCard() {
  // TODO: read data from backend.
  const [animals, setAnimals] = useState([]);

  const fetchData = async() => {
    try {
      const response = await fetch("http://localhost:5000/animals");
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

  useEffect(() => {
    fetchData();
  }, [])

  const deleteAnimal = async (docId) => {
    const response = await fetch(`http://localhost:5000/animal/${docId}`, {
      method: "DELETE"
    });

    console.log(response.body)

    if (response.ok) {
      fetchData()
    };
  }

  return (
    <Row xs={1} md={2} className="g-4">

      {Array.from(animals).map((cat, idx) => (
        <Col>
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {cat.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <div>{cat.gender} - {cat.age} years old</div>
                <div>{cat.breed}</div>
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Vancouver, BC
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small" onClick={() => deleteAnimal(cat._id)}>Delete</Button>
            </CardActions>
          </Card>
          
        </Col>
        
      ))}
      
    </Row>
  );
}

export default GridCard;