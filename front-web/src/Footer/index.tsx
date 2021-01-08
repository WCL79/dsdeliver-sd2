import './styles.css';
import { ReactComponent as Youtuicon } from './youtube.svg';
import { ReactComponent as Linkedinicon } from './linkedin.svg';
import { ReactComponent as Instragramicon } from './instragram.svg';
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtuicon />
                </a>
                <a href="https://www.linkedin.com/school/desuperior/" target="_new">
                    <Linkedinicon />
                </a>
                <a href="https://www.instragram.com/devsuperior.ig">
                    <Instragramicon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;