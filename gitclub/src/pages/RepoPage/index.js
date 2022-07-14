import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function RepoPage() {
  const { username } = useParams();
  const { repo } = useParams();
  const [data, setData] = useState([{ name: "", owner: { avatar_url: "" } }]);
  useEffect(() => {
    async function fetchData(name) {
      try {
        const result = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        const repoData = await result.data;
        setData(repoData.filter((el) => el.name === repo));
      } catch (err) {
        console.error(err);
      }
    }
    fetchData(username);
  }, [username]);

  console.log("data", data);

  const navigate = useNavigate();
  return (
    <>
      <Container className="pt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data[0].owner.avatar_url} />
          <Card.Body>
            <Card.Title>{data[0].name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Stargazers: {data[0].stargazers_count}
            </ListGroup.Item>
            <ListGroup.Item>Watchers: {data[0].watchers}</ListGroup.Item>
            <ListGroup.Item>Open Issues: {data[0].open_issues}</ListGroup.Item>
            <ListGroup.Item>Forks Count: {data[0].forks_count}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link onClick={() => navigate(-1)}>Back</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default RepoPage;
