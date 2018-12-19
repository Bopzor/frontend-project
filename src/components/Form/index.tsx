import * as React from 'react';

import { hot } from 'react-hot-loader';

import Typography from '../Typography';
import Input from '../Input';

class Form extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChange(email: string) {
    this.setState({ email });
  }

  onPasswordChange(pwd: string) {
    this.setState({ password: pwd });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ width: 275 }}>
          <Typography variant="label">ADRESSE EMAIL</Typography>
          <Input onChange={() => this.onEmailChange(this.state.email)} value={this.state.email} />
        </div>

        <div style={{ width: 275 }}>
          <Typography variant="label">MOT DE PASSE</Typography>
          <Input
            defaultValue="password"
            type="password"
            onChange={() => this.onPasswordChange(this.state.password)}
            value={this.state.password}
          />
        </div>

        <Typography variant="link">J'ai oublié mon mot de passe</Typography>

        <button onSubmit={() => this.props.onSubmit(this.state.email, this.state.password)}>
          Continuer
        </button>
      </div>
    );
  }
}

export default hot(module)(Form);