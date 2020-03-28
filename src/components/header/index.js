import React from "react";
import styles from './Header.module.css';
import { useDispatch, connect, useSelector } from 'react-redux';
import { loadData } from '../../actions/todoActions'
import { Loader } from "../loader";

function Header(props) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(loadData())
  const loading = useSelector(state => state.loading)


  if(loading){
    return <Loader />
  }
  return (
    <header className={styles.header}>
        <span>{props.data.userId}</span>
        <span>{props.data.id}</span>
        <span>{props.data.title}</span>
        <button onClick={onClick}>ok</button>
    </header>
  );
}

export default connect(
  state => ({
    data: state.data,
    loading: state.loading
  }), )(Header);