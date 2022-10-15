import React from 'react';
import {Link} from 'react-router-dom'
 
 export default function Header() {
   return (
     <div className='header'>
        <div className='header-top'>
            <div>
                <p>Tuesday, 04 October 2022 - 05:05 PM IST</p>
            </div>

            <div>
                <p>
                  <Link to="/Signin"><a ><img src=""/>Sign in</a></Link>
                  <Link to="/Signup"><a >Sign up</a></Link>
                  <Link to="/"><a >Print Ticket</a></Link>
                </p>
            </div>
        </div>
        <div className='header-middle'>
            <div className='d-flex'> 
                <img src='https://www.srisailadevasthanam.org/static/media/Logo-circle.8bc79b53.png'/>
                <h6>Sri Bhramaramba <span>Mallikarjuna Swamy Varla</span> Devasthanam</h6>
            </div>
            <div className='nav'>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Sevas">Sevas</Link></li>
                    <li><Link to="/Donations">Donations</Link></li>
                    <li><Link to="/Online">Online Booking</Link></li>
                    <li><Link to="/Mediaroom">Media Room</Link></li>
                    <li><Link to="/support">Support</Link></li>
                    
                    

                </ul>
            </div>

        </div>
        <div className='header-bottom'>
            <ul>
                <li>Home</li>
                <li>Devotee</li>
                <li>Signup</li>
            </ul>

        </div>


     </div>
   )
 }
 