import React, { useState } from 'react';
import Select from '../components/Select';
import ConfigurationForm from '../components/ConfigurationForm';
import { withOktaAuth } from '@okta/okta-react';

const state = {
  configurationOptions: [
    {
      id: 0,
      name: 'Prettier',
    },
    {
      id: 1,
      name: 'ESLint',
    },
  ],
  selectedConfiguration: {
    steps: [
      {
        id: 0,
        stepType: 'install',
        content: [
          {
            text: 'prettier@latest eslint@latest',
          },
        ],
      },
      {
        id: 1,
        stepType: 'modify-package-json',
        content: [
          {
            text: `
{
  "scripts": {
    "format" : "prettier"
  }
}
`.trim(),
          },
        ],
      },
      {
        id: 2,
        stepType: 'create-file',
        content: [
          {
            text: 'prettier.config.js',
          },
          {
            text: 'module.exports = {}',
          },
        ],
      },
    ],
  },
};

const ConfigurationPage = (props) => {
  const [selectedConfigurationId, setSelectedConfigurationId] = useState(null);
  const [configuration, setConfiguration] = useState(null);

  const onConfigurationChange = (id) => {
    setSelectedConfigurationId(id);
    // TODO: mocking for now
    setConfiguration(state.selectedConfiguration);
  };

  return (
    <div className="container mx-auto p-8">
      <Select
        label="Select your configuration"
        options={state.configurationOptions.map((option) => ({ id: option.id, text: option.name }))}
        value={selectedConfigurationId}
        onChange={onConfigurationChange}
      />
      {configuration && <ConfigurationForm initialConfiguration={configuration} />}
    </div>
  );
};

export default withOktaAuth(ConfigurationPage);
