import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
import HistoryItems from '../HistoryItems'
import './index.css'


const initialHistoryList = [
    {
      id: 0,
      timeAccessed: '07:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Instagram',
      domainUrl: 'instagram.com',
    },
    {
      id: 1,
      timeAccessed: '05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Twitter. It’s what’s happening / Twitter',
      domainUrl: 'twitter.com',
    },
    {
      id: 2,
      timeAccessed: '04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Facebook – log in or sign up',
      domainUrl: 'facebook.com',
    },
    {
      id: 3,
      timeAccessed: '04:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
      title: 'LinkedIn: Log In or Sign Up',
      domainUrl: 'linkedin.com',
    },
    {
      id: 4,
      timeAccessed: '04:00 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
      title: 'Hashnode: Everything you need to start blogging as a developer!',
      domainUrl: 'hashnode.com',
    },
    {
      id: 5,
      timeAccessed: '03:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
      title: 'GitHub: Where the world builds software · GitHub',
      domainUrl: 'github.com',
    },
  
    {
      id: 6,
      timeAccessed: '02:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
      title: 'React – A JavaScript library for building user interfaces',
      domainUrl: 'reactjs.org',
    },
    {
      id: 7,
      timeAccessed: '01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
      domainUrl: 'stackoverflow.com',
    },
  
    {
      id: 8,
      timeAccessed: '09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Gmail',
      domainUrl: 'mail.google.com',
    },
    {
      id: 9,
      timeAccessed: '09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Google',
      domainUrl: 'google.com',
    },
  ]

 function History(props) {

    
    const[searchInput,setState]=useState('');
    const[historyList,setHistory]=useState(initialHistoryList)

 const searchItem=(searchValue)=>{
        setState(searchValue)
        const filteredData = historyList.filter(history => history.title.toLowerCase().includes(searchInput.toLowerCase()))
        setHistory(filteredData)

    }

    

    const onDeleteHistory=id=>{
        const updatedHistoryList=historyList.filter(eachHistory=>eachHistory.id!==id
            ,)
        setHistory(updatedHistoryList)
    }

    

  return (
    <div className='main-container'>
    <div className='header-container'>
        <div className='header'>
            <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt='app logo'/> 
            <div className='search-bar-container'>
               <div className='search-icon-container'>
                    <img src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                        alt="search"/>
                    </div>
                <div className='search-container'>
            <input 
            type="input"
            value={searchInput}
            placeholder='Search History'
            className='search-input'
            onChange={(e)=>searchItem(e.target.value)}/>
            </div>
            </div>
            </div>
            </div>
            {historyList.length >0?
                (<ul className='history-container'>
                {historyList.map(eachHistory=>(
                <HistoryItems 
                key={eachHistory.id}
                historyDetails={eachHistory}
                onDeleteHistory={onDeleteHistory}/>
                ))}
                </ul>):
                (<p className='no-history'>There is no history to show</p>
    )}  
    </div>
  )
}
export default History