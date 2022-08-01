import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { SiGooglekeep } from "react-icons/si";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsViewStacked } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const iconSize = 28;

  return (
    <div>
      <Row className="bg-info py-3 align-items-center text-light">
        <Col lg={1}>
          <AiOutlineMenu size={iconSize} className="ms-2" />
          <SiGooglekeep className="ms-3" size={iconSize} />
        </Col>
        <Col lg={1} className="fs-3 pb-1">
          Keep
        </Col>
        <Col lg={7}>
          <div class="input-group">
            <input type="text" className="input-group-text rounded py-2 ps-2" placeholder="Search Note" style={{width:"100%"}}/>
          </div>
        </Col>
        <Col lg={3} className="d-flex justify-content-end gap-4 pe-4">
          <HiOutlineRefresh size={iconSize} /> <BsViewStacked size={iconSize} />
          <FiSettings size={iconSize} /> <TbGridDots size={iconSize} />
          <BiUser size={iconSize} />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
