import React, { useEffect, useState } from 'react';
import SearchingBar from '../components/SearchingBar';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { getDetails } from '../redux/actions/setDetails';
import { getDescription } from '../redux/actions/setDescription';

function Description() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [separator] = useState('>')
  const [categories, setCategories] = useState([])
  const [item_details, setItemDetails] = useState([])
  const [item_description, setItemDescription] = useState([])
  const products = useSelector(state => state.products.products)
  const details = useSelector(state => state.details.details)
  const description = useSelector(state => state.description.description)

  useEffect(() => {
    if (products.categories) {
      setCategories(products.categories)
    }
    dispatch(getDetails(match.params.id))
    dispatch(getDescription(match.params.id))
  }, [])

  useEffect(() => {
    if (details.items && description.items) {
      setItemDetails(details.items)
      setItemDescription(description.items)
    }
  }, [details, description])

  function getData(value) {
    window.location.href = '/items?search=' + value
  }

  function toCurrency(value) {
    if(value){
      return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }

  return (
    <div className="App">
      <div className="app-header">
        <SearchingBar event={getData} />
      </div>
      <div className="app-body">
        <div className="row no-gutters width-100 center-h">
          <div className="col-10 col-sm-9 txt-categories">
            {categories.map((item, index) => (
              index !== categories.length - 1 ? <span key={item.id}>{item.name} {separator}</span> : <span className="font-bold" key={item.id}>{item.name}</span>
            ))}
          </div>
          <div className="col-10 col-sm-9" id="box-data">
            <div className="row no-gutters width-100 center-h">
              <div className="col-8 col-sm-8 center-h">
                <img src={item_details.thumbnail} alt={item_details.id} className="img-detail" />
              </div>
              <div className="col-4 col-sm-4">
                <div className="row no-gutters width-100">
                  <div className="col-12 col-sm-12 space-title txt-detail">
                    <span>{item_details.condition === "new" ? 'Nuevo' : 'Usado'} - </span>
                    <span>{item_details.initial_quantity - item_details.available_quantity} vendidos</span>
                  </div>
                  <div className="col-12 col-sm-12 title-detail">
                    <span>{item_details.title}</span>
                  </div>
                  <div className="col-12 col-sm-12 price-detail">
                    <span>{toCurrency(item_details.price)}</span>
                  </div>
                  <div className="col-12 col-sm-12">
                    <button className="btn-buy">Comprar</button>
                  </div>
                </div>
              </div>
              <div className="col-11 col-sm-11">
                <div className="row no-gutters width-100">
                  <div className="col-12 col-sm-12 txt-description">
                    <span>Descripción del producto</span>
                  </div>
                  <div className="col-12 col-sm-12 txt-content">
                    <span>{item_description.plain_text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;