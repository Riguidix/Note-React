import { useState } from 'react';

import Input from './Input';
import AddButton from './AddButton';

function Footer() {
    const [parentTask, setParentTask] = useState({
        label: '',
        important: false,
        completed: false
    });

    return (
        <div className="flex items-center justify-center h-full p-6 rounded-b-lg w-full">
            <div className="flex items-center justify-around h-full w-full">
                <Input task={ parentTask } handleTask={ setParentTask }/>

                <AddButton task={ parentTask }/>
            </div>
        </div>
    );
}

export default Footer;