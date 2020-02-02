import React from 'react';
import { ReactComponent as CoderSvg } from '../assets/undraw_Organizing_projects_0p9a.svg';
//

const Home = () => {
  return (
    <div className="flex flex-col justify-center container max-w-full p-8 sm:p-2 md:p-8 items-center">
      <div className="flex flex-wrap justify-center align-middle max-w-screen-lg">
        <div className="flex flex-col justify-center items-center w-full sm:w-full md:w-1/2 p-4">
          <p className="text-3xl font-medium text-center mb-8">Simplify copying your configs for every new project!</p>
          <div className="rounded-lg bg-gray-700 p-8 text-white w-full border-solid border-blue-600 border-4">
            <p>> npm install -g setup-my-project</p>
            <p>> setup-my-project</p>
          </div>
        </div>
        <div className="flex justify-center align-middle w-full sm:w-full md:w-1/2">
          <CoderSvg title="A coder at work" className="max-w-md sm:max-w-sm md:max-w-md object-cover object-center" />
        </div>
      </div>
      <div>
        <p className="text-xl leading-8">
          <strong>Setup My Project</strong> is a CLI tool to help you copy standardized configuration from project to
          project. By setting up templates for common tooling you use once, you can duplicate the same dependencies and
          configuration for those dependencies using the CLI. The CLI will walk you through everything you need!
        </p>
      </div>
    </div>
  );
};

export default Home;
