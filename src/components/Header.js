import Navigation from './Navigation';

function Header() {
    return (
        <header className="bg-blue-dark grid grid-rows-2 h-full rounded-t-lg w-full">
            <div className="p-5">
                <h1 className="text-white text-2xl">
                    To-Do List
                </h1>
            </div>
            
            <div className="h-full w-full">
                <Navigation />
            </div>
        </header>
    );
}

export default Header;