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
        'guides/store',
        'guides/styling',
        'guides/configuration',
        'guides/creating-plugins',
        'guides/multiple-editors',
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
          label: 'Elements',
          items: [
            'plugins/alignment',
            'plugins/basic-elements',
            'plugins/excalidraw',
            'plugins/horizontal-rule',
            'plugins/image',
            'plugins/indent',
            'plugins/indent-list',
            'plugins/line-height',
            'plugins/link',
            'plugins/list',
            'plugins/media-embed',
            'plugins/combobox',
            'plugins/mention',
            'plugins/table',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Marks',
          items: [
            'plugins/basic-marks',
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
            'plugins/serializing-ast',
            'plugins/serializing-csv',
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
        'examples/iframe',
        'examples/preview-markdown',
      ],
      collapsed: false,
    },
  ],
};
