import React from 'react';
import styled from 'styled-components';
import Task from '../../../../api/models/tasks/Task';
import Title from './components/Title';
import OrderView from './components/OrderView';
import TagList from './components/TagList';
import Footer from './components/Footer';

const Container = styled.div`
    width: 20%;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
`;

interface HoveredProps {
    isHovered: boolean;
}

const Paper = styled.div`
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover {
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        z-index: 1;
    }
`;

interface Props {
    task: Task;
}


const TaskItem: React.FC<Props> = props => {
    const [isHovered, setHovered] = React.useState<boolean>(false);

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    return (
        <Container>
            <Paper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Title title={props.task.title}/>
                <OrderView 
                    order={props.task.order}
                    isHovered={isHovered}
                />
                {isHovered && <TagList tags={props.task.tags}/>}
                <Footer 
                    taskId={props.task.id} 
                    taskDate={new Date(props.task.date)}
                />
            </Paper>
        </Container>
    )
}

export default TaskItem;