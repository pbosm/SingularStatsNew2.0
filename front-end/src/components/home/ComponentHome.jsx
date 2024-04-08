import React, { useState, useEffect } from 'react';
import { Button, Empty, Table } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { columnsHome } from '../../utils/utilsPageHome/TableColumns';
import { Spin } from 'antd';
import '../../assets/styles/styleComponentHome/home.css';
import TournamentProvider from '../../services/provider/TournamentProvider';

const Home = () => {
  const [data, setData] = useState([]);
  const [loadingTable, setLoadingTable] = useState(true);
  const [tournamentProviderInstance] = useState(() => new TournamentProvider());

  useEffect(() => {
    function getData() {
        tournamentProviderInstance.getLastGames().then(statsTournament => {
          setData(statsTournament.data.data);
        }).catch(error => {
          setLoadingTable(false);
        });
    }

    getData();
  }, [tournamentProviderInstance]);

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
