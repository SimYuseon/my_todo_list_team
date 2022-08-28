import React, { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import styled from "styled-components";
import { addComment } from "../redux/modules/todoSlice";

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonStyle = styled.button`
  border-radius: 10px;
  padding: 5px 5px;
  border: 0;
  background-color: skyblue;
  margin-right: 5px;
`;

const NameStyle = styled.p`
  font-size: 10px;
  margin: 0;
`;
const CommentStyle = styled.p`
  margin: 0;
`;

const CommendForm = () => {
  const dd = useRef(null);
  const name = useRef(null);
  const comment = useRef(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  // const showComment = () => {
  //   // setShow(!show);
  //   // if (!show) {
  //   //   return <CommentContainer />;
  //   // } else {
  //   //   none;
  //   // }
  //   dd.current.sytle.none;
  // };
  const addCommentClick = () => {
    dispatch(
      addComment({
        id: uuidv4(),
        name: name.current.value,
        comment: comment.current.value,
      })
    );
    name.current.value = "";
    comment.current.value = "";
  };
  return (
    <div>
      <p>눌러서 댓글 내리기</p>
      <div>
        <input ref={name} placeholder="이름(5자이내)"></input>
        <input
          ref={comment}
          placeholder="댓글을 입력해주세요.(100자이내)"
        ></input>
        <button onClick={addCommentClick}>추가하기</button>
        <div>
          <div>
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <CommentContainer ref={dd}>
                    <div className="inputContainer">
                      <NameStyle>{todo.name}</NameStyle>
                      <CommentStyle>{todo.comment}</CommentStyle>
                    </div>
                    <div className="btnContainer">
                      <ButtonStyle>
                        <BiPencil size="20" color="white" />
                      </ButtonStyle>
                      <ButtonStyle>
                        <BiTrash size="20" color="white" />
                      </ButtonStyle>
                    </div>
                  </CommentContainer>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommendForm;
