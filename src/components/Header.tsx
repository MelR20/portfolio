
const headerNavItems = [{name: 'À propos', link: '#aPropos' }, {name: 'Formations', link:'#formations'}, {name: 'Projets', link: '#projects'}, {name: 'Contact', link: '#contact'}];

const Header = () => {
    return (
        <header className='header'>
            <h1 className="logoName">Mélissa Raymond</h1>
            <div style={{display: 'flex'}}>
                <ul className = "headerNav">
                    {headerNavItems.map((item, index) => (

                        <li key={index} className="headerNavItem">
                            <a href={item.link} className="headerNavItemLink">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;