import {Button, message, Steps, Comment, Tag} from 'antd';
import React, { useState } from 'react';
import { steps } from "./pages/dataSteps";
import './style.css';
import Table from './pages/Table'
const { Step } = Steps;



const Root: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    const onChange = (value: number) => {
        setCurrent(value);
    };

    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Описание',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Приоритет',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags) => (
                <span>
        {tags.map((tag) => {
            let color = "Низкий"

            if (tag === 'Высокий') {
                color = 'volcano';
            }
            if (tag === 'Средний') {
                color = 'geekblue';
            }
            if (tag === 'Низкий') {
                color = 'green';
            }

            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
            ),
        },
    ];
    return (
        <>
            <section className="wrapper-road-mortgage">
                <div className='steps'>
                    <Steps current={current} onChange={onChange} direction="vertical">
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Продолжить
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Процесс заполнения завершен')}>
                                Все шаги выполнены
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Назад
                            </Button>
                        )}
                    </div>
                </div>

                <div className='description'>
                    <article className="steps-content">
                        <h3>Шаг - {steps[current].content}</h3>
                        <hr/>
                        <Table data={steps[current].data} columns={columns}/>
                        <div>Описание доп</div>
                    </article>
                </div>
            </section>






        </>
    );
};

export default Root