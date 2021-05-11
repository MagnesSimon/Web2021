import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import ReactDOM from 'react-dom'
import React from 'react';
import Horaire from './components/accueil/horaire';
import Articles from './components/article/Article'
import Connexion from './components/connexion/Connexion'
import Panier from "./components/panier/Panier";


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('horaire contient lundi', () => {
  render(<Horaire></Horaire>);
  const linkElement = screen.getByText(`Lundi`);
  expect(linkElement).toBeInTheDocument();
})

test('article contient text', () => {
  render(<Articles></Articles>);
  const linkElement = screen.getByText(`Liste des Articles`);
  expect(linkElement).toBeInTheDocument();
})

test('button de connexion', () => {
  render(<Connexion></Connexion>);

const submitButton = screen.queryByText('btn btn-primary')
expect(submitButton).not.toBeInTheDocument()
})

test('panier contient text', () => {
  render(<Panier></Panier>);
  const linkElement = screen.getByText(`Lancer la commande`);
  expect(linkElement).toBeInTheDocument();
})

