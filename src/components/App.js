import React, { useContext, useState } from "react";
import "./App.css";
import { state } from "../store/reducer.js";
import axios from "axios";

const App = () => {
  const globalState = useContext(state);
  const [nameInputVal, setNameInputVal] = useState("");
  const [surnameInputVal, setSurnameInputVal] = useState("");
  const [ageInputVal, setAgeInputVal] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const { dispatch } = globalState;

  const openNewEmployeeForm = () => {
    dispatch({ type: "openForm" });
  };

  const postToServer = async (postData) => {
    const { data } = await axios.post(`http://localhost:8055/employee/add`, {
      employeeData: postData,
    });
    console.log(data);
  };

  const setName = (e) => {
    setNameInputVal(e.target.value);
    if (
      nameInputVal.indexOf(
        [
          ":",
          ";",
          ",",
          ".",
          "@",
          "!",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "(",
          ")",
        ] !== -1
      ) &&
      e.target.value.length > 1
    ) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const setSurname = (e) => {
    setSurnameInputVal(e.target.value);
    if (
      surnameInputVal.indexOf(
        [
          ":",
          ";",
          ",",
          ".",
          "@",
          "!",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "(",
          ")",
        ] !== -1
      ) &&
      e.target.value.length > 1
    ) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const setAge = (e) => {
    setAgeInputVal(e.target.value);
    if (
      ageInputVal.indexOf(
        [
          ":",
          ";",
          ",",
          ".",
          "@",
          "!",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "(",
          ")",
        ] !== -1
      ) &&
      e.target.value.length > 1
    ) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const sendDataToPost = (e) => {
    if (e.code !== "Enter" || !isInputValid) return;
    postToServer(
      {
        name: nameInputVal,
        surname: surnameInputVal,
        age: ageInputVal,
      },
      `http://localhost:8000/employee/add`
    );
  };

  return (
    <>
      <button onClick={openNewEmployeeForm}>Insert Employee</button>
      <div>
        {globalState.state.isFormOpen && (
          <form>
            <input
              placeholder="Name"
              value={nameInputVal}
              onChange={(e) => setName(e)}
            ></input>
            <input
              placeholder="Surname"
              value={surnameInputVal}
              onChange={(e) => setSurname(e)}
            ></input>
            <input
              placeholder="Age"
              value={ageInputVal}
              onChange={(e) => setAge(e)}
              onKeyDown={(e) => sendDataToPost(e)}
            ></input>
          </form>
        )}
      </div>
    </>
  );
};

export default App;
