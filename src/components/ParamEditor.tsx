import React from 'react';
import { TextField, Button, Stack, Container } from '@mui/material';

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors?: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

class ParamEditor extends React.Component<Props, { paramValues: ParamValue[] }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: this.props.model.paramValues,
    };
  }

  handleParamChange = (paramId: number, value: string) => {
    const updatedValues = this.state.paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );
    this.setState({ paramValues: updatedValues });
  };

  getModel = (): Model => {
    return { ...this.props.model, paramValues: this.state.paramValues };
  };

  handleGetModelClick = () => {
    alert(JSON.stringify(this.getModel()));
  };

  render() {
    const { params } = this.props;

    return (
      <Container
        maxWidth="sm"
        style={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '20vh',
        }}
      >
        <Stack spacing={2}>
          {params.map((param) => (
            <TextField
              key={param.id}
              label={param.name}
              type="text"
              value={this.state.paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
              onChange={(e) => this.handleParamChange(param.id, e.target.value)}
            />
          ))}
          <Button variant="contained" onClick={this.handleGetModelClick}>
            Get Model
          </Button>
        </Stack>
      </Container>
    );
  }
}

export default ParamEditor;
