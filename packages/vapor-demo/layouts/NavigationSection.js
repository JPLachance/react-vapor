const NavigationSection = ({icon, title, pages}) => (
    <li className="block navigation-menu-section">
        <header className="navigation-menu-section-header text-white">
            <span className="navigation-menu-section-header-icon fill-white transparency-3">{icon}</span>
            {title}
        </header>
        <ul className="navigation-menu-section-items">{typeof window !== 'undefined' && pages}</ul>
    </li>
);

export default NavigationSection;
