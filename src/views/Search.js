import React, { useEffect, useState } from 'react';
import ItemExpose from '../components/ItemExpose';
import Pagination from '../components/Pagination';
import SearchingBar from '../components/SearchingBar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/setProducts';
import useQuery from '../hooks/useQuery';

function Search() {
  const dispatch = useDispatch();
  const query = useQuery()
  const searchName = query.get('search') || '';
  const [separator] = useState('>')
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const products = useSelector(state => state.products.products)

  useEffect(() => {
    dispatch(getProducts(searchName))
  }, [])

  useEffect(() => {
    if (products.categories) {
      setCategories(products.categories)
      setItems(products.items)
    }
  }, [products])

  function getData(value) {
    window.location.href = '/items?search=' + value
  }

  function paginate(value){
    setCurrentPage(value)
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

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
          <div className="col-10 col-sm-9" id="box-items">
            <ItemExpose data={currentItems} />
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} params={searchName} paginate={paginate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;