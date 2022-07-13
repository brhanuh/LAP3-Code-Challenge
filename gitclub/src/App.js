import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { IndexPage, RepoPage, SearchPage } from "./pages";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="search">
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path=":username/:repo" element={<RepoPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
