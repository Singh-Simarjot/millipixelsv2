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
           
       
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SectionContainer;
