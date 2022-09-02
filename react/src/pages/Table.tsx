import { Table, Tag } from 'antd';
import React from 'react';





const table = (props) => {

    return (
            <Table
                columns={props.columns}
                pagination={false}
                dataSource={props.data}
            />
    );
};

export default table;