import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import addRepo from "../../actions";

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
      <div>
        <h1>Search Page</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput}></input>
          <button>Search</button>
        </form>
        <ol>
          {data.map((el, index) => (
            <li key={index} onClick={() => navigate(`/search/${el.name}`)}>
              {el.name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default SearchPage;
