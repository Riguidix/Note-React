import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../components/Card';

function Home(props) {
    const [tasks, setTasks] = useState([]);
    const tasksState = useSelector((state) => state.tasks);

    useEffect(() => {


        switch(props.page) {
            case 'all':
                setTasks(tasksState);
                break;
            case 'completed':
                setTasks(tasksState.filter(task => task.completed));
                break;
            case 'incompleted':
                setTasks(tasksState.filter(task => !task.completed));
                break;
            case 'important':
                setTasks(tasksState.filter(task => task.important));
                break;
            default:
                setTasks(tasksState);
                break;
        }
    }, [props.page, tasksState]);

    return (
        <div className="h-full overflow-y-auto py-10 px-5 w-full">
            {
                tasks.map((task) => {
                    return (
                        <Card 
                            key={ task.id }
                            id={ task.id }
                            label={ task.label }
                            important={ task.important }
                            completed={ task.completed }
                        />
                    )
                })
            }
        </div>
    );
}

export default Home;