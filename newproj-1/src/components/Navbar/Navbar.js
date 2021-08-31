import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {

    state={ clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
     


     render() {
         return(
             <nav className='NavbarItems'>
                 <h1 className='navbar-logo'>
                     <img src='https://www.elegantthemes.com/images/logo-light.svg'alt='' />                
                 </h1>
                 <div className='menu-icon' onClick={this.handleClick}>
                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>                 
                 </div>

                 <ul className={this.state.clicked ? 'nav-menu active'
                      : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName}href={item.url}>
                                 {item.title}
                                 </a>  
                                                          
                             </li>
                              
                        )
                    })}  
                                
                 </ul>
        
              <button type="button" class="btn btn-primary">Pricing</button> 
             </nav>
         )
     }
}

export default  Navbar
