import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock';
import { FormatQuote, LooksOne, LooksTwo } from '@styled-icons/material';
import {
  BlockquotePlugin,
  CodeBlockPlugin,
  CodePlugin,
  EditablePlugins,
  ExitBreakPlugin,
  HeadingPlugin,
  HeadingToolbar,
  ListPlugin,
  ParagraphPlugin,
  ResetBlockTypePlugin,
  SlatePlugin,
  SlatePlugins,
  SoftBreakPlugin,
  TablePlugin,
  ToolbarElement,
  withList,
  withTrailingNode,
} from '@udecode/slate-plugins';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';
import {
  headingTypes,
  initialValueExitBreak,
  options,
  optionsResetBlockTypes,
} from '../config/initialValues';

const id = 'Handlers/Exit Break';

export default {
  title: id,
  component: ExitBreakPlugin,
};

const withPlugins = [
  withReact,
  withHistory,
  withList(options),
  withTrailingNode({ type: options.p.type }),
] as const;

export const Example = () => {
  const plugins: SlatePlugin[] = [
    ParagraphPlugin(options),
    HeadingPlugin(options),
    CodeBlockPlugin(options),
    BlockquotePlugin(options),
    CodePlugin(options),
    ListPlugin(options),
    TablePlugin(options),
    ResetBlockTypePlugin(optionsResetBlockTypes),
  ];
  if (boolean('SoftBreakPlugin', true))
    plugins.push(
      SoftBreakPlugin({
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: [options.code_block.type, options.blockquote.type],
            },
          },
        ],
      })
    );
  if (boolean('ExitBreakPlugin', true))
    plugins.push(
      ExitBreakPlugin({
        rules: [
          {
            hotkey: 'mod+enter',
          },
          {
            hotkey: 'mod+shift+enter',
            before: true,
          },
          {
            hotkey: 'enter',
            query: {
              start: true,
              end: true,
              allow: headingTypes,
            },
          },
        ],
      })
    );

  const createReactEditor = () => () => {
    return (
      <SlatePlugins
        id={id}
        initialValue={initialValueExitBreak}
        withPlugins={withPlugins}
      >
        <HeadingToolbar>
          <ToolbarElement type={options.h1.type} icon={<LooksOne />} />
          <ToolbarElement type={options.h2.type} icon={<LooksTwo />} />
          <ToolbarElement
            type={options.blockquote.type}
            icon={<FormatQuote />}
          />
          <ToolbarElement type={options.code_block.type} icon={<CodeBlock />} />
        </HeadingToolbar>
        <EditablePlugins
          id={id}
          plugins={plugins}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
        />
      </SlatePlugins>
    );
  };

  const Editor = createReactEditor();

  return <Editor />;
};
