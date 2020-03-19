import React from "react";
import styles from './Header.module.css';
import { useDispatch, connect } from 'react-redux';
import { loadData } from '../../actions/todoActions'

function Header(props) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(loadData())
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
    data: state.data
  }), )(Header);