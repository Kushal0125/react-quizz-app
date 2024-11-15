
import React from 'react';
import Header from './components/Header';
import Item from './components/Todoitems';
import Counter from './components/counter-components';
import ContactPage from './components/contact.jsx';
import Quiz from './components/Quiz.jsx';

const App = () => {
  return <div>
    <Quiz />
    <ContactPage />
    <Header tag="MyTodo" />
    <Counter />
    <Item text="eat" />
    <Item text="work" />
    <Item text="sleep" />
  </div>
}

export default App;
