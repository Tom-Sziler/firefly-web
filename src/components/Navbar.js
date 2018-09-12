import React from 'react';
import Hamburger from './Hamburger';
import Close from './Close';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        burgerClicked: false
    };
    this.clickBurger = this.clickBurger.bind(this);
}


clickBurger(){
    this.setState({
        burgerClicked: !this.state.burgerClicked
    })
}



  render() {
    let burglerMenu = this.state.burgerClicked ? "burgerMenu" : "hidden";
    let wordz = this.state.burgerClicked ? "wordz" : "hidden";
    return (
      <div className="navContainer">
        <div className="navibar">
          <header className="App-header">
            <div className="navigation">
              <p className="navItems"><Link to="/">home</Link></p>
              <p className="dividers">|</p>
              <p className="navItems"><Link to="/services">services</Link></p>
              <p className="dividers">|</p>
              <p className="navItems">about</p>
            </div>
            <img className="fflogo" src="../img/logo.png" />
            <div className="navigation">
              <p className="navItems">contact</p>
              <p className="dividers">|</p>
              <p className="navItems">faq</p>
              <p className="dividers">|</p>
              <p className="navItems">blog</p>
            </div>
          </header>
        <div onClick={this.clickBurger}>{this.state.burgerClicked ? <Close /> : <Hamburger />}</div>
        </div>
        <div className="overlay">
          <div className={burglerMenu}></div>
          <div className={wordz}>
            <h3 className="overlayLinks"> Home </h3>
            <hr/>
            <h3 className="overlayLinks"> Services </h3>
            <hr/>
            <h3 className="overlayLinks"> About </h3>
            <hr/>
            <h3 className="overlayLinks"> Contact </h3>
            <hr/>
            <h3 className="overlayLinks"> FAQ </h3>
            <hr/>
            <h3 className="overlayLinks"> Blog </h3>
            <hr/>
          </div>
        </div>
      </div>
    )
  }
}


export default Navbar;
