import React, { useState } from "react";
import axios from "axios";

const addRepo = (data) => ({
  type: "ADD",
  payload: data,
});

export default addRepo;
