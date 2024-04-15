import React from 'react'
import Me from "../icons/me.png"

function Feed() {
  return (
    <div className='main-feed'>
      <div className='main-profile'>
        <img className='dp' src={Me} alt='pro-pic'></img>

        <div className='profile-details'>
          <h1 className='profile-name'>Varun Gole</h1>
          <p className='profile-subdetails'>Incoming SWE Intern @Interactive Brokers | M.Engg in Software Engineering @University of Maryland</p>
        </div>

        <div className='profile-facts'>
          <h3 className='profile-viewers'>Profile Viewers : 155</h3>
          <h3 className='post-impressions'>Post Impressions : 129</h3>
        </div>

        <div className='premium-features'>See you premium features</div>
        <div className='my-items'>My items</div>
      </div>

      <div className='recent-group-event'>
        <ol className='recent-events'>
          <li>Gogate Educational Foundation</li>
          <li>#softwareengineering</li>
          <li>#freshers</li>
          <li>#freshershiring</li>
        </ol>
        <div className='groups'>
          <h3>Groups</h3>
          <ol className='group-names'>
            <li>Gogate Educational Foundation</li>
          </ol>
        </div>
        <div className='events'>
          <ol></ol>
        </div>
        <div className='followed-hashtags'>
          <ol>
            <li>#softwareengineering</li>
            <li>#computerscience</li>
          </ol>
        </div>
        
      </div>

      <div className='start-a-post'>
        <img className='post-image' src={Me} alt='me'></img>
        <input type='text' placeholder='Start a Post' className='post-input'></input>
      </div>

      <div className='recommended'>
        <h3>Recommended</h3>
        <ol className='recommended-items'>
          <li></li>
        </ol>
      </div>

      <div className='posts'>
      <h3>Posts</h3>
        <ol className='post-list'>
          <li className='post'></li>
        </ol>
      </div>

      <div className='linkedin-news'>
      <h3>News</h3>
        <ol className='news-list'>
          <li className='newss'></li>
        </ol>
      </div>

    </div>
  )
}

export default Feed