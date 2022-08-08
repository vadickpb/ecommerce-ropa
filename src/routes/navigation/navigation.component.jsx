import { Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'

import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg' 

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { NavigationContainer, NavLink, LogoContainer, NavLinks } from './navigation.styles'




export const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)


  return (
     <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo />
            </LogoContainer>
            <NavLinks>
                <NavLink to = '/shop' >
                    TIENDA
                </NavLink>

                { currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>
                        CERRAR SESIÓN
                    </NavLink>) : (
                    <NavLink  to = '/auth' >
                        INICIAR SESIÓM
                    </NavLink>
                )}

                <CartIcon />
            </NavLinks>
                { isCartOpen && <CartDropdown />}
            
        </NavigationContainer>
        <Outlet />
    </Fragment> 
  )
}

