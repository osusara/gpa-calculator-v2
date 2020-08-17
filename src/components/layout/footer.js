
import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="p-3">
      <Row>
        <Col md={4}>
          <h4>Column 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            molestias id ducimus ab consequuntur, perspiciatis amet consequatur
            eum atque repellendus exercitationem iusto porro architecto
            doloribus cumque sunt perferendis necessitatibus quos?
          </p>
        </Col>
        <Col md={4}>
          <h4>Column 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            molestias id ducimus ab consequuntur, perspiciatis amet consequatur
            eum atque repellendus exercitationem iusto porro architecto
            doloribus cumque sunt perferendis necessitatibus quos?
          </p>
        </Col>
        <Col md={4}>
          <h4>Column 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            molestias id ducimus ab consequuntur, perspiciatis amet consequatur
            eum atque repellendus exercitationem iusto porro architecto
            doloribus cumque sunt perferendis necessitatibus quos?
          </p>
        </Col>
      </Row>
      <hr className="bg-light" />
      <div className="text-center">
        <label>Made with ❤ by CIS</label>
      </div>
    </div>
  );
};

export default Footer;