import * as React from 'react';

import { hot } from 'react-hot-loader';

import Typography from '../Typography';
import Input from '../Input';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ marginTop: 20, marginBottom: 15 }}>

          <div style={{ minWidth: 315 }}>
            <Typography variant="label">ADRESSE EMAIL</Typography>
            <Input onChange={e => this.onEmailChange(e)} value={this.state.email} />
          </div>

          <div style={{ minWidth: 315 }}>
            <Typography variant="label">MOT DE PASSE</Typography>
            <Input
              defaultValue="password"
              type="password"
              onChange={e => this.onPasswordChange(e)}
              value={this.state.password}
            />
          </div>

          <div style={{ textAlign: 'center', margin: '8px 0' }}>
            <Typography variant="link" style={{ fontSize: 13 }}>J'ai oublié mon mot de passe</ Typography>
          </div>

        </div>


        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            backgroundImage: 'linear-gradient(95deg, #3a44e9, #7038e3)',
            minHeight: 44,
            minWidth: 315,
          }}
        >
          <Typography
            style={{
              color: '#fff',
              fontWeight: '500',
            }}
            onSubmit={() => this.props.onSubmit(this.state.email, this.state.password)}
          >
            CONTINUER
          </Typography>
        </div>
      </div>
    );
  }
}

export default hot(module)(Form);