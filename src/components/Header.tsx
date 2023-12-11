import { Button, useMediaQuery } from '@mui/material';
import { Logo } from '../assets';
import { materialTheme } from '../theme';
import { HeaderStyled } from './styles';
import { menuItems } from './Header.config';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const isResponsive = useMediaQuery(materialTheme.breakpoints.down('md'));

  return (
    <HeaderStyled>
      <div className="logo">
        <Logo />
      </div>
      <div className="desktop-menu">
        {!isResponsive &&
          menuItems.map(item => (
            <div key={item} className="desktop-menu-item">
              {item}
            </div>
          ))
        }
      </div>
      <div className="sub-menu">
        {!isResponsive ?
          <>
            <div className="desktop-menu-item">
              Login
            </div>
            <Button variant="contained" color="secondary">
              Start free trial
            </Button>
          </> :
          <MobileMenu />
        }
      </div>
    </HeaderStyled>
  )
}