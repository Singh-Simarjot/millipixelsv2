import { Container, Row, Col } from "react-bootstrap";
import PostCard from "./postCard";

const SectionContainer = ({ data }) => {
  return (
    <div id="01">
      <Row className="row no-gutters">
        <Col sm="7">
          <div className="sticky-post" style={{ background: data.theme }}>
            <div className="post-content">
              <div className="img-caption">
                <h6>{data.title}</h6>
                <h3>{data.desc}</h3>
                <span className="author "> {data.author} </span>
              </div>
            </div>
            <ul className="slidePagination">
              <li className="active">
                <span>01</span> Healthcare{" "}
              </li>
              <li>
                <a href="#02">
                  <span>02</span>
                </a>{" "}
              </li>
              <li>
                <a href="#03">
                  <span>03</span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </Col>
        <Col sm="5" className="col-sm-5">
          <div className="row no-gutters postsList">
            {data.childPosts.map(item => (
              <PostCard data = {item} />
            ))}
            <div className="col-md-6">
              <div className="singlePostItm singlePostItmMob">
                <a href="http://localhost/vouge/one-roze-2/">
                  <div className="singlePostItmImg">
                    <img
                      src="http://localhost/vouge/wp-content/uploads/2019/11/Featured110-768x768.jpg"
                      alt="renPost1"
                    />
                  </div>
                  <div className="singlePostItmTxt">
                    <span className="postTag">CULTURE &amp; LIVING</span>
                    <h3>One Roze</h3>
                    <span className="postBy">BY admin</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="singlePostItm singlePostItmMob">
                <a href="http://localhost/vouge/shreeya-somaiya/">
                  <div className="singlePostItmImg">
                    <img
                      src="http://localhost/vouge/wp-content/uploads/2019/11/Shreeya-Somaiya-ED-768x768.jpg"
                      alt="renPost1"
                    />
                  </div>
                  <div className="singlePostItmTxt">
                    <span className="postTag">CULTURE &amp; LIVING</span>
                    <h3>Shreeya Somaiya</h3>
                    <span className="postBy">BY admin</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="singlePostItm singlePostItmMob">
                <a href="http://localhost/vouge/schon-by-sakshee-pradhan/">
                  <div className="singlePostItmImg">
                    <img
                      src="http://localhost/vouge/wp-content/uploads/2019/11/schon-designer-image1-768x768.jpg"
                      alt="renPost1"
                    />
                  </div>
                  <div className="singlePostItmTxt">
                    <span className="postTag">CULTURE &amp; LIVING</span>
                    <h3>Schön by Sakshee Pradhan</h3>
                    <span className="postBy">BY admin</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="singlePostItm singlePostItmMob">
                <a href="http://localhost/vouge/one-roze/">
                  <div className="singlePostItmImg">
                    <img
                      src="http://localhost/vouge/wp-content/uploads/2019/11/Featured110-768x768.jpg"
                      alt="renPost1"
                    />
                  </div>
                  <div className="singlePostItmTxt">
                    <span className="postTag">CULTURE &amp; LIVING</span>
                    <h3>One Roze</h3>
                    <span className="postBy">BY admin</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="singlePostItm singlePostItmMob">
                <a href="http://localhost/vouge/7th-avenue-jewellery/">
                  <div className="singlePostItmImg">
                    <img
                      src="http://localhost/vouge/wp-content/uploads/2019/11/IMG_3290-768x768.jpg"
                      alt="renPost1"
                    />
                  </div>
                  <div className="singlePostItmTxt">
                    <span className="postTag">CULTURE &amp; LIVING</span>
                    <h3>7th Avenue Jewellery</h3>
                    <span className="postBy">BY admin</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SectionContainer;
