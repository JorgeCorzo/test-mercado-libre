import React from 'react';
import { useHistory } from 'react-router-dom';
import Shipping from '../assets/ic_shipping@2x.png.png.png';

function ItemExpose({ data }) {
    let history = useHistory();

    function sendDetail(value){
        return new Promise((resolve, reject) => {
            resolve(history.push({
              pathname: `/items/${value}`
            }));
          })
    }

    function toCurrency(value) {
        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        data.map(item => (
            <div className="row no-gutters width-100 center-h item-send" key={item.id} onClick={() => sendDetail(item.id)}>
                <div className="col-3 col-sm-3 center-h">
                    <img alt={item.id} src={item.thumbnail} className="image-items" />
                </div>
                <div className="col-7 col-sm-7">
                    <div className="row">
                        <div className="col-4 col-sm-4">
                            <span className="txt-price">{toCurrency(item.price)}</span>
                        </div>
                        <div className="col-7 col-sm-7">
                            {item.shipping.free_shipping ? <img alt={item.id} src={Shipping} /> : null}
                        </div>
                        <div className="col-12 col-sm-12 space-title">
                            <span className="txt-title">{item.title}</span>
                        </div>
                        <div className="col-12 col-sm-12">
                            <span className="txt-title">{item.condition}</span>
                        </div>
                    </div>
                </div>
                <div className="col-2 col-sm-2 space-city">
                    <span className="txt-city">{item.address.state_name}</span>
                </div>
                <div className="col-12 col-sm-11 line-h"/>
            </div>
        ))
    );
}

export default ItemExpose;