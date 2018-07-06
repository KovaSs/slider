import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
            <div className="vraper">
              <SayFullName name="Денис" surname="Исаев" link="https://vk.me/kovass" />
              <SayFullName name="Мария" surname="Русецкая" link="https://vk.me/kovass" />
              <SayFullName name="Алексей" surname="Кутепов" link="https://vk.me/kovass" />
            </div>
    );
  }
}

function SayFullName(props) {
  return (
          <div>
            <h1> Меня зовут {props.name}, и моя фамилия {props.surname} </h1>
            <a target="_blank" href={props.link}> Сылка на мой профиль </a>
          </div>
    )
}

export default App;
