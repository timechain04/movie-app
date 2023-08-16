import react from 'react';

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = () => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            Home
        </div>
    )
}

export default NavbarItem;