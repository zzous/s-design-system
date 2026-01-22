import { SDataTable } from '@/components/table/SDataTable';

export default {
    title: 'Table/SDataTable',
    component: SDataTable,
    tags: ['autodocs'],
};

export const Default = {
    args: {
    headers: [
            { key: 'id', title: 'ID' },
            { key: 'name', title: '이름' },
            { key: 'email', title: '이메일' },
        ],
        items: [],
    },
};
