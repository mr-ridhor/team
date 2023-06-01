import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as BiIcons from 'react-icons/bi'
import MasterCard from './assets/mastercard.svg'
import MasterCard2 from './assets/Mastercard.png'
import Apple from './assets/apple.png'
import File from './assets/file.svg'
import Badge from './assets/badge.png'
import Chip from './assets/chip.jpg'
import * as TbIcons from 'react-icons/tb'
import Wifi from './assets/wifi.png'
import Close from './assets/close.svg'
import * as CgIcons from 'react-icons/cg'
function App() {
  const [count, setCount] = useState(0)

  return (
  
     <div className='contain grid grid-cols-12 font-pops'>
     <button className='close'>
      <CgIcons.CgClose className='close'/>
     </button>
     <div className='col-span-12 md:col-span-8'>
        <div className='content'>
        <header className='header'>
          <div className='logo'>
            <span className='rounded-logo bg-light_blue'>
            </span>
             <h1 className=' ace font-semibold text-dark_blue'>AceCoin<span className='thin font-light'>Pay</span></h1>
          </div>
          <div className='timer font-medium'>
            <span className='box'>0 </span>
            <span className='box'>1</span>
            <span className='divider'>:</span>
            <span className='box'>1 </span>
            <span className='box'>9</span>


          </div>    
      </header>
      <section className='body'>
          <form>
            <div className='input-group'>
              <div className='head'>
                <div className='detail'>
                  <h2 className='title font-bold text-dark_blue'>card number </h2>
                  <p className='text font-medium text-light_gray'>Enter the 15-digit card number on the card</p>
                </div>
                <button className='edit text-light_blue'>
                    <BiIcons.BiPencil color='#08a0ef' className='pen'/>
                    <span className='btn-text font-medium'>
                        Edit
                    </span>
                </button>
              </div>
              <main>
                <img src={MasterCard} alt='mastercard' className='master'/>
                <input type='text' placeholder=' 2412   -   7512   -   3412   -   3456' className='border-border_input outline-onfocus font-medium placeholder-shown:font-normal'/>
                <img src={Badge} alt='badge' className='badge'/>
              </main>
            
            </div>
               <div className='input-group sp'>
              <div className='head'>
                <div className='detail'>
                  <h2 className='title font-bold text-dark_blue'>CVVnumber </h2>
                  <p className='text font-medium text-light_gray'>Enter the 3 or 4 digit card number on the card</p>
                </div>
              
              </div>
              <main>

                <input type='text' placeholder=' 327' className='border-border_input outline-onfocus font-medium placeholder-shown:font-normal'/>
                <div className='dot'>
                <TbIcons.TbGridDots className='icon'/>
                </div>
                {/* <img src={Badge} alt='badge' className='badge'/> */}
              </main>
                </div>
                <div className='input-group sp'>
              <div className='head'>
                <div className='detail'>
                  <h2 className='title font-bold text-dark_blue'>expiry date </h2>
                  <p className='text font-medium text-light_gray'>Enter the expiration date of the card</p>
                </div>
              
              </div>
              <div className='split'>
                <main>
                    <input type='text' placeholder=' 09' className='border-border_input outline-onfocus font-medium placeholder-shown:font-normal'/>
                </main>
                <span className='divider'>/</span>
                <main>

                <input type='text' placeholder=' 22' className='border-border_input outline-onfocus font-medium placeholder-shown:font-normal'/>
               
               
              </main>
              </div>
                </div>
            <div className='input-group sp'>
              <div className='head'>
                <div className='detail'>
                  <h2 className='title font-bold text-dark_blue'>password </h2>
                  <p className='text font-medium text-light_gray'>Enter your Dynamic password</p>
                </div>
              
              </div>
              <main>

                <input type='password' placeholder='*****' className='border-border_input outline-onfocus font-medium placeholder-shown:font-normal'/>
                <div className='dot'>
                <TbIcons.TbGridDots className='icon'/>
                </div>
                {/* <img src={Badge} alt='badge' className='badge'/> */}
              </main>
            </div>
            <button type="submit" className='submit_btn bg-light_blue '>pay now</button>
          </form>
      </section>
        </div>
     </div>
     <div className='col-span-12 md:col-span-4'>
      <div className='checkout'>
        <span className='sim'></span>
        <div className='credit_card'>
          <div className='card_top'>
            <img src={Chip} alt='chip' className='chip'/>
            <img src={Wifi} alt='wifi'/>
          </div>
          <div className='card_body'>
            <span className='name'>jonathan micheal</span>
            <div className='card_number'>
              <div className='hide_number'>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
              </div>
              <div className='show_number'>3456</div>
            </div>
          </div>
          <div className='card_footer'>
            <span className='exp_date'>09/22</span>
            <img src={MasterCard2}  alt='mastercard' className='master'/>
          </div>
          <div className='new'>
            <span className='new_text'>
            
            </span>

          </div>
        </div>
        <div className='checkout_details'>
          <div className='checkout_data'>
              <div className='data'>
                <span className='name'>company</span>
                <span className='img'>
                  <img src={Apple} alt='apple'/>
                  <span className='txt'>
                  apple
                </span>
                 </span>
              
              </div>
              <div className='data'>
                <span className='name'>order number</span>
                <span className='img'>
                  {/* <img src={Apple} alt='apple'/> */}
                  <span className='txt'>
                  1266201
                </span>
                 </span>
              
              </div>
              <div className='data'>
                <span className='name'>product</span>
                <span className='img'>
                  {/* <img src={Apple} alt='apple'/> */}
                  <span className='txt'>
                  macbook air
                </span>
                 </span>
              
              </div>
              <div className='data'>
                <span className='name'>VAT (20%)</span>
                <span className='img'>
                  {/* <img src={Apple} alt='apple'/> */}
                  <span className='txt'>
                   $100.00 
                </span>
                 </span>
              
              </div>

          </div>
          <div className='divider'>
            <div className='left'></div>
            <div className='right'></div>

          </div>
          <div className='checkout_total'>
              <div className='total'>
                <span className='name'>
                  You have to Pay
                </span>
                <div className='amt_title'>
                  <h2 className='amt'>549<sub>.99</sub></h2>
                  <span className='usd'>USD</span>
                  </div>
              </div>
              <img src={File} alt='file' className='file'/>

          </div>
        </div>

      </div>
     </div>
     </div>
 
  )
}

export default App
