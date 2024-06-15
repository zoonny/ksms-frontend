// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'play-page',
      title: 'Play Page',
      // type: 'collapse',
      // group, collapse, item
      type: 'item',
      url: '/play-page',
      icon: icons.ChromeOutlined,
      children: [
        {
          id: 'play-page',
          title: 'Play Page',
          type: 'item',
          url: '/play-page',
          icon: icons.ChromeOutlined
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
