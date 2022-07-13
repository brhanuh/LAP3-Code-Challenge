import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import addRepo from "../../actions";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [submitUsername, setSubmitUsername] = useState("");
  const [data, setData] = useState([]);

  const result = useSelector((state) => console.log(state));

  function handleInput(e) {
    setUsername(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitUsername(username);
  }

  const search = () => {
    dispatch(submitUsername);
  };
  useEffect(() => {
    async function fetchData(name) {
      try {
        const result = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        console.log(result.data);
        setData(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    dispatch(addRepo(data));
    fetchData(submitUsername);
  }, [submitUsername]);

  return (
    <>
      <Container className="pt-5">
        <Row>
          <h1 className="pb-3">Find your repos</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleInput}
              placeholder=" Github username"
              className="mb-3 p-2"
            ></input>
            <Button variant="dark" className="ms-2 p-2 pe-3 ps-3">
              Search
            </Button>
          </form>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  {data.map((el, index) => (
                    <ListGroup.Item
                      key={index}
                      onClick={() =>
                        navigate(`/search/${submitUsername}/${el.name}`)
                      }
                    >
                      <Nav.Link>{el.name}</Nav.Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div className="mt-15">
              <img
                className="rounded-3"
                height="400px"
                src="https://github.githubassets.com/images/modules/site/social-cards/github-social.png"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchPage;
