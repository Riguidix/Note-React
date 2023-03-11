import Input from './Input';
import AddButton from './AddButton';

function Footer() {
    return (
        <div className="flex items-center justify-center h-full p-6 rounded-b-lg w-full">
            <div className="flex items-center justify-around h-full w-full">
                <Input />

                <AddButton />
            </div>
        </div>
    );
}

export default Footer;