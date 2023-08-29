import React, { useState, useEffect } from 'react';
import { Empty, Table } from 'antd';
import api from '../services/api';
import RenderImages from '../utils/RenderImages';

const MyComponent = () => {
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

  return (
    <div className="container">
      <div className="table-center">
        <div>Últimos 20 jogos</div>
        <Table
          dataSource={data.map((item, index) => ({ ...item, key: index }))}
          rowKey="key"
          loading={(!loadingTable) ? false : data.length === 0}
          columns={
            [
              {
                title: 'TIME', dataIndex: 'teamname', key: 'teamname', width: 65, align: 'center'
              },
              {
                title: 'LIGA', dataIndex: 'league', key: 'league', width: 65, align: 'center'
              },
              {
                title: 'SPLIT', dataIndex: 'split', key: 'split', width: 65, align: 'center'
              },
              {
                title: 'DATA', dataIndex: 'datahora', key: 'datahora', width: 65, align: 'center'
              },
              {
                title: 'SIDE', dataIndex: 'side', key: 'side', width: 65, align: 'center'
              },
              {
                title: 'RESULTADO', dataIndex: 'result', key: 'result', width: 90, align: 'center'
              },
              {
                title: 'KILLS', dataIndex: 'kills', key: 'kills', width: 65, align: 'center'
              },
              {
                title: 'MORTES', dataIndex: 'deaths', key: 'deaths', width: 65, align: 'center'
              },
              {
                title: 'FIRST DRAGÃO', dataIndex: 'firstdragon', key: 'firstdragon', width: 65, align: 'center'
              },
              {
                title: 'DRAGÕES', dataIndex: 'dragons', key: 'dragons', width: 70, align: 'center'
              },
              {
                title: 'FIRST ARAUTO', dataIndex: 'firstherald', key: 'firstherald', width: 65, align: 'center'
              },
              {
                title: 'ARAUTOS', dataIndex: 'heralds', key: 'heralds', width: 70, align: 'center'
              },
              {
                title: 'FIRST TORRE', dataIndex: 'firsttower', key: 'firsttower', width: 65, align: 'center'
              },
              {
                title: 'TORRES DESTRUIDAS', dataIndex: 'towers', key: 'towers', width: 65, align: 'center'
              },
              {
                title: 'TORRES PERDIDAS', dataIndex: 'towersenemy', key: 'towersenemy', width: 65, align: 'center'
              },
              {
                title: 'BARONS', dataIndex: 'barons', key: 'barons', width: 65, align: 'center'
              },
              {
                title: 'TOTAL GOLD', dataIndex: 'totalgold', key: 'totalgold', width: 65, align: 'center'
              },
              {
                title: 'PICK TOP', dataIndex: 'top_champion', key: 'top_champion', width: 65, align: 'center',
                render: (championName) => {
                  return <RenderImages imageName={championName} />
                }
              },
              {
                title: 'PICK JNG', dataIndex: 'jng_champion', key: 'jng_champion', width: 65, align: 'center',
                render: (championName) => {
                  return <RenderImages imageName={championName} />
                }
              },
              {
                title: 'PICK MID', dataIndex: 'mid_champion', key: 'mid_champion', width: 65, align: 'center',
                render: (championName) => {
                  return <RenderImages imageName={championName} />
                }
              },
              {
                title: 'PICK BOT', dataIndex: 'bot_champion', key: 'bot_champion', width: 65, align: 'center',
                render: (championName) => {
                  return <RenderImages imageName={championName} />
                }
              },
              {
                title: 'PICK SUP', dataIndex: 'sup_champion', key: 'sup_champion', width: 65, align: 'center',
                render: (championName) => {
                  return <RenderImages imageName={championName} />
                }
              }
            ]
          }
          size="middle"
          scroll={{ x: 1500 }}
          className="table-global"
          locale={{
            emptyText: <Empty description='Sem dados' image={Empty.PRESENTED_IMAGE_SIMPLE} />
          }}
        // pagination={{
        //   pageSize: 20,
        //   position: ['bottomLeft'],
        //   // className: 'number-pagination'
        // }}
        // rowClassName="radiusRow"
        />
      </div>
    </div>
  );
};

export default MyComponent;
