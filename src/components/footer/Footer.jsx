import React from 'react'
import '../../scss/footer.scss'

function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='footer__buyers'>
                <p>FOR BUYERS</p>
                <button>Support</button>
                <br />
                <button>Sales calendar</button>
                <br />
                <button>AliExpress Guide</button>
            </div>
            <div className='footer__partners'>
                <p>FOR PARTNERS</p>
                <button>Sell on AliExpress</button>
                <br />
                <button>Affiliate program</button>
                <br />
                <button>Blog for seller</button>
            </div>
            <div className='footer__company'>
                <p>ABOUT COMPANY</p>
                <button>Press center</button>
                <br />
                <button>AliTech</button>
                <br />
                <button>Blog about company life</button>
            </div>
            <div className='footer__social'>
                <p>WE ARE IN SOCIAL NETWORKS</p>
                <button>In contact with</button>
                <br />
                <button>Classmates</button>
                <br />
                <button>Telegram</button>
                <br />
                <button>Zen</button>
            </div>
        </div>
    </>
  )
}

export default Footer