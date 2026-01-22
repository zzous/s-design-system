import { SIcon } from '@/components/images/SIcon';
import { icons } from '@/components/images/icons';
import { SBtn } from '@/components/button/SBtn';

export default {
  title: 'Images/SIcon',
  component: SIcon,
  tags: ['autodocs'],
  argTypes: {
    // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    name: 'close',
    size: 24,
    color: 'currentColor'
  },
};

// AllIconButton 스토리는 JSX가 필요하므로 나중에 .jsx로 변환하거나 제거
// export const AllIconButton = { ... };
