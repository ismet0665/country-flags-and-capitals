import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import CardFlags from "./CardFlags";
// https://react-bootstrap.github.io/forms/form-control/  search input için. react-bootstrap da input = <Form.Control>

const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        placeholder="Search Country..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)} // onChange={(e) => console.log(e.target.value);
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((item) => (
              <Col md={6} lg={4} xl={3} key={item.id}>
                <CardFlags {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
