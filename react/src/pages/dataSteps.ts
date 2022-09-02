import { IStep } from './interfaces/IStep';

export const steps:IStep[] = [
    {
        title: 'Доход, риски',
        content: 'Доход, риски',
        data: [
            {
                key: '1',
                name: 'John Brown',
                description: 'New York Noss. 1 Lake Park',
                tags: ['Средний', 'Пример'],
            },
            {
                key: '2',
                name: 'Jim Green',
                description: 'London No. 1 Lake Park',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Joe Black',
                description: 'Sidney No. 1 Lake Park',
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
                description: 'New York No. 1 Lake Park',
                tags: ['Высокий', 'Пример'],
            },
            {
                key: '2',
                name: 'Jim Green',
                description: 'London No. 1 Lake Park',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Joe Black',
                description: 'Sidney No. 1 Lake Park',
                tags: ['Высокий'],
            },
        ],
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