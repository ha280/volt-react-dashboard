
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CounterWidgetIP, CounterWidgetScore, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { ProgressBar } from '@themesberg/react-bootstrap';

export default () => {
  return (
    <>

      
      <Row className="mb-4 text-center gx-5" style={{backgroundColor: "white",borderRadius: "10px",padding: "10px",margin: "0 2rem",color: "#4c5680"}}>
        <Col  xl={3}>
          <h1 style={{fontSize:"1.5rem",fontWeight:"800",marginBottom:"0"}}>Patient Count</h1>
          <p style={{fontSize:"2rem",fontWeight:"800",marginBottom:"0"}}>45,594</p>
          <span>7.6% from September</span>
        </Col>
        <Col xs={12} sm={6} xl={4} className="mr-4" >
          <div className="progress-wrapper">
            <Row className="progress-info">
              <span>Clinical Risk</span>
            </Row>
            <Row>
              <ProgressBar style={{height: "20px",padding:"0"}} max="100">
                <ProgressBar  style={{backgroundColor:"midnightblue"}}  now={23.2} key={1} label={`23.2%`}/>
                <ProgressBar style={{backgroundColor:"#1e90ff"}} now={47.6} key={2} label={`47.6%`}/>
                <ProgressBar  style={{backgroundColor:"#e6e6fa "}} now={30.1} key={3} label={`30.1%`}/>
              </ProgressBar>
            </Row>
          </div>
        
        </Col>
        <Col xs={12} sm={6} xl={4} >
          <div className="progress-wrapper">
              <Row className="progress-info">
                <span>Social Risk</span>
              </Row>
              <Row>
                <ProgressBar style={{height: "20px",padding:"0"}} max="100">
                  <ProgressBar style={{backgroundColor:"midnightblue"}}  now={15} key={1} label={`15%`}/>
                  <ProgressBar style={{backgroundColor:"#1e90ff"}} now={56.7} key={2} label={`56.7`}/>
                  <ProgressBar style={{backgroundColor:"#e6e6fa "}} now={28.3} key={3} label={`28.3`}/>
                </ProgressBar>
              </Row>
            </div>
        </Col>
        <Col xl={1} style={{fontSize:"0.8rem"}}>
          <Row className="mb-2"><span className="mr-2" style={{backgroundColor:"midnightblue", borderRadius:"50%",width:"1px"}}></span> High</Row>
          <Row className="mb-2"><span className="mr-2" style={{backgroundColor:"#1e90ff", borderRadius:"50%",width:"1px"}}></span> Medium</Row>
          <Row className="mb-2"><span className="mr-2" style={{backgroundColor:"#e6e6fa", borderRadius:"50%",width:"1px"}}></span> Low</Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{color: "#4c5680"}}>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidgetScore
            category="Basys.ai Score"
            title="63.7%"
            percentage={0.1}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        
        <Col xs={12} sm={6} xl={3} className="mb-4">
          <CounterWidget
            category="30-day Readmissions"
            title="17.8%"
            percentage={8.8}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={5} className="mb-4">
          <CounterWidgetIP
            category="IP visits Per 1000"
            title="42"
            percentage={1.5}
          />
        </Col>
      </Row>
    </>
  );
};
