import React, { Component } from 'react'
import logo from '../logo.jpg'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'



export default class Details extends Component {
    render() {
        return (
            <ProductWrapper>
                        <div className="container">
                            <div className="row p-5 ">
                                
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={logo} className="img-fluid" alt="ïmage product" />    
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className="text-blue"><strong>Movie Name</strong></h4>
                                    <Link to="/">
                                    <div className="like-btn">
                                        like
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </ProductWrapper>
                    )
                }}
                
        
const ProductWrapper = Styled.div`
.row{
    background: beige ;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
}
.like-btn{

    background: transparent;
    border: 0.05rem solid var(--mainDark);
    color: var(--mainDark);
    border-radius: 1rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.2s ease-in-out;
    &:hover{
        background-color:var(--mainDark);
        color:var(--mainWhite);
    }
    &:focus{
        outline: none;
    }
    }
`