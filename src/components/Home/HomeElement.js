import styled from "styled-components";

export const HomePage = styled.div`
  background-color: grey;
  overflow: hidden;
`;

export const LeftPanel = styled.div`
  float: left;
  padding-top: 10px;
  width: 25%;
  background: red;
`;

export const MiddlePanel = styled.div`
  float: left;
  width: 50%;
  background: green;
`;

export const RightPanel = styled.div`
  float: right;
  padding-top: 10px;
  width: 25%;
  background: blue;
  overflow: auto;
`;
