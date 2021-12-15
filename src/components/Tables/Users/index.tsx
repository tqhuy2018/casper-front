// @ts-nocheck
import React, {useEffect} from "react";
import { Table, Tag, Space } from 'antd';
import "antd/dist/antd.css";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../../store/actions/users";
import {getPayments} from "../../../../store/actions/payments";
import WithLoadingData from "../../../../hoc/withLoadingData";
import {useRouter} from "next/router";

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'last name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'company',
        dataIndex: 'company',
        key: 'company',
    },

];


const Users = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const onRow=(record, rowIndex) => {
        return {
            onDoubleClick: event => router.push(`users/${record.id}`),
        };
    }

    const users = useSelector((state) => state.users.data);
    return <WithLoadingData data={users}><Table columns={columns} onRow={onRow}  dataSource={users.reverse()} /></WithLoadingData>
}

export default Users