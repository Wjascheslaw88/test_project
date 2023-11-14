import React from 'react';
import './App.css'

function App() {
  return (
    <div className='app-wrapper'>

        <header className='header'>
          <img src="https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg" alt=""/>
        </header>

        <nav className='nav'>

          <div>
            <a>Profile</a>
          </div>

          <div>
            <a>Massages</a>
          </div>

          <div>
            <a>News</a>
          </div>

          <div>
            <a>Music</a>
          </div>

          <div>
            <a>Setting</a>
          </div>

        </nav>

        <div className='content'>
          <div>
          <img src='https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg' alt=""/>
          </div>

          <div>
            ava + description
          </div>

          <div>
            my post
            <div>
              New post
            </div>
            <div>
              <div>
                post1
              </div>
              
              <div>
                post2
              </div>
            </div>
          </div>

        </div>

    </div>
  );
}


export default App;
