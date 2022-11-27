import styled from "styled-components";
import { COLORS } from "../Style/Constant";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  /* width: 100vw; */
  color: white;
  text-align: center;

  .scroll-bar {
    padding: 0px 10px 10px 10px;
    height: 40rem;
    width: 20rem;
    overflow-y: scroll;
    margin: 0;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;

    .scroll-bar {
      height: 30rem;
    }

    .container-margin {
      margin-bottom: 5rem;
    }
  }

  .list-group {
    background: ${COLORS.bgColor3};
    padding: 10px;
    margin: 4px;
    color: black;
  }

  .list-group:nth-child(2n) {
    background: ${COLORS.bgColor4};
  }

  .list-empty {
    width: 100%;
    padding: 10px;
    height: 50px;
    margin: 4px;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  border: none;
  color: black;
  font-size: ${(props) => (props.addButton ? "2em" : "1em")};
  cursor: pointer;
  margin: 0;
  padding: ${(props) => (props.padding5 ? "5px" : "0")};
  background: ${(props) => (props.background ? "white" : "none")};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => (props.center ? "center" : "start")};
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  margin-right: ${(props) => (props.marginRight ? "4rem" : "")};
  margin: ${(props) => (props.margin ? "0 105px 0 111px" : "")};
  margin-top: ${(props) => (props.marginTop ? "30px" : "")};
  padding: ${(props) => (props.padding ? "20px" : "")};
  text-align: center;
  gap: ${(props) => (props.gap20 ? "20px" : "")};
  gap: ${(props) => (props.gap10 ? "10px" : "")};

  .list-group-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .list-group-details:first-child:after {
    content: "kcal";
    color: ${COLORS.accentColor};
  }
  .list-group-details:nth-child(4) {
    color: ${COLORS.accentColor};
  }
  .list-group-details:nth-child(2) {
    color: ${COLORS.accentColor2};
  }
  .list-group-details:nth-child(3) {
    color: ${COLORS.accentColor3};
  }
`;

// AddItems.js
export const AddContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.3); */

  body {
    overflow-y: hidden;
  }

  .add-panel {
    background: #496684;
    padding: 20px;
    color: white;
    height: 23em;
    margin-top: 10em;
    border-radius: 20px;

    button {
      float: right;
    }

    h2 {
      margin-top: 30px;
    }
  }
`;

export const InputContainer = styled.div`
  text-align: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    padding: 5px;

    p {
      padding: 0;
      margin: 0;
    }
  }

  input {
    border: none;
    outline: none;
    padding: 5px;
    font-size: 16px;
  }
  label:first-child {
    input {
      width: 120px;
      /* margin-right: 15px; */
    }
  }

  label:nth-child(n + 2) {
    input {
      width: 50px;
      margin-right: 5px;
    }
  }
  label:nth-child(3) {
    input {
      width: 30px;
    }
  }
`;
