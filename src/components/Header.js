import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <header class="header">
        <div>
          Hello, I'm Redmond Chan.
          I'm a full-stack web developer.
        </div>
        <div>
          <a href="#about" class="btn">More About Me</a>
        </div>
      </header>
    )
  }
}

export default Header
