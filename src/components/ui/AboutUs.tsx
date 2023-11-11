import { Collapse } from "antd";
import React from "react";
import AboutDescription from "./AboutDescription";

export default function AboutUs() {
  return (
    <div style={{}}>
      <Collapse
        size="large"
        items={[
          {
            key: "1",
            label: <h1 style={{ textAlign: "center" }}>About Us</h1>,
            showArrow: false,
            children: (
              <p>
                <AboutDescription></AboutDescription>
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}
