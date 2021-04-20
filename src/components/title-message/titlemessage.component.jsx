import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: yellow;
    text-shadow: 2px 4px 6px darkblue;
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
    span {
      font-size: 40px;
    }
  }
`;

export default function TitleMessage() {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Sharmistha Mandal</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Fullstack Developer", "Coder", "Learner"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
}
