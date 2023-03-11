import Link from './Link';

function Navigation() {
    const navLinks = [
        {
            label: 'All',
            to: '/'
        },
        {
            label: 'Completed',
            to: '/completed'
        },
        {
            label: 'Incompleted',
            to: '/incompleted'
        },
        {
            label: 'Important',
            to: '/important'
        },
    ];

    return (
        <nav className="h-full w-full">
            <ul className="flex items-center justify-evenly h-full text-white w-full">
                { 
                    navLinks.map((link, index) => {
                        return (
                            <li 
                                key={ index }
                                className="h-full w-full"
                            >
                                <Link
                                    key={ link.label }
                                    label={ link.label }
                                    to={ link.to }
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation