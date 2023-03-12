import { useState } from 'react';

import { editComplete, editImportant, deleteTask } from '../features/tasks/taskSlice';

import { StarIcon, TrashIcon } from '@heroicons/react/24/outline';
import { StarIcon as SolidStar } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';

function Card(props) {
    const [isStar, setIsStar] = useState(props.important);
    const [isChecked, setIsChecked] = useState(props.completed);

    const dispatch = useDispatch();

    const handleStarChange = () => {
        setIsStar(!isStar);
        dispatch(editImportant(props.id))
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        dispatch(editComplete(props.id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }
 
    return (
        <div className="bg-gray-dark h-1/6 my-2 rounded w-full">
            <div className="grid grid-cols-6 group h-full w-full">
                <div className="col-span-5 flex items-center group-hover:col-span-4">
                    <div className="flex items-center justify-around w-full">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="
                                appearance-none border-orange border-2 flex h-5 items-center justify-center rounded-md w-5
                                checked:before:content-['\2713'] checked:bg-orange checked:text-white
                            "
                            checked={isChecked}
                            onChange={ handleCheckboxChange }
                        />

                        <label 
                            htmlFor="checkbox"
                            className={
                                isChecked
                                    ? "line-through text-orange text-md font-bold w-3/4" 
                                    : "text-md text-white font-bold w-3/4"
                            }
                        >
                            { props.label }
                        </label>
                    </div>
                </div>

                <div 
                    onClick={ handleStarChange }
                    className="flex items-center justify-center text-orange"
                >
                    {
                        isStar
                            ? <SolidStar className="h-5 w-5" /> 
                            : <StarIcon className="h-5 w-5" />
                    }
                </div>

                <div
                    onClick={ () => handleDelete(props.id) } 
                    className="cursor-pointer items-center justify-center hidden group-hover:flex group-hover:bg-red"
                >
                    <TrashIcon className="text-white h-5 w-5" />
                </div>
            </div>
        </div>
    );
}

export default Card;