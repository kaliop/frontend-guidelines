import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kaliop Frontend Guidelines",
  description: "Guidelines and best practices for frontend development at Kaliop",
  lang: 'en-US',

  themeConfig: {
    nav: [],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
      },
      {
        text: 'Tailwind CSS',
        items: [
          { text: 'Styles Architecture', link: '/tailwind/styles-architecture' },
          { text: 'Design Tokens Overview', link: '/tailwind/design-tokens/' },
          { text: 'Colors', link: '/tailwind/design-tokens/colors' },
          { text: 'Spacing', link: '/tailwind/design-tokens/spacing' },
          { text: 'Typography', link: '/tailwind/design-tokens/typography' },
          { text: 'Easings', link: '/tailwind/design-tokens/easings' },
          { text: 'Layout', link: '/tailwind/layout' },
          { text: 'Custom Variants', link: '/tailwind/custom-variants' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Atomic Design', link: '/components/' },
          { text: 'Naming Conventions', link: '/components/naming-conventions' },
        ]
      },
      {
        text: 'Styling Components',
        items: [
          { text: 'Styling with TV', link: '/styling/styling-with-tv' },
          { text: 'Override Classes', link: '/styling/override-classes' },
        ]
      },
      {
        text: 'Storybook',
        items: [
          { text: 'Introduction', link: '/storybook/' },
          { text: 'Story Structure', link: '/storybook/story-structure' },
          { text: 'Story Organization', link: '/storybook/story-organization' },
          { text: 'Args & ArgTypes', link: '/storybook/args-argtypes' },
          { text: 'Multiple Stories', link: '/storybook/multiple-stories' },
          { text: 'Decorators', link: '/storybook/decorators' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Starter-Agency/kaliop-2025' }
    ],

    search: {
      provider: 'local',
    }
  }
})
