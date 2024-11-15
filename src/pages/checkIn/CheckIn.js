import "./CheckIn.css";
import avatar from "../../img/avatar.png";
import {
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { useState } from "react";

export default function Check_in() {
  const [activeTab, setActiveTab] = useState();
  const toggleTab = (TabId) => {
    setActiveTab(TabId);
  };
  const [activeNav, setActiveNav] = useState();
  const handleNavChange = (navId) => {
    setActiveNav(navId);
  };
  return (
    <>
      <div className="check-in">
        <aside className="left-check">
          <div className="user-check">
            <div className="avatar-check">
              <img src={avatar}></img>
            </div>
            <div className="user-info">
              <p>Thomas Eddison</p>
              <p className="uid">
                UID: <span>123456789</span>
              </p>
            </div>
          </div>
          <div className="info-check">
            <Row>
              <Col xs="12" sm="12" md="12">
                <Nav tabs vertical pills>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => toggleTab("1")}
                    >
                      Tab1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => toggleTab("2")}
                    >
                      Moar Tabs
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </div>
        </aside>
        <div className="right-check">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Nav fill pills>
                <NavItem>
                  <NavLink
                    href="#"
                    active={activeNav === 1}
                    onClick={() => handleNavChange(1)}
                  >
                    Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    active={activeNav === 2}
                    onClick={() => handleNavChange(2)}
                  >
                    Much Longer Nav Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    active={activeNav === 3}
                    onClick={() => handleNavChange(3)}
                  >
                    Another Link
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    active={activeNav === 4}
                    onClick={() => handleNavChange(4)}
                  >
                    Link
                  </NavLink>
                </NavItem>
              </Nav>
            </TabPane>
            <TabPane tabId="2">
              <h4>Tab 2 Contents</h4>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </>
  );
}
