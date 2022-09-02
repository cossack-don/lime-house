import { IStep } from './interfaces/IStep';
import {Tag} from "antd";
import React from "react";
// :IStep[]
export const steps = [
    {
        title: 'Доход, риски',
        content: 'First-content 1',
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['Средний', 'Пример'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['Низкий'],
            },
        ],
    },
    {
        title: 'Первый взнос',
        content: 'Second-content 2',
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['Высокий', 'Пример'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['Высокий'],
            },
        ],
        columns:[
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },

        ]
    },
    {
        title: 'Критерии квартиры',
        content: 'Second-content 2',
    },
    {
        title: 'Поиск квартиры',
        content: 'Last-content 3',
    },
    {
        title: 'Выбор банка',
        content: 'Last-content 4',
    },
    {
        title: 'Сбор документов',
        content: 'Last-content 5',
    },
    {
        title: 'Одобрение банка',
        content: 'Одобрение банка',
    },
    {
        title: 'Документы на квартиру',
        content: 'Одобрение банка',
    },
];