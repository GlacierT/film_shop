import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
import * as Header from '../header.png';

export default class ProductList extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="ФІЛЬМИ" title=" В ПРОКАТІ"/>
                <div className="row">
                    <ProductConsumer>
                        {
                          value => {
                            return value.products.map (
                              product => {
                                return <Product key={product.id} product={product}/>
                              }
                            )
                          }
                        }
                    </ProductConsumer>
                </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}
