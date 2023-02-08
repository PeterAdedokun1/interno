import React, { useState } from "react";
import Background from "../component/Background";
import background from "../images/blog-background.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { lastestPost, blog } from "../data";
import "../style/blog.css";
import Fade from "react-reveal/Fade";

import Furniture from "../component/Furniture";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Blog = () => {
  const [index, setIndex] = useState(0);
  const [post, setPost] = useState(lastestPost);
  const { id, img, text1, text2, heading, date } = post[index];

  const checkNumber = (number) => {
    if (number > post.length - 1) {
      return 0;
    }
    if (number < 0) {
      return post.length - 1;
    }
    return number;
  };
  const next = () => {
    setIndex((person) => {
      return checkNumber(person + 1);
    });
  };
  const prev = () => {
    setIndex((person) => {
      return checkNumber(person - 1);
    });
  };

  return (
    <>
      <div style={{ marginBottom: "150px" }}>
        <Background
          title="Article & News"
          info="Home / Blog"
          background={background}
        />
        {/* LASTEST POST */}
        <h1 className="lastest-title">Lastest Post</h1>
        <div className="lastest-blog-container">
          <Fade left>
            <img src={img} alt="" />
          </Fade>
          <Fade right>
            <div className="lastest-blog-text">
              <h3>{heading}</h3>
              <p>{text1}</p>
              <p> {text2}</p>
              <div className="lastest-date">
                <span>{date}</span>
                <div className="lastest-icon">
                  <div onClick={prev}>
                    <IoIosArrowBack />
                  </div>
                  <div onClick={next}>
                    <IoIosArrowForward className="lastest-forward" />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* Articles & News */}
        <h1 style={{ maxWidth: "1000px", margin: "0 auto" }}>
          Articles & News
        </h1>

        <div className="article-gird-container  ">
          {blog.map((item) => {
            return (
              <Link to={`/blog/${item.id}`} key={item.id}>
                <Furniture key={item.id} {...item} />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
