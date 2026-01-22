import React, { useState } from 'react';
import { SConfirm } from '@/components/modal/SConfirm';
import { SBtn } from '@/components/button/SBtn';

export default {
    title: 'Modal/SConfirm',
    component: SConfirm,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            control: 'boolean',
            description: '모달 표시 여부',
            defaultValue: false
        },
        contents: {
            control: 'text',
            description: '확인 모달 내용',
        },
        confirmButtonText: {
            control: 'text',
            description: '확인 버튼 텍스트',
            defaultValue: '확인'
        },
        cancelButtonText: {
            control: 'text',
            description: '취소 버튼 텍스트',
            defaultValue: '취소'
        },
        teleportId: {
            control: 'text',
            description: '모달이 렌더링될 DOM 요소의 ID',
            defaultValue: 'app'
        },
        width: {
            control: 'text',
            description: '모달 너비',
            defaultValue: '400px'
        },
        hideCancel: {
            control: 'boolean',
            description: '취소 버튼 숨김 여부',
            defaultValue: false
        }
    },
};

export const Default = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div>
                <SBtn onClick={() => setIsOpen(true)}>모달 열기</SBtn>
                <SConfirm
                    {...args}
                    modelValue={isOpen}
                    onUpdateModelValue={setIsOpen}
                />
            </div>
        );
    },
    args: {
        contents: '이 작업을 진행하시겠습니까?',
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        noCancel: false
    },
};

export const SingleButton = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div>
                <SBtn onClick={() => setIsOpen(true)}>모달 열기</SBtn>
                <SConfirm
                    {...args}
                    modelValue={isOpen}
                    onUpdateModelValue={setIsOpen}
                />
            </div>
        );
    },
    args: {
        contents: '확인 버튼만 있는 모달입니다.',
        confirmButtonText: '확인',
        noCancel: true
    },
};

export const LongContent = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div>
                <SBtn onClick={() => setIsOpen(true)}>모달 열기</SBtn>
                <SConfirm
                    {...args}
                    modelValue={isOpen}
                    onUpdateModelValue={setIsOpen}
                />
            </div>
        );
    },
    args: {
        contents: '첫 번째 줄\n두 번째 줄\n세 번째 줄\n네 번째 줄\n다섯 번째 줄',
        confirmButtonText: '확인',
        cancelButtonText: '취소'
    },
};
