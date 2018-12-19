import * as React from 'react';

import { hot } from 'react-hot-loader';


/**
 * Normalize css with side effect
 */
import './theme/css-baseline';

import Typography from './components/Typography';
import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  onSubmit(email: string, pwd: string) {
    // API CALL NEEDED
  }


  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          margin: '30px 15px'
        }}
      >
        <Header />

        <Typography
          color="text"
          align="center"
          variant="main-title"
          style={{
            letterSpacing: '-0.24px'
          }}
        >
          Connexion
        </Typography>

        <Typography
          color="text"
          align="center"
          style={{
            letterSpacing: '-0.24px'
          }}
        >
          Merci d’utiliser l’adresse email et le mot de passe que vous avez indiqués lors de votre
          inscription.
        </Typography>

        <Form
          onSubmit={(email: string, pwd: string) => this.onSubmit(email, pwd)}
        />
      </div>
    );
  }
}

export default hot(module)(App);
