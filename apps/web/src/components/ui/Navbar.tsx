import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header className="bg-black text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <button className='text-white mr-4 lg:hidden' onClick={toggleMenu}>Logo</button>
                    <Link to='/' className='text-white hidden lg:inline-block mr-4'>Home</Link>
                    <Link to='/login' className='text-white hidden lg:inline-block mr-4'>Iniciar Sesión</Link>
                    <Link to='/register' className='text-white hidden lg:inline-block'>Registrarme</Link>
                </div>
                <div className="w-full max-w-80">
                    <input type='search' placeholder="Buscar..." className="w-full py-1 px-2 rounded outline-none text-black" />
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden bg-black">
                    <Link to='/' className='block p-2 text-white' onClick={toggleMenu}>Home</Link>
                    <Link to='/login' className='block p-2 text-white' onClick={toggleMenu}>Iniciar Sesión</Link>
                    <Link to='/register' className='block p-2 text-white' onClick={toggleMenu}>Registrarme</Link>
                </div>
            )}
        </header>
    );
}

export default Navbar;
