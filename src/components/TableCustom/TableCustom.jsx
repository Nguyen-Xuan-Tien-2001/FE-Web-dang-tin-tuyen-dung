import React from 'react';
import { Table } from 'antd';



const TableCustom = ({ columns, data,onClickRow }) => {
    return (
        <>
            <Table onRow={onClickRow} columns={columns} dataSource={data} />
        </>
    )
};
export default TableCustom;