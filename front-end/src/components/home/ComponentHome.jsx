import React, { useState, useEffect } from 'react';
import { Button, Empty, Table } from 'antd';
import api from '../../services/api';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { columnsHome } from '../../utils/utilsPageHome/TableColumns';

const Home = () => {
  const [data, setData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/home');

        setData(response.data.data);
      } catch (error) {
        setLoadingTable(false);
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const spinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  return (
    <div className="container">
      <div className="table-center">
        <div className='table-infos'>
          <div className='last-games'>Últimos 10 jogos</div>
          <Button className='all-teams'>Ver todos os times</Button>
        </div>

        <Table
          dataSource={data.map((item, index) => ({ ...item, key: index }))}
          rowKey="key"
          loading={{
            indicator: <Spin indicator={spinIcon} />,
            spinning: (!loadingTable) ? false : data.length === 0
          }}
          columns={columnsHome}
          size="small"
          scroll={{ x: 1000 }}
          className="table-global"
          locale={{
            emptyText: (!loadingTable) ? <Empty description='Sem dados' image={Empty.PRESENTED_IMAGE_SIMPLE} /> : <></>
          }}
          pagination={{
            pageSize: 10,
            position: ['bottomRight'],
            className: 'number-pagination'
          }}
          rowClassName="radiusRow"
        />
      </div>
    </div >
  );
};

export default Home;
