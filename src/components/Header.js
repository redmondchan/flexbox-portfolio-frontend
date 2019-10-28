import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <div class="header">
        Hello, I'm Redmond Chan.
        I'm a full-stack web developer.
        <div>
          <a href="#about" class="btn">More About Me</a>
        </div>
      </div>
    )
  }
}

export default Header
