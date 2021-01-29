import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";
import '../style/components/customer/Feedback.css';
import supportAvatar from '../style/images/icons/support-avatar.png';
import companyAvatar from '../style/images/icons/company-logo.png';

class Feedback extends Component {
    render() {
        const sideBarItems = setUpSideBar();

        return (

            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">
                    <h2>Связаться с администрацией</h2>
                   <Container>
                       <Row>
                           <Col>
                               <div className="container">
                                   <img src={companyAvatar}  className="avatar right" style={{width:"60px"}} alt="Avatar" />
                                       <p>Hello. How are you today?</p>
                                       <span className="time-right">11:00</span>
                               </div>

                               <div className="container darker">
                                   <img src={supportAvatar} alt="Avatar" style={{width:"60px"}} className="avatar"/>
                                       <p>Hey! I'm fine. Thanks for asking!</p>
                                       <span className="time-left">11:01</span>
                               </div>
                               <div className="container">
                                   <img src={companyAvatar}  className="avatar right" style={{width:"60px"}} alt="Avatar" />
                                       <p>Sweet! So, what do you wanna do today?</p>
                                       <span className="time-right">11:02</span>
                               </div>

                               <div className="container darker" >
                                   <img src={supportAvatar}  className="avatar " style={{width:"60px"}} alt="Avatar" />
                                       <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                                       <span className="time-left">11:05</span>
                               </div>
                           </Col>
                       </Row>
                   </Container>
                </div>
            </div>
        )
    }
}

export default Feedback



