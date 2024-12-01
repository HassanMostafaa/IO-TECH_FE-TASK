module.exports = function (plop) {
  plop.addHelper("upperCase", function (text) {
    return text.toUpperCase();
  });

  const pascalCase = (s) =>
    s.replace(/\w+/g, function (w) {
      return w[0].toUpperCase() + w.slice(1);
    });

  const files = {
    mainComponent: "plop-templates/main-component.js",
    styledComponent: "plop-templates/styled-component.js",
    storybookStory: "plop-templates/storybook-story.js",
    cssSnippet: "plop-templates/css.js",
    indexFile: "plop-templates/index-file.js",
  };

  const createIndexFile = {
    type: "add",
    path: "src/components/{{kebabCase name}}/index.ts",
    templateFile: files.indexFile,
  };

  const createFunctionComponent = {
    type: "add",
    path: "src/components/{{kebabCase name}}/{{pascalCase name}}.tsx",
    templateFile: files.mainComponent,
  };

  const createStyle = {
    type: "add",
    path: "src/components/{{kebabCase name}}/styles/S{{pascalCase name}}.tsx",
    templateFile: files.styledComponent,
  };

  const createStyledComp = {
    type: "add",
    path: "src/components/{{kebabCase name}}/styles/S{{pascalCase name}}{{pascalCase suffix}}.tsx",
    templateFile: files.styledComponent,
  };

  const createCssSnippet = {
    type: "add",
    path: "src/components/{{kebabCase name}}/styles/CSS{{pascalCase name}}{{pascalCase suffix}}.tsx",
    templateFile: files.cssSnippet,
  };

  const createStory = {
    type: "add",
    path: "src/components/{{kebabCase name}}/{{pascalCase name}}.stories.tsx",
    templateFile: files.storybookStory,
  };

  plop.setActionType("Usage:", function (answers) {
    const { name, suffix } = answers;
    if (name && suffix) {
      return `Usage: 
      <S${pascalCase(name)}${pascalCase(suffix)}/>
      <S${pascalCase(name)}${pascalCase(suffix)}> </S${pascalCase(name)}${pascalCase(suffix)}>
      `;
    }
    if (name) {
      return `Usage: 
      <S${pascalCase(name)}/>
      <S${pascalCase(name)}> </S${pascalCase(name)}>
      `;
    }
    return ``;
  });

  const getComponentName = {
    type: "input",
    name: "name",
    message: "What is the component name?",
    validate: function (value) {
      if (/.+/.test(value)) {
        return true;
      }
      return "name is required";
    },
  };

  const getStyleSuffix = {
    type: "input",
    name: "suffix",
    message: "What is the styled component suffix?",
    validate: function (value) {
      if (/.+/.test(value)) {
        return true;
      }
      return "suffix is required";
    },
  };

  const args = process.argv.slice(2); // Grab the arguments passed

  plop.setGenerator("fc", {
    description: "Function Component",
    prompts: function () {
      if (args[1]) {
        return []; // Skip prompts if name is provided
      }
      return [getComponentName];
    },
    actions: function (data) {
      if (args[1]) {
        data.name = args[1];
      }
      return [
        createIndexFile,
        createFunctionComponent,
        createStyle,
        createStory,
        {
          type: "Usage:",
        },
      ];
    },
  });

  plop.setGenerator("s", {
    description: "Styled Component",
    prompts: function () {
      if (args[1]) {
        return [getStyleSuffix]; // Skip name prompt but ask for suffix
      }
      return [getComponentName, getStyleSuffix];
    },
    actions: function (data) {
      if (args[1]) {
        data.name = args[1];
      }
      return [
        createStyledComp,
        {
          type: "Usage:",
        },
      ];
    },
  });

  plop.setGenerator("css", {
    description: "Css Snippet",
    prompts: function () {
      if (args[1]) {
        return [getStyleSuffix]; // Skip name prompt but ask for suffix
      }
      return [getComponentName, getStyleSuffix];
    },
    actions: function (data) {
      if (args[1]) {
        data.name = args[1];
      }
      return [createCssSnippet];
    },
  });
};
