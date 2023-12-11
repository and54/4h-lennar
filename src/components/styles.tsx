import { styled } from '@mui/material';
import { ComponentProps, PropsWithChildren } from 'react';
import { BgImg } from '../assets';

interface IStyledMenu extends PropsWithChildren<ComponentProps<'div'>> {
  open: boolean;
}

export const HeaderStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: 1280,
  height: 40,
  marginTop: 24,
  position: 'fixed',
  alignItems: 'center',
  zIndex: 1000,
  '.logo': {
    marginLeft: 24,
    display: 'flex',
    alignItems: 'center',
  },
  '.desktop-menu': {
    display: 'flex',
    gap: 32,
    flex: 1,
    margin: '0 40px',
  },
  '.sub-menu': {
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    marginRight: 24,
    button: {
      textTransform: 'math-auto',
      ':hover': {
        backgroundColor: theme.palette.primary.main,
      }
    },
  },
  '.desktop-menu-item': {
    cursor: 'pointer',
    color: theme.palette.common.white,
    transition: '.3s',
    ':hover': {
      color: theme.palette.primary.main,
    }
  },
  [theme.breakpoints.down('md')]: {
    '.logo': {
      marginLeft: 16,
    },
    '.sub-menu': {
      marginRight: 16,
    }
  }
}));

export const LandingStyled = styled('div')(({ theme }) => ({
  height: '100vh',
  backgroundImage: `url("./bg-img.svg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
  backgroundPositionY: 100,
  position: 'relative',
  '.main-content': {
    width: '60%',
    padding: '190px 24px 0 24px',
  },
  '.title': {
    fontSize: 48,
    fontWeight: 800,
    color: theme.palette.common.white,
  },
  '.purple': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('lg')]: {
    backgroundPositionX: 430,
  },
  [theme.breakpoints.down('md')]: {
    '.main-content': {
      width: '100%',
    }
  },
  [theme.breakpoints.down('sm')]: {
    backgroundPositionX: 'center',
    backgroundPositionY: 'calc(100vh - 250px)',
    backgroundSize: 'calc(100vw - 20px)',
    '.main-content': {
      padding: '100px 16px 0 16px',
    },
  }
}));

export const StyledMenu = styled('div')<IStyledMenu>(({ theme, open }) => ({
  width: 'calc(100% - 40px)',
  maxWidth: 500,
  borderRadius: 6,
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  gap: 24,
  top: open ? -12 : -400,
  right: 12,
  padding: 8,
  color: 'var(--lennar-gray-700)',
  transition: '.3s ease-in-out',
  '.mobile-menu-header': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 12px 0 12px',
    '.mobile-menu-close > svg': {
      fill: 'var(--lennar-gray-400)'
    }
  },
  '.mobile-menu': {
    padding: '0 8px',
  },
  '.mobile-menu-action': {
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    color: 'var(--lennar-gray-500)',
    '.mobile-menu-login': {
      alignSelf: 'center',
      marginBottom: 8,
      a: {
        color: 'var(--lennar-gray-900)'
      }
    }
  },
  '.mobile-menu-item': {
    width: 'calc(100% - 20px)',
    padding: '8px 12px',
  }
}));