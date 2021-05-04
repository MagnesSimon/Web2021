import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import React from 'react';
import Horaire from './components/accueil/horaire';
import Articles from './components/article/Article'
import Connexion from './components/connexion/Connexion'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(`Boulangerie Lonbois de Braine l'Alleud`);
  expect(linkElement).toBeInTheDocument();
});

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

const submitButton = screen.queryByText('connection')
expect(submitButton).not.toBeInTheDocument()

})
