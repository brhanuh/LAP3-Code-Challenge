import React from "react";
import Container from "react-bootstrap/Container";

function IndexPage() {
  return (
    <>
      <Container>
        <h1 className="mt-5">Welcome to GitClub</h1>
        <img
          width="1200px"
          src="https://www.forbes.com/advisor/wp-content/uploads/2021/04/NamedServer.jpg"
          onMouseOver={(e) => {
            e.currentTarget.src =
              "https://i0.wp.com/tvsourcemagazine.com/wp-content/uploads/2017/09/fsociety-mask.jpg?ssl=1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src =
              "https://www.forbes.com/advisor/wp-content/uploads/2021/04/NamedServer.jpg";
          }}
        ></img>
      </Container>
    </>
  );
}

export default IndexPage;
