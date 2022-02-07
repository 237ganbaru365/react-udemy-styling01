import React from "react";

//任意の名前をつけて、cssファイルをオブジェクトとして扱う
import styles from "./Button.module.css";

// import styled from "styled-components";

//attacked tempate literal
//this is not a specific syntax for react, and just basic Javascript syntax
//styled. の後ろはhtmlタグが入る
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    //stylesという任意の名前をつけたオブジェクトの中のbutton（cssファイルの中身）を呼び出し
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
