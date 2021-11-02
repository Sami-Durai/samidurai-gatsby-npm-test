import React from "react";

// components
import Layout from "../components/layout";

// shared components
import Table from "../components/sharedComponents/Table";

// assets
import tableData from "../assets/data/tableData.json";

const Home = () => {
  return (
    <Layout>
      <Table {...tableData} />
    </Layout>
  );
};

export default Home;
