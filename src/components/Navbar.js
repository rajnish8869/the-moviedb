import React, { Component } from 'react'
import Styled from 'styled-components'
import logo from '../nav-logo.png'
// import logo from '../nav-logo.jpg'
export default class Navbar extends Component {
    render() {
        return (
            <ProductWrapper>
            <div className='navBar'>
                <div className='logoContainer'>
                    <img src={logo} alt='logo' className='navLogo' /> 
                </div>
                <div className='titleText'>The MovieDb</div>
                {/* <div className="homeBtn p-3">Home</div> */}
                <input type="text" placeholder="search" className="searchBar" />
                <button className="searchBtn">search</button>
                <div className="loginBtn">
                    <i className="fa fa-sign-in" />
                
                </div>
                <div className="signUpBtn">
                
                    <i className="fa fa-user-plus" />
               
                </div>
            </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = Styled.div`
.navBar{
    width: 100%;
    height: 70px;
    background: #E91E63;
    display: flex;
}
.logoContainer{
    width:7%
}
.navLogo{
    // width: 50%;
    width: 56px;
    // margin-top: 7%;
    margin-top: 4px;
    margin-left: 20%;
}

.searchBar {
    height: 70%;
    width: 50%;
    margin: 0.7%;
    border-radius: 12px;
    padding-left: 1%;
    // margin-left: 8%;
    margin-left: 6%;
    border: 1px solid #999;
}
.searchBtn {
    height: 70%;
    width: 7%;
    margin: 0.7%;
    border-radius: 20px;
    border: 1px solid #999;
    min-width: fit-content;
}
.loginBtn{
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    margin-left: 11%;
    margin-top: 0.8%;
    border-radius: 0.5rem ;
    transition: all 0.5s linear;
}

.homeBtn{
    padding: 0.2rem 0.4rem;
    // background: black;
    border: none;
    color: white;
    font-size: 1.4rem;
    border-radius: 0.5rem ;
    transition: all 0.5s linear;
    // width: 6%
    // height: 1%!important;
}
.homeBtn:hover {
    color: black;
    background: white;
    cursor: pointer;

}
.signUpBtn{
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.4rem;
    border-radius: 0.5rem ;
    transition: all 0.5s linear;
    margin-top: 0.8%;
}
.titleText{
    white-space: nowrap;
    margin-top: 14px;
    font-weight: 600;
    font-size: 160%;
    color: white;
    margin-left: 4px;
}
`
