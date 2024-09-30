/* eslint-disable max-len */
import * as themes from '@codesandbox/sandpack-themes';
import {
  CodeEditorProps,
  SANDBOX_TEMPLATES,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackTests,
  SandpackPreview,
  SandpackProvider,
  SandpackConsole,
  Sandpack,
} from 'sandpack-vue3';
import { computed, ComputedRef, reactive, ref, type StyleValue } from 'vue';

export default {
  title: 'Intro/Playground',
};

export const Main = () => {
  const config = reactive({
    Components: {
      Preview: true,
      Editor: true,
      FileExplorer: true,
      Console: true,
      Tests: true,
    },
    Options: {
      showTabs: true,
      showLineNumbers: true,
      showInlineErrors: true,
      closableTabs: true,
      wrapContent: false,
      readOnly: false,
      showReadOnly: true,
      showNavigator: true,
      showRefreshButton: true,
      consoleShowHeader: true,
      showConsoleButton: true,
      showConsole: true,
    },
    Template: 'exhaustedFilesTests' as const,
    Theme: 'light',
  });

  const update = (key: any, value: any): void => {
    // @ts-ignore
    config[key] = value;
  };

  const toggle = (key: any, value: any): void => {
    console.log(key);
    // @ts-ignore
    config[key] = { ...config[key], [value]: !config[key][value] };
  };

  const codeEditorOptions: ComputedRef<CodeEditorProps> = computed(() => ({
    showTabs: config.Options.showTabs,
    showLineNumbers: config.Options.showLineNumbers,
    showInlineErrors: config.Options.showInlineErrors,
    wrapContent: config.Options.wrapContent,
    closableTabs: config.Options.closableTabs,
    readOnly: config.Options.readOnly,
    showReadOnly: config.Options.showReadOnly,
  }));

  return () => (
    <div style={{ display: 'flex' } as StyleValue}>
      <div style={{ marginRight: '2em', minWidth: '200px' } as StyleValue}>
        {Object.entries(config).map(([key, value]) => {
          if (typeof value === 'string') {
            if (key === 'Template') {
              return (
                <div>
                  <h3>Template</h3>
                  <select
                    // @ts-ignore
                    onChange={({ target }): void => update('Template', target?.value)
                    }
                    value={config.Template}
                  >
                    <option value="exhaustedFilesTests">
                      exhaustedFilesTests
                    </option>
                    {Object.keys(SANDBOX_TEMPLATES).map((tem) => (
                      <option value={tem}>{tem}</option>
                    ))}
                  </select>
                </div>
              );
            }

            if (key === 'Theme') {
              return (
                <div>
                  <h3>Themes</h3>
                  <select
                    // @ts-ignore
                    onChange={({ target }): void => update('Theme', target.value)
                    }
                    value={config.Theme}
                  >
                    <option value="auto">Auto</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    {Object.keys(themes).map((tem) => (
                      <option value={tem}>{tem}</option>
                    ))}
                  </select>
                </div>
              );
            }

            return value;
          }

          return (
            <>
              <h3>{key}(<a href="http://github.com/jerrywu001/sandpack-vue3" target="_blank">github</a>)</h3>
              {Object.entries(value).map(([prop, propValue]) => (
                  <p>
                    <label>
                      <input
                        // @ts-ignore
                        defaultChecked={!!propValue}
                        onClick={(): void => toggle(key, prop)}
                        type="checkbox"
                      />
                      {prop}
                    </label>
                  </p>
              ))}
            </>
          );
        })}
      </div>

      <div>
        <SandpackProvider
          customSetup={{
            dependencies:
              config.Template === 'exhaustedFilesTests'
                // @ts-ignore
                ? exhaustedFilesTests.dependencies
                : {},
          }}
          files={
            config.Template === 'exhaustedFilesTests'
              ? exhaustedFilesTests.files
              : {}
          }
          template={
            config.Template === 'exhaustedFilesTests' ? undefined : config.Template
          }
          theme={themes[config.Theme] || config.Theme}
        >
          <SandpackLayout>
            <div class="playground-grid">
              {config.Components.FileExplorer && <SandpackFileExplorer />}
              {config.Components.Editor && (
                <>
                  {/* @ts-ignore */}
                  <SandpackCodeEditor {...codeEditorOptions.value} />
                </>
              )}
              {config.Components.Preview && (
                <SandpackPreview
                  showNavigator={config.Options?.showNavigator}
                  showRefreshButton={config.Options?.showRefreshButton}
                />
              )}

              {config.Components.Console && (
                <SandpackConsole
                  showHeader={config.Options.consoleShowHeader}
                />
              )}
              {config.Components.Tests && <SandpackTests />}
            </div>
          </SandpackLayout>
        </SandpackProvider>

        <br />

        <Sandpack
          customSetup={{
            dependencies:
              config.Template === 'exhaustedFilesTests'
                // @ts-ignore
                ? exhaustedFilesTests.dependencies
                : {},
          }}
          files={
            config.Template === 'exhaustedFilesTests'
              ? exhaustedFilesTests.files
              : {}
          }
          options={{
            ...config.Options,
            resizablePanels: false,
          }}
          template={
            config.Template === 'exhaustedFilesTests' ? undefined : config.Template
          }
          theme={themes[config.Theme] || config.Theme}
        />
      </div>
    </div>
  );
};

export const Resizable = () => (
  <>
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '4em 0' } as StyleValue}>
      <Sandpack
        files={{
          '/App.js': `export default function Example() {
  return (
  <div className="flex h-screen px-4">
    <div className="m-auto max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Company retreats
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>

          <button className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" onClick={() => console.log("click")}>
            See more
          </button>
        </div>
      </div>
    </div>
  </div>
  );
  }`,
        }}
        options={{
          externalResources: ['https://cdn.tailwindcss.com'],
          showLineNumbers: true,
          showConsole: false,
          showConsoleButton: true,
          resizablePanels: true,
          editorHeight: 700,
        }}
        template="react"
      />
    </div>
  </>
);

const defaultTemplate = SANDBOX_TEMPLATES['react-ts'];

const exhaustedFilesTests = {
  ...defaultTemplate,
  files: {
    '/src/index.tsx': defaultTemplate.files['/index.tsx'],
    '/src/App.tsx': `console.log("Hello world");\n\n${defaultTemplate.files['/App.tsx'].code}`,
    '/src/App.test.tsx': `import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Hello world')).toBeInTheDocument();
});`,
    '/src/styles.css': defaultTemplate.files['/styles.css'],
    '/package.json': JSON.stringify({
      dependencies: {
        react: '^18.0.0',
        'react-dom': '^18.0.0',
        'react-scripts': '^4.0.0',
        '@testing-library/react': '^13.3.0',
        '@testing-library/jest-dom': '^5.16.5',
      },
      devDependencies: {
        '@types/react': '^18.0.0',
        '@types/react-dom': '^18.0.0',
        typescript: '^4.0.0',
      },
      main: '/add.ts',
    }),
  },
};

export const BasicConsole = () => {
  const files = {
    '/index.js': `const helloWorld = "";

console.log("foo");`,

    '/.eslintrc.js': `module.exports = {
  rules: {
    "no-unused-vars": "error",
    "no-console": "error",
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
}
`,

    '/package.json': JSON.stringify({
      devDependencies: {
        eslint: '^8.0.1',
      },
      scripts: { start: 'eslint index.js' },
    }),
  };

  return (
    <SandpackProvider
      files={files}
      options={{
        initMode: 'immediate',
        // editorHeight: 300, // TODO
      }}
      template="node"
    >
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers />
        <SandpackConsole showSetupProgress />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const Basic = () => (
  <Sandpack
    options={{ classes: { 'sp-layout': 'fooo' } }}
    template="react-ts"
    theme={themes.cobalt2}
  />
);

export const FileContent = () => {
  const text = ref('world');

  return () => (
    <>
      <input
        value={text.value}
        // @ts-ignore
        onKeyup={({ target }) => { text.value = target?.value; }}
      />
      <Sandpack
        files={{
          'App.js': `export default function App() {
  return <h1>Hello ${text.value}</h1>
}
`,
        }}
        template="react"
      />
    </>
  );
};
