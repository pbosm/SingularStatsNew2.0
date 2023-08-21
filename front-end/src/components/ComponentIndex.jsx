import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import http from '../services/http';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await http.get('data/index');

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const columns = data.length > 0 ? Object.keys(data[0]).map(key => ({ title: key, dataIndex: key, key })) : [];

  return (
    <div className="centered-container">
      <Table columns={columns} dataSource={data.map((item, index) => ({ ...item, key: index }))} className="centered-table mt-5" />
    </div>
  );
};

export default MyComponent;
