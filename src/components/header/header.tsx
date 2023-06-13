import { useNavigate } from 'react-router-dom';
import './header-styles.css'
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [pageIn,setPageIn] = useState('');

    function handlePath(caminho:string){
        if (caminho === 'lotofacil' ) {
            navigate('/lotofacil')
            setPageIn('lotofacil')
        }else if (caminho === 'megasena' ) {
            navigate('/megasena')
            setPageIn('megasena')
        }
        else {
            navigate('/quina')
            setPageIn('quina')
        }
    }

    return (
        <nav className='headerWrapper'>
            <ul>
                <li className={pageIn === 'lotofacil' ? 'headerSelected' : 'lotoColor'} onClick={() => handlePath('lotofacil')}>Lotofácil</li>
                <li className={pageIn === 'megasena' ? 'headerSelected' : 'megaColor'} onClick={() => handlePath('megasena')}>Megasena</li>
                <li className={pageIn === 'quina' ? 'headerSelected' : 'quinaColor'} onClick={() => handlePath('quina')}>Quina</li>
            </ul>
        </nav>
    );
}

export default Header