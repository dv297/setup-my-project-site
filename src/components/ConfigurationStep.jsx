import React from 'react';

function getStepConfigurationLabel({ stepType, stepCount }) {
  let labelText;
  switch (stepType) {
    case ConfigurationStepType.INSTALL:
      labelText = 'Install Packages';
      break;
    case ConfigurationStepType.MODIFY_PACKAGE_JSON:
      labelText = 'Modify package.json';
      break;
    default:
      labelText = stepType.split('-').join(' ');
  }

  return `Step ${stepCount}: ${labelText}`;
}

function getStepConfigurationInput({ stepType, content, ref, stepCount }) {
  switch (stepType) {
    case ConfigurationStepType.INSTALL:
      return (
        <input
          ref={ref}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="prettier@latest"
          defaultValue={content[0].text}
          name={`install-${stepCount}`}
        />
      );
    case ConfigurationStepType.MODIFY_PACKAGE_JSON:
      return (
        <textarea
          ref={ref}
          rows={10}
          className="resize-y border rounded focus:outline-none focus:shadow-outline w-full"
          defaultValue={content[0].text}
          name={`modifypackagejson-${stepCount}`}
        />
      );
    case ConfigurationStepType.CREATE_FILE:
      return (
        <form ref={ref} name={`createfile-${stepCount}`}>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="File Name"
            defaultValue={content[0].text}
            name={`createfile-${stepCount}-0`}
          />
          <textarea
            rows={10}
            className="resize-y border rounded focus:outline-none focus:shadow-outline w-full"
            defaultValue={content[1].text}
            name={`createfile-${stepCount}-1`}
          />
        </form>
      );
    default:
      return null;
  }
}

const ConfigurationStep = (props) => {
  const { stepCount, stepType, content, passThroughRef } = props;

  const stepConfigurationInput = getStepConfigurationInput({ stepType, content, ref: passThroughRef, stepCount });

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {getStepConfigurationLabel({ stepType, stepCount })}
      </h1>
      {stepConfigurationInput}
    </div>
  );
};

const ConfigurationStepType = {
  INSTALL: 'install',
  MODIFY_PACKAGE_JSON: 'modify-package-json',
  CREATE_FILE: 'create-file',
};

export default ConfigurationStep;
export { ConfigurationStepType };
