// @ts-check

/**
 * PragmaTeach Documentation Sidebar Configuration
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Dashboard for Teachers',
      link: {
        type: 'generated-index',
        description: 'Complete guide to the PragmaTeach Teacher Dashboard.',
      },
      items: [
        'dashboard/overview',
        {
          type: 'category',
          label: 'Courses',
          link: {
            type: 'generated-index',
            description: 'Learn how to create and manage courses.',
          },
          items: [
            'dashboard/courses/creating-courses',
            'dashboard/courses/managing-courses',
            'dashboard/courses/activating-lessons',
            'dashboard/courses/exercises',
          ],
        },
        {
          type: 'category',
          label: 'User Management',
          link: {
            type: 'generated-index',
            description: 'Manage students, teachers, and groups.',
          },
          items: [
            'dashboard/users/managing-users',
            'dashboard/users/managing-groups',
          ],
        },
        'dashboard/ai-assistant',
        'dashboard/metrics',
        'dashboard/school-settings',
      ],
    },
    {
      type: 'category',
      label: 'Students App',
      link: {
        type: 'generated-index',
        description: 'Guide for students using the PragmaTeach app.',
      },
      items: [
        'students/overview',
        'students/navigating-courses',
        'students/completing-lessons',
        'students/tracking-progress',
        'students/ai-assistant',
      ],
    },
  ],
};

export default sidebars;
