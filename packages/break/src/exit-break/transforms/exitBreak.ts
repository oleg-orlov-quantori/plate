import {
  ELEMENT_DEFAULT,
  type PlateEditor,
  getPath,
  getPluginType,
  insertElements,
} from '@udecode/plate-common/server';
import { Path } from 'slate';

import type { ExitBreakRule } from '../types';

import { exitBreakAtEdges } from '../queries/exitBreakAtEdges';

export const exitBreak = (
  editor: PlateEditor,
  {
    before,
    defaultType = getPluginType(editor, ELEMENT_DEFAULT),
    level = 0,
    query = {},
    relative = false,
  }: Omit<ExitBreakRule, 'hotkey'>
) => {
  if (!editor.selection) return;

  const { isEdge, isStart, queryEdge } = exitBreakAtEdges(editor, query);

  if (isStart) before = true;
  if (queryEdge && !isEdge) return;

  const selectionPath = getPath(editor, editor.selection);

  const slicedPath = relative
    ? selectionPath.slice(0, -level)
    : selectionPath.slice(0, level + 1);

  const insertPath = before ? slicedPath : Path.next(slicedPath);

  insertElements(
    editor,
    { children: [{ text: '' }], type: defaultType },
    {
      at: insertPath,
      select: !isStart,
    }
  );

  return true;
};
