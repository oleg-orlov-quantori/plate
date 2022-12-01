module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Plate',
      items: ['plate/introduction', 'plate/contributing'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/basic-editor',
        'getting-started/basic-plugins',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/Plate',
        'guides/plugins',
        'guides/styling',
        'guides/store',
        'guides/multiple-editors',
        'guides/typescript',
        'guides/cloud',
      ],
      collapsed: false,
    },
    'playground',
    {
      type: 'category',
      label: 'Plugins',
      items: [
        {
          type: 'category',
          label: 'Blocks',
          items: [
            'plugins/alignment',
            'plugins/basic-elements',
            'plugins/excalidraw',
            'plugins/horizontal-rule',
            'plugins/indent',
            'plugins/indent-list',
            'plugins/line-height',
            'plugins/list',
            'plugins/media',
            'plugins/table',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Inline Elements',
          items: [
            'plugins/link',
            'plugins/combobox',
            'plugins/emoji',
            'plugins/mention',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Marks',
          items: [
            'plugins/basic-marks',
            'plugins/comments',
            'plugins/font',
            'plugins/highlight',
            'plugins/kbd',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Decorators',
          items: ['plugins/find-replace'],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Utils',
          items: [
            'plugins/autoformat',
            'plugins/block-selection',
            'plugins/exit-break',
            'plugins/reset-node',
            'plugins/soft-break',
            'plugins/single-line',
            'plugins/forced-layout',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Serializing',
          items: [
            'plugins/serializing-html',
            'plugins/serializing-md',
            'plugins/serializing-csv',
            'plugins/serializing-docx',
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/balloon-toolbar',
        'components/dnd',
        'components/placeholder',
        'components/plate',
        'components/cursor-overlay',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/introduction',
        'examples/editable-voids',
        'examples/huge-document',
        'examples/multi-editors',
        'examples/iframe',
        'examples/preview-markdown',
      ],
      collapsed: false,
    },
  ],
};
