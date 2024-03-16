import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <Container fluid>
        <Row>
          <Col>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 6.343a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zM9 15V9a2 2 0 012-2h4a2 2 0 012 2v6m-6-6v6"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.794C21 17.375 17.522 21 12 21s-9-3.625-9-8.206c0-4.108 3.04-7.496 6.942-8.135a1 1 0 011.117.854V5a1 1 0 001 1h.094a9.473 9.473 0 017.809 0H18a1 1 0 001-1V5a1 1 0 011-1c.466 0 .933.1 1.356.294C19.603 5.505 21 7.281 21 9.4v3.394a1 1 0 01-1 1h-2.944a6.287 6.287 0 002.945-4.394V9.4c0-2.12-.397-3.896-1.056-5.106a1 1 0 011.356-.292A1 1 0 0123 5v2.854a1 1 0 01-1.117.854c-3.902.639-6.942 4.027-6.942 8.135z"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
