import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

function SearchingBar(props) {
  const txtInput = useRef('');

  function setSearch(event){
    if(txtInput.current.value !== null & txtInput.current.value !== ''){
      if(event.key === 'Enter'){
        props.event(txtInput.current.value)
      } 
    }
  }

  function setBtnSearch(){
    if(txtInput.current.value !== null & txtInput.current.value !== ''){
      props.event(txtInput.current.value)
    }
  }

  return (
    <div className="row no-gutters width-100 center-h">
      <div className="col-2 col-sm-2 col-md-2 col-lg-1 center-v">
        <Link to="/" className="img-logo" />
      </div>
      <div className="col-9 col-sm-7 col-md-7 col-lg-8 center-v relative">
        <input type="text" placeholder="Nunca dejes de buscar" id="border-not" className="input-search" onKeyPress={setSearch} ref={txtInput}></input>
        <button className="btn-search" id="border-not" onClick={setBtnSearch}/>
      </div>
    </div>
  );
}

export default SearchingBar;