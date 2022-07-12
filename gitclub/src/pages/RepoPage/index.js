import React from "react";
import { useNavigate } from "react-router-dom";

function RepoPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Repo Page</h1>

        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default RepoPage;
