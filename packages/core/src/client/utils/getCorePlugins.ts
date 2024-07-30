import { isDefined } from '@udecode/utils';

import type { PlateProps } from '../components';

import {
  DeserializeAstPlugin,
  DeserializeHtmlPlugin,
  EditorProtocolPlugin,
  EventEditorPlugin,
  HistoryPlugin,
  InlineVoidPlugin,
  InsertDataPlugin,
  KEY_DESERIALIZE_AST,
  KEY_DESERIALIZE_HTML,
  KEY_EDITOR_PROTOCOL,
  KEY_EVENT_EDITOR,
  KEY_INLINE_VOID,
  KEY_INSERT_DATA,
  KEY_LENGTH,
  KEY_NODE_FACTORY,
  KEY_PREV_SELECTION,
  LengthPlugin,
  NodeFactoryPlugin,
  type PlateEditor,
  type PlatePlugin,
  PrevSelectionPlugin,
} from '../../shared';
import { ReactPlugin } from '../plugins';

export const getCorePlugins = (
  editor: PlateEditor,
  {
    disableCorePlugins,
    maxLength,
  }: Pick<PlateProps, 'disableCorePlugins' | 'maxLength'> = {}
) => {
  const plugins: PlatePlugin[] = [];

  if (disableCorePlugins !== true) {
    const dcp = disableCorePlugins;

    if (typeof dcp !== 'object' || !dcp?.react) {
      plugins.push((editor?.pluginsByKey?.react as any) ?? ReactPlugin);
    }
    if (typeof dcp !== 'object' || !dcp?.history) {
      plugins.push((editor?.pluginsByKey?.history as any) ?? HistoryPlugin);
    }
    if (typeof dcp !== 'object' || !dcp?.nodeFactory) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_NODE_FACTORY] as any) ?? NodeFactoryPlugin
      );
    }
    if (typeof dcp !== 'object' || !dcp?.eventEditor) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_EVENT_EDITOR] as any) ?? EventEditorPlugin
      );
    }
    if (typeof dcp !== 'object' || !dcp?.inlineVoid) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_INLINE_VOID] as any) ?? InlineVoidPlugin
      );
    }
    if (typeof dcp !== 'object' || !dcp?.insertData) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_INSERT_DATA] as any) ?? InsertDataPlugin
      );
    }
    if (typeof dcp !== 'object' || !dcp?.selection) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_PREV_SELECTION] as any) ??
          PrevSelectionPlugin
      );
    }
    if ((typeof dcp !== 'object' || !dcp?.length) && isDefined(maxLength)) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_LENGTH] as any) ??
          LengthPlugin.configure({
            maxLength,
          })
      );
    }
    if (typeof dcp !== 'object' || !dcp?.deserializeHtml) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_DESERIALIZE_HTML] as any) ??
          DeserializeHtmlPlugin
      );
    }
    if (typeof dcp !== 'object' || !dcp?.deserializeAst) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_DESERIALIZE_AST] as any) ??
          DeserializeAstPlugin
      );
    }
    if (typeof dcp !== 'object' || !dcp?.editorProtocol) {
      plugins.push(
        (editor?.pluginsByKey?.[KEY_EDITOR_PROTOCOL] as any) ??
          EditorProtocolPlugin
      );
    }
  }

  return plugins;
};
