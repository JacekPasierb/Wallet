import React from 'react'
import { useSelector } from 'react-redux';
import { transactions } from '../../redux/transactionsSelector';

const HomePage = () => {
    const transactionsAll = useSelector(transactions);
  return (
      <ul>{transactionsAll.map(trans => <li key={trans.id}><p>{trans.category}</p><p>{ trans.value}</p></li>)}</ul>
  )
}

export default HomePage