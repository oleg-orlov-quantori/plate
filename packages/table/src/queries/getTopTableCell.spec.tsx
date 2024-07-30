/** @jsx jsx */

import {
  type PlateEditor,
  type TElement,
  createPlateEditor,
} from '@udecode/plate-common';
import { jsx } from '@udecode/plate-test-utils';

import { createTablePlugin } from '../TablePlugin';
import { getTopTableCell } from './getTopTableCell';

jsx;

const createTablePluginWithOptions = () => createTablePlugin();

const createEditorInstance = (input: any) => {
  return createPlateEditor({
    editor: input,
    plugins: [createTablePluginWithOptions()],
  });
};

describe('getTopTableCell', () => {
  const input = (
    <editor>
      <htable>
        <htr>
          <htd>
            <hp>11</hp>
          </htd>
          <htd>
            <hp>12</hp>
          </htd>
        </htr>
        <htr>
          <htd>
            <hp>21</hp>
          </htd>
          <htd>
            <hp>
              22
              <cursor />
            </hp>
          </htd>
        </htr>
      </htable>
    </editor>
  ) as any as PlateEditor;

  it('should return the cell above the current cell', () => {
    const editor = createEditorInstance(input);
    const cellAbove = getTopTableCell(editor);
    expect((cellAbove?.[0].children as TElement[])[0].children[0].text).toEqual(
      '12'
    );
  });

  it('should return undefined if the current cell is in the first row', () => {
    const editor = createEditorInstance(input);
    editor.selection = {
      anchor: { offset: 0, path: [0, 0, 0] },
      focus: { offset: 0, path: [0, 0, 0] },
    };
    const cellAbove = getTopTableCell(editor, {
      at: editor.selection.anchor.path,
    });
    expect(cellAbove).toBeUndefined();
  });

  it('should return undefined if no matching cell is found', () => {
    const emptyEditor = createEditorInstance([]);
    const cellAbove = getTopTableCell(emptyEditor);
    expect(cellAbove).toBeUndefined();
  });
});
