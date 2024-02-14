import { Table } from "react-bootstrap";
import "./userdashboard.css";
import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

function Udashboard() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="page">
      <Layout>
        <Header>
          <h1> hwkko</h1>
        </Header>
        <Layout>
            <Sider>

            </Sider>
            <Content>

            </Content>
        </Layout>
    
      </Layout>

    </div>
  );
  
}

export default Udashboard;
