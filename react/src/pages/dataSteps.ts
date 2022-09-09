import { IStep } from './interfaces/IStep';

export const steps:IStep[] = [
    {
        title: 'Доход, риски',
        content: 'Доход, риски',
        data: [
            {
                key: '1',
                name: 'Муж',
                description: 'Грязный доход и чистый 120, на руки 100 например',
                tags: ['Высокий'],
            },
            {
                key: '2',
                name: 'Жена',
                description: 'Text',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Созаёмщик',
                description: 'Text',
                tags: [],
            },
            {
                key: '4',
                name: 'Риски',
                description: 'Если перестанут много платить, если уволюсь, если доход будет самый минимум, например 40-50 тыс в месяц',
                tags: ['Высокий'],
            },
        ],
    },
    {
        title: 'Первый взнос',
        content: 'Second-content 2',
        data: [
            {
                key: '1',
                name: 'Сколько будет первоначальный взнос',
                description: '10% - 800 000 руб',
                tags: ['Высокий'],
            },
            {
                key: '2',
                name: 'Сколько останется отдавать',
                description: 'Text',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Общая стоимость ипотеки',
                description: 'Например 8 000 000 руб',
                tags: ['Высокий'],
            },
        ],
    },
    {
        title: 'Критерии квартиры',
        content: 'Second-content 2',
        data: [
            {
                key: '1',
                name: 'Стоимость квартиры',
                description: 'Text',
                tags: ['Высокий'],
            },
            {
                key: '2',
                name: 'Доступность транспорта',
                description: 'Метро, Электрички, Автобусы',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Инфраструктура',
                description: 'Магазины, детский сад, поликлиники',
                tags: ['Высокий'],
            },
            {
                key: '4',
                name: 'Экология',
                description: 'Text',
                tags: ['Высокий'],
            },
            {
                key: '5',
                name: 'Опасный ли район',
                description: 'text',
                tags: ['Высокий'],
            },
        ],
    },
    {
        title: 'Поиск квартиры',
        content: 'Last-content 3',
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
        title: 'Выбор банка',
        content: 'Last-content 4',
        data: [
            {
                key: '1',
                name: 'Сбербанк',
                description: 'описание',
                tags: ['Высокий'],
            },
            {
                key: '2',
                name: 'ВТБ',
                description: 'описание',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: 'Альфабанк',
                description: 'описание',
                tags: ['Высокий'],
            },
            {
                key: '4',
                name: 'МТС банк',
                description: 'описание',
                tags: ['Высокий'],
            },
            {
                key: '5',
                name: 'Тиньков',
                description: 'описание',
                tags: ['Средний'],
            },
            {
                key: '6',
                name: 'Промсвязьбанк',
                description: 'описание',
                tags: ['Низкий'],
            },
            {
                key: '7',
                name: 'Райффайзенбанк',
                description: 'описание',
                tags: ['Низкий'],
            },
        ],
    },
    {
        title: 'Сбор документов',
        content: 'Last-content 5',
        data: [
            {
                key: '1',
                name: 'Паспорта (Муж, Жена)',
                description: 'Какие страницы нужны',
                tags: ['Высокий'],
            },
            {
                key: '2',
                name: 'Свидетельство о бракосочетание',
                description: '',
                tags: ['Высокий'],
            },
            {
                key: '3',
                name: '3 НДФЛ Справка',
                description: '',
                tags: ['Высокий'],
            },
            {
                key: '4',
                name: 'Трудовая книжка',
                description: 'Для основного места работы — заверенная копия трудовой книжки или СТД-Р/СТД-ПФР, или выписке из ПФР. Для работы по совмещению — заверенная копия трудового договора или СТД-Р/СТД-ПФР',
                tags: ['Высокий'],
            },
            {
                key: '5',
                name: 'СНИЛС',
                description: '',
                tags: ['Низкий'],
            },
            {
                key: '6',
                name: 'ИНН',
                description: '',
                tags: ['Низкий'],
            },
            {
                key: '7',
                name: 'Водительские права',
                description: '',
                tags: ['Низкий'],
            },
        ],
    },
    {
        title: 'Одобрение банка',
        content: 'Одобрение банка',
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
        title: 'Документы на квартиру',
        content: 'Одобрение банка',
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
];