import React from "react";
import { useParams } from "react-router-dom";
import { blog } from "../data";
import "../style/blogDetails.css";
import { ImFacebook, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { RiArrowRightLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

const BlogProtails = () => {
  const { BlogId } = useParams();
  const { id } = useParams();
  const blogDetails = blog.find((item) => {
    return item.id === parseInt(BlogId);
  });

  const {
    background,
    BlogDetailsImg1,
    paragraph1,
    paragraph2,
    heading,
    quote,
    heading2,
    designText1,
    designText2,
    designText3,
    BlogDetailsImg2,
    designText4,
    date,
  } = blogDetails;

  return (
    <>
      <div style={{ marginBottom: "200px" }}>
        <div className="blog-details-header">
          <img src={background} alt="" className="bloG-img" />

          <div className="">
            <div className="blog-details-container">
              <div className="blog-text-container">
                <Fade bottom>
                  <h1>{heading}</h1>
                </Fade>
                <br />
                <Fade bottom>
                  <img src={BlogDetailsImg2} alt="" />
                </Fade>
                <Fade bottom>
                  <div className="blog-details-date">
                    <p>{date}</p>
                    <p>Interior / Design /Home/Decore</p>
                  </div>
                  <p className="blog-paragraph1">{paragraph1}</p>
                  <br />
                  <p className="blog-paragraph2">{paragraph2}</p>
                </Fade>
                {/* Quote */}
                <Fade bottom>
                  <div className="blog-detials-quote">
                    <h3>
                      The Details are not the details. <br /> They make the
                      design
                    </h3>
                  </div>
                </Fade>
                <Fade bottom>
                  <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {heading2}{" "}
                  </h1>
                  <p>
                    <span>1</span> {designText1}
                  </p>
                  <br />
                  <p>
                    <span>2</span> {designText2}
                  </p>
                  <br />
                  <p>
                    <span>3</span> {designText3}
                  </p>
                </Fade>
                <br />
                <Fade bottom>
                  <img src={BlogDetailsImg1} alt="" />
                </Fade>
                <div className="blog-tag">
                  <Fade left>
                    <div className="blog-tag-button">
                      <h3>Tags</h3>
                      <button className="blog-kitchen">Kitchen</button>
                      <button className="blog-bedroom">Bedroom</button>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="blog-details-icon">
                      <ImFacebook className="bloG-icon" />
                      <ImTwitter className="bloG-icon" />
                      <ImLinkedin className="bloG-icon" />
                      <SiInstagram className="bloG-icon" />
                    </div>
                  </Fade>
                </div>
                <Fade bottom>
                  <div>
                    <div className="contact-blogDetails-section">
                      <div className="contact-section">
                        <div className="contact-form blog-form">
                          <div>
                            <input type="text" placeholder="Name" />
                          </div>
                          <div>
                            <input type="text" placeholder="Email" />
                          </div>
                          <div>
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div>
                            <input type="number" placeholder="Number" />
                          </div>
                          <div className="textarea">
                            <textarea
                              name=""
                              id=""
                              cols="20"
                              rows="5"
                              placeholder="Hello I'm interested in..."
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div className="checkbox-container">
                        <input type="checkbox" />
                        <label htmlFor="">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                        <br />
                        <br />
                      </div>
                      <br />
                      <div className="btn-get contact-button">
                        <button>Send Now</button>
                        <span>
                          <RiArrowRightLine className="arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              {/* container two */}
              <div className="blog-input-details-container">
                <Fade bottom>
                  <div className="search-blog-container">
                    <input type="text" placeholder="Search" />
                    <div>
                      <FiSearch />
                    </div>
                  </div>
                </Fade>
                <div className="blog-container2-text">
                  <h2>Latest News</h2>
                  <Fade bottom>
                    <div className="blog-comfort-section">
                      <h3>
                        We Focus On Comfort <br /> And Gorgeous
                      </h3>
                      <p>06/02/2023</p>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="blog-comfort-section">
                      <h3>
                        We Focus On Comfort <br /> And Gorgeous
                      </h3>
                      <p>06/02/2023</p>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="blog-comfort-section">
                      <h3>
                        We Focus On Comfort <br /> And Gorgeous
                      </h3>
                      <p>06/02/2023</p>
                    </div>
                  </Fade>
                </div>
                {/*   CONTAINER CATEGORIES SECTION */}
                <Fade bottom>
                  <div className="blog-categories-section">
                    <h2>Categories</h2>
                    <p>Decoration</p>
                    <p>Door Window</p>
                    <p>Home Land</p>
                    <p className="blog-roof">Roof installation</p>
                  </div>
                </Fade>
                {/* TAGS SECTION */}
                <Fade bottom>
                  <div className="container2-blog-tag">
                    <h2>Tags</h2>
                    <button className="bloG-button">Kitchen</button>
                    <button className="bloG-button">Bedroom</button>
                    <button className="bloG-button">Building</button>
                    <button className="bloG-button">Architecture</button>
                    <button className="bloG-button">Kitchen Planning</button>
                    <button className="bloG-button">Bedroom</button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogProtails;
