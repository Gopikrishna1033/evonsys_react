import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className="Home_body">
       <div className="welcome">
        <p>Welcome to Online Banking</p>
        <button>Open a New Account</button> 

        {/* <div className="other_details">
            <div className="rewards">
                <p>Preferred Rewards</p>
                <button>View my rewards</button>
            </div>
            <p>-</p>
            <div className="spending">
                <p>Spending & Budgets</p>
                <button>Track Spending</button>
            </div>
        </div> */}

       </div>

       <div className="name">
            <p>Marrie Rothschild</p>
        </div>
        <div className='personal'>
            Personal Accounts*
        </div>
       <div className="grid_elements">
            
            <div className="grid-item">
                <button className='quick'>Quick view</button>
                <p className='USD'>965,851.26 USD</p>
                <hr />
                <p className='last_four'>*****5113</p> 
                <p className='bottom'>--</p>   
            </div>

            <div className="grid_item">
                <button className='quick'>Quick view</button>
                <p className='JPY'>1,500,000,00 JPY</p>
                <hr />
                <p className='last_four'>*****3322</p>
                <p className='bottom'>Premier Checking Account</p>
            </div>
        </div>
        <div className="invest">
            <p>Invest Accounts*</p>
        </div>
        <div className="grid_elements">
            <div className="grid-item">
                <button className='quick'>Quick View</button>
                <p className='CAD'>1,100,000.00 CAD</p>
                <hr />
                <p className='last_four'>*****5566</p>
                <p className='bottom'>Premier Checking Account</p>
            </div>
        </div>

       <div className="other_details">
            <div className="rewards">
                <img src="https://cdn0.iconfinder.com/data/icons/logistics-delivery-glyph-3/64/48-64.png" alt="" />
                <p className='pref'>Preferred Rewards</p>
                <p className='platinum'>Platinum</p>
                <button className='view'>View my rewards</button>

            </div>
            <span >________________________</span>
            <div className="spending">
                <img src="https://cdn3.iconfinder.com/data/icons/project-management-outline-2/64/Budget_Spending-Money-Budget-Cost-Management-64.png" alt="" />
                <p className='spend'>Spending & Budgeting</p>
                
                <button className='track'>Track Spending</button>
            </div>
        </div> 

       </div>

  )
}

export default Home