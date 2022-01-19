import Image from "next/image";
import Avatar from './../../public/static/img/avatar.png'
import Button from "../ui/Button/Button";
import {Navigation, NavElement, ContainerHeader, ContainerAvatar} from './style'



const Header = () => {
    return (
        <ContainerHeader>
              <ContainerAvatar>
                <Image className="avatar" width='50' height='50' src={Avatar} alt='avatar'/>
                <p>Cristian Pérez</p>
                </ContainerAvatar>
                <Navigation>
                    <NavElement>Projects</NavElement>
                    <NavElement>About</NavElement>
                    <Button>Contact</Button>
                </Navigation>


            
        </ContainerHeader>
      );
}
 
export default Header;