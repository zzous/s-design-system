import SIcon from '@/components/images/SIcon.vue'
import icons from '@/components/images/icons.js'
import SBtn from '@/components/button/SBtn.vue'

export default {
  title: 'Images/SIcon',
  component: SIcon,
  tags: ['autodocs'],
  argTypes: {
    // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    name: 'close',
    size: 24,
    color: 'currentColor'
  },
}

export const AllIconButton = () => ({
  components: { SIcon, SBtn },
  setup() {
    return {
      iconNames: Object.keys(icons)
    }
  },
  template: `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; max-width: 1200px;">
      <div
        v-for="iconName in iconNames"
        :key="iconName"
        style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;"
      >
        <SIcon :name="iconName" :size="16" class="mr-2" />
        <span>{{ iconName }}</span>
      </div>
    </div>
  `
})
