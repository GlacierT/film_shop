import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Title from './Title'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value)=>{
            const {id, company, img, info, price, title, inCart} = 
            value.detailProduct;

            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                    <Title title={title}/>
                  </div>
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} className="img-fluid" alt="product"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" style={{opacity: '0.8', background: '#ffffff'}}>
                      <h2>Фільм: {title}</h2>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Знятий : <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          Ціна: <span>$</span> {price}
                        </strong>
                      </h4>
                      <h3>
                          Інформація про фільм:
                      </h3>
                      <p>
                        {info}
                      </p>
                      <div>
                        <Link to="/">
                          <ButtonContainer>
                            ПОВЕРНУТИСЯ ДО ФІЛЬМІВ
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "В КОШИКУ":"ДОДАТИ ДО КОШИКУ"}
                          </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );

          }
        }
      </ProductConsumer>
    )
  }
}
