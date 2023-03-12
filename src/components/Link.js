import { NavLink } from 'react-router-dom';

function Link(props) {
    return (
        <NavLink
            to={ props.to }
            className={
                ({ isActive }) => {
                    const style = "flex items-center justify-center h-full text-xs w-full"
                    const activeStyles = "border-b-4 border-orange font-bold text-orange"

                    return isActive ? activeStyles + " " + style : style
                }                
            }
        >
            { props.label }
        </NavLink>
    );
}

export default Link;