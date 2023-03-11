import { useState } from 'react';

function Input() {
    const [value, setValue] = useState("");

    return (
        <div className="h-full px-3 w-3/4">
            <input
                className="bg-gray-dark outline-orange outline outline-2 h-full rounded-full py-1 px-3 placeholder:text-orange text-orange w-full"
                placeholder="Add New Task ..."
                value={ value }
                onChange={ (event) => setValue(event.target.value) }
            />

            { value }
        </div>
    );
}

export default Input;