import React, { Component } from 'react'
import Styled from 'styled-components'
// import Grid from './Grid'
// import logo from '../logo.jpg'




export default class Image extends Component {

    render() {
        
        const {img} = this.props.image

        return (
            <ProductWrapper className="col-9 mx-auto my-3">
                <div className="row">
                <div className="cards">
               
                <div className='col-2'>
                    <img src={img} alt="image111" />
                </div>
                </div>
                </div>
                
            </ProductWrapper>
        )}
        }

const ProductWrapper = Styled.div`

.card{
    border-color: transparent;
    transition: all 0.5s linear;
}

`