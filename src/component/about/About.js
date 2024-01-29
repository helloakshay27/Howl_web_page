import React from "react";
import "./About.css";
import { display } from "@mui/system";

const About = () => {
  return (
    <div className="aboutpage">
      <div className="left_about_container">
        <ul className="left_top_container">
          <li className="activenav">STRATEGY AND CONSULTING</li>
          <li>ONLINE MARKETING EXPERIENCES</li>
          <li>COMMERCE SOLUTIONS</li>
          <li>GROWTH MARKETING</li>
          <li>ASSET CREATION</li>
        </ul>
        <ul className="left_bottom_container">
          <li>Layer 1 - Strategic Process Steps</li>
          <li>Layer 2 - Inputs & Intel Undertaken</li>
          <li>Layer 3 - Strategic Output</li>
          <li>Layer 4 - Branding Headers</li>
          <li>Layer 5 - Branding Output</li>
        </ul>
      </div>
      <div className="right_about_container">
        <div className="conatiner_one right_graph_container">
          <p className="graphone">Consumer Research & Mapping</p>
          <p className="graphtwo">Cosnsumer IQ</p>
          <ul className="right_bottom_item bottom_left_container">
            <li>Audience Depth </li>
            <li>Interest Segregation </li>
            <li>Consumption Patterns </li>
            <li>Attention</li>
            <li>Behavior Developmental</li>
            <li>Metrics</li>
            <li>Consumer Archetype Definitions </li>
          </ul>
        </div>
        <div className="conatiner_two right_graph_container">
          <p>Customer Experience Study & Strategy</p>
          <p>Marketplace Data & Research</p>
          <ul className="right_bottom_item bottom_left_container">
            <li>Primary & Secondary Consumer Research</li>
            <li>Competition Mapping Matrix</li>
            <li>Customer Mission & Vsion </li>
            <li>Objective Planning</li>
            <li>Success Tenets Definition</li>
          </ul>
        </div>
        <div className="conatiner_three right_graph_container">
          <p>Go To Market Strategy</p>
          <p>Product Service Category Data & Research</p>
          <ul className="right_bottom_item bottom_left_container">
            <li>Product/Service Qty Growth Mapping</li>
            <li>Budget Planning</li>
            <li>Revenue Projection </li>
            <li>Pricing Decisions</li>
            <li>POS Planning</li>
            <li>Logistics Challenge Mapping</li>
            <li>Operational Outlay Decisions</li>
          </ul>
        </div>
        <div className="conatiner_four right_graph_container">
          <p></p>
          <p>Brand Idenity</p>
          <ul className="right_bottom_item bottom_right_container">
            <li>Research, Aeview & Recommendation </li>
            <li>Naming of the Brand</li>
            <li>Mood-boarding</li>
            <li>Logo Design</li>
            <li>Visual Identity</li>
            <li>Brand Guidelines</li>
            <li>Digital Asset Treatment</li>
          </ul>
        </div>
        <div className="conatiner_five right_graph_container">
          <p>Branding Framework Establishment</p>
          <p>Brand Communication</p>
          <ul className="right_bottom_item bottom_right_container">
            <li>Brand Vision </li>
            <li>Values</li>
            <li>Personality</li>
            <li>Voice</li>
            <li>Awareness</li>
            <li>Goals</li>
            <li>Tagline</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
