import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-black text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div>
                    <Link to='/' className='text-white mr-4'>Logo</Link>
                </div>
                <div>
                    <Link to='/login' className='text-white lg:inline-block mr-4'>Iniciar Sesión</Link>
                    <Link to='/register' className='text-white lg:inline-block'>Registrarme</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
