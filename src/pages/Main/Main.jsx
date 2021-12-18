import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import dataOperations from "../../redux/operations/dataOperations";
import "./main.scss";

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataOperations.getData());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const posts = useSelector((state) => state.posts);

  return (
    <div className="container">
      <ul className="content-list">
        {posts.map((el, i) => {
          return (
            <li key={i} className="content-item">
              <div className="article-container">
                <div>
                  <span className="article-title">{el.title}</span>
                  <span className="article-author">{el.author}</span>
                </div>
                <p>{el.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
