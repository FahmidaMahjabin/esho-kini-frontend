import { Card, Col, Row } from "antd";
import React from "react";

const AboutDescription = () => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col lg={12} md={12} sm={24}>
          <Card title="Trandy collections" className="aboutItem">
            <p>
              Our website showcases a curated collection of the latest and most
              popular fashion trends. From casual wear to formal attire, we have
              something for every occasion and every style.
            </p>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24}>
          <Card title="Our Story" className="aboutItem">
            <p>
              we believe that clothing should be an expression of your unique
              personality. Our journey began when a group of like-minded fashion
              enthusiasts decided to create a brand that offered a blend of
              style, affordability, and comfort. From day one, our mission has
              been to help you look and feel your best, whether you are at work,
              relaxing at home, or stepping out for a night on the town.
            </p>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24}>
          <Card title="Our Goal" className="aboutItem">
            <p>
              Quality: We are committed to delivering top-notch clothing made
              from the finest materials. Every piece we design is a testament to
              our dedication to quality. Affordability: Fashion should be for
              everyone, and that is why we strive to offer stylish clothing at
              prices that wont break the bank. Sustainability: We are conscious
              of our environmental footprint and take steps to minimize it. Our
              commitment to sustainable practices is reflected in our production
              and packaging. Customer Satisfaction: Your happiness is our
              priority. We aim to provide exceptional customer service and a
              hassle-free shopping experience.
            </p>
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24}>
          <Card title="Our values" className="aboutItem">
            <p>
              Quality: We are committed to delivering top-notch clothing made
              from the finest materials. Every piece we design is a testament to
              our dedication to quality. Affordability: Fashion should be for
              everyone, and that is why we strive to offer stylish clothing at
              prices that wont break the bank. Sustainability: We are conscious
              of our environmental footprint and take steps to minimize it. Our
              commitment to sustainable practices is reflected in our production
              and packaging. Customer Satisfaction: Your happiness is our
              priority. We aim to provide exceptional customer service and a
              hassle-free shopping experience.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutDescription;
