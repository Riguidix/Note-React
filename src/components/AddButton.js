import { PlusIcon } from '@heroicons/react/24/solid';

function AddButton() {
    return (
        <div className="flex items-center justify-center h-full w-1/4">
            <PlusIcon className="hover:bg-orange hover:text-white hover:font-bold hover:h-12 hover:w-12 border-4 border-orange h-10 rounded-full w-10 text-orange" />
        </div>
    );
}

export default AddButton;