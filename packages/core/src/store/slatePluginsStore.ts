import { createEditor } from 'slate';
import { StoreApi } from 'zustand';
import createVanillaStore from 'zustand/vanilla';
import { SlatePluginsState, State } from '../types/SlatePluginsState';
import { pipe } from '../utils/pipe';
import { withRandomKey } from '../with/randomKeyEditor';
import { getInitialState } from './getInitialState';
import { getSetter } from './getSetter';

export type SlatePluginsStore = StoreApi<SlatePluginsState>;

/**
 * Slate plugins zustand store.
 */
export const slatePluginsStore = createVanillaStore<SlatePluginsState>(
  (set, get) => ({
    byId: {},
    setComponents: getSetter<State['components']>({
      set,
      key: 'components',
    }),
    setEditor: getSetter<State['editor']>({
      set,
      key: 'editor',
    }),
    setPlugins: getSetter<State['plugins']>({
      set,
      key: 'plugins',
    }),
    setValue: getSetter<State['value']>({
      set,
      key: 'value',
    }),
    setInitialState: (id = 'main') =>
      set((state) => {
        if (state.byId[id]) return state;

        return {
          byId: {
            ...state.byId,
            [id]: getInitialState(),
          },
        };
      }),
    setWithPlugins: (value, id = 'main') => {
      // const stateById = get().byId[id];

      // FIXME: redo is not working
      // const editorSingleton = stateById.editor
      //   ? (stateById.editor as Editor)
      //   : createEditor();

      // Clone the original methods of the editor
      // const editorMethods: FunctionProperties<Editor> = {
      //   insertBreak: editorSingleton.insertBreak,
      //   isVoid: editorSingleton.isVoid,
      //   insertNode: editorSingleton.insertNode,
      //   addMark: editorSingleton.addMark,
      //   apply: editorSingleton.apply,
      //   deleteBackward: editorSingleton.deleteBackward,
      //   deleteForward: editorSingleton.deleteForward,
      //   deleteFragment: editorSingleton.deleteFragment,
      //   getFragment: editorSingleton.getFragment,
      //   insertFragment: editorSingleton.insertFragment,
      //   insertText: editorSingleton.insertText,
      //   isInline: editorSingleton.isInline,
      //   normalizeNode: editorSingleton.normalizeNode,
      //   onChange: editorSingleton.onChange,
      //   removeMark: editorSingleton.removeMark,
      // };
      //
      // for (const [key, method] of Object.entries(editorMethods)) {
      //   editorSingleton[key] = method;
      // }

      const editorSingleton = createEditor();

      const editor = pipe(editorSingleton, withRandomKey, ...value);

      get().setEditor(editor, id);
    },
  })
);
