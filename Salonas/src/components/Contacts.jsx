import React from 'react'
import './css/Contacts.css'
import { FaUser, FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <> 

  <div className='wrapper-body2'> 
  <div className='wrapper-contacts'>
                    <h1 className="anim">Susisiekime</h1>
                    <p className="anim">Jeigu turite klausimų dėl grožio paslaugų, parašykite mums <br></br> 
                    </p>
  </div>
  <div className='wrapper2'>
  <div className="from-box2 login2">
  <form>
  <h1 className='loginName2'>
Turite klausimų?</h1>

  
              <div className='input-box2'>
                <input type="text" placeholder='Vardas'/>
                
                <FaUser className='icon2' />
              </div>
              <div className='input-box2'>
                <input type="email" placeholder='El.paštas' />
                
                <FaEnvelope className='icon2' />
              </div>

              <div className='input-text-erea'>
              <textarea  name='message' id='message' cols={5} rows={5} placeholder='Jūsų žinutė'></textarea>

              </div>
              

              <div>
              <Link to="/about" ><button type='submit'>Išsaugoti</button></Link>
              </div>
              {/* <div className='remeber-forgot'>
                <label><input type="checkbox" />Remeber me</label>
                <Link to="/signup">Forgot password? </Link>
              </div>
              <button type='submit'>Login</button>
              <div className='register-link'>
                <p>Don't have an account? <Link to="/signup">Register</Link></p>
              </div> */}

    </form>
  </div>
  </div>
 </div>

    </>
    );
}

export default Contacts;