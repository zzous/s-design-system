import { SAvatar } from '@/components/images/SAvatar';

export default {
    title: 'Images/SAvatar',
    component: SAvatar,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        user: { name: "사용자 A" },
        menuItems: [
            { title: "Menu1", value: 'Menu1' },
            { title: "Menu2", value: 'Menu2' },
            { title: "Menu3", value: 'Menu3' },
        ]
    },
};
