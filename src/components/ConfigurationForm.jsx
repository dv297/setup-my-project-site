import React, { useState } from 'react';
import FormField from './FormField';
import ConfigurationStep from './ConfigurationStep';

const StepTemplates = {
  INSTALL: {
    id: 0,
    stepType: 'install',
    content: [
      {
        text: '',
      },
    ],
  },
  MODIFY_PACKAGE_JSON: {
    id: 0,
    stepType: 'modify-package-json',
    content: [
      {
        text: '',
      },
    ],
  },
  CREATE_FILE: {
    id: 0,
    stepType: 'create-file',
    content: [
      {
        text: '',
      },
      {
        text: '',
      },
    ],
  },
};

const ConfigurationStepCard = (props) => {
  const { title, description, onClick } = props;

  return (
    <div className="w-1/3 px-2">
      <button onClick={onClick} className="bg-orange-200 rounded-lg overflow-hidden shadow-lg h-full pb-8">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </button>
    </div>
  );
};

const ConfigurationForm = (props) => {
  const { initialConfiguration } = props;
  const [configuration, setConfiguration] = useState(initialConfiguration);
  const [isRequestingStepAdded, setIsRequestingStep] = useState(false);

  const stepRefs = configuration.steps.map(() => React.createRef(null));

  const handleSubmit = () => {
    console.log('Submit');
    const results = stepRefs.reduce((acc, ref) => {
      // In the simple case where there is only one input field to pull from
      if (ref.current.value) {
        return {
          ...acc,
          [ref.current.name]: ref.current.value,
        };
      }
      // In the case where the input may have multiple input fields to pull from
      else {
        // Loop through the elements underneath the ref and find their values
        const subresult = [...ref.current.elements].reduce((subacc, element) => {
          return {
            ...subacc,
            [element.name]: element.value,
          };
        }, {});

        return {
          ...acc,
          [ref.current.name]: subresult,
        };
      }
    }, {});

    console.log(results);
  };

  const handleAddingStep = ({ type }) => {
    setConfiguration({
      ...configuration,
      steps: [...configuration.steps, StepTemplates[type]],
    });

    setIsRequestingStep(false);
  };

  return (
    <div>
      <FormField>
        <h1 className="text-2xl font-semibold text-gray-900">Steps</h1>
      </FormField>
      {configuration &&
        configuration.steps.map((step, index) => (
          <ConfigurationStep
            passThroughRef={stepRefs[index]}
            stepCount={index}
            stepType={step.stepType}
            key={step.id}
            content={step.content}
          />
        ))}
      {isRequestingStepAdded && (
        <>
          <FormField>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              What type of step would you like to add?
            </label>
          </FormField>

          <div className="px-2 mb-6">
            <div className="flex -mx-2">
              <ConfigurationStepCard
                title="Install Packages"
                description="Install any NPM packages your project might need"
                onClick={() => handleAddingStep({ type: 'INSTALL' })}
              />
              <ConfigurationStepCard
                title="Modify package.json"
                description="Make modifications to your project's package.json"
                onClick={() => handleAddingStep({ type: 'MODIFY_PACKAGE_JSON' })}
              />
              <ConfigurationStepCard
                title="Create file"
                description="Create any files your project might need"
                onClick={() => handleAddingStep({ type: 'CREATE_FILE' })}
              />
            </div>
          </div>
        </>
      )}
      <FormField>
        <div className="inline mr-2">
          {isRequestingStepAdded ? (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsRequestingStep(false)}
            >
              Cancel
            </button>
          ) : (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsRequestingStep(true)}
            >
              Add Step
            </button>
          )}
        </div>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
          Save Configuration
        </button>
      </FormField>
    </div>
  );
};

export default ConfigurationForm;
