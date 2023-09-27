import RenderImages from "../../utils/RenderImages"


export const columnsHome = [
    {
        title: 'TIME', dataIndex: 'teamname', key: 'teamname', width: 65, align: 'center'
    },
    {
        title: 'LIGA', dataIndex: 'league', key: 'league', width: 65, align: 'center'
    },
    {
        title: 'SPLIT', dataIndex: 'split', key: 'split', width: 65, align: 'center',
        render: (split) => {
            return <div style={{ whiteSpace: 'nowrap' }}> {split}</div>
        }
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