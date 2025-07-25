import { SNotification } from '@/components';

export default {
    title: 'Notification/SNotification',
    component: SNotification,
    tags: ['autodocs'],
    argTypes: {
        notificationName: {
            control: 'text',
            description: '알림 영역의 제목',
            defaultValue: 'Notifications',
        },
        items: {
            control: 'object',
            description:
                '알림 항목 배열.',
            defaultValue: [],
        },
        noItemText: {
            control: 'text',
            description: '알림 항목이 없을 경우 표시되는 텍스트',
            defaultValue: '알림 내역이 없습니다.',
        },
        languageCode: {
            control: 'text',
            description: `언어 코드
- en: 영문
- ko: 한글`,
            defaultValue: 'ko',
        },
    },
};

const defaultCode = `
<template>
  <div>
    <SNotification
      :notificationName="notificationName"
      :items="notifications"
      :noItemText="noItemText"
      :languageCode="languageCode"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
  {
    notificationIdx: 1,
    notificationType: 'SUCCESS',
    msgTitle: '성공 알림',
    msgContent: '작업이 성공적으로 완료되었습니다.',
    msgAdditional: '추가 정보',
    msgTitleEn: 'Success Notification',
    msgContentEn: 'The operation was completed successfully.',
    msgAdditionalEn: 'Additional Information',
    createdAt: '2023-10-02 10:00:00',
  },
  {
    notificationIdx: 2,
    notificationType: 'ERROR',
    msgTitle: '오류 알림',
    msgContent: '처리 중 오류가 발생하였습니다.',
    msgAdditional: '에러 상세 내역',
    msgTitleEn: 'Error Notification',
    msgContentEn: 'An error occurred during processing.',
    msgAdditionalEn: 'Error Details',
    createdAt: '2023-10-01 15:08:00',
  },
  {
    notificationIdx: 3,
    notificationType: 'INFO',
    msgTitle: '정보 알림',
    msgContent: '정보를 알립니다.',
    msgAdditional: '정보 상세 내역',
    msgTitleEn: 'Info Notification',
    msgContentEn: 'An information is notified.',
    msgAdditionalEn: 'Information Details',
    createdAt: '2023-10-01 10:05:00',
  },
  {
    notificationIdx: 4,
    notificationType: 'INFO',
    msgTitle: '정보 알림',
    msgContent: '정보를 알립니다.',
    msgAdditional: '정보 상세 내역',
    msgTitleEn: 'Info Notification',
    msgContentEn: 'An information is notified.',
    msgAdditionalEn: 'Information Details',
    createdAt: '2023-10-01 10:01:00',
  },
])
  const languageCode = ref('ko')
  const notificationName = ref('알림')
  const noItemText = ref('알림 내역이 없습니다.')
</script>
`;

const Template = (args) => ({
    components: { SNotification },
    setup() {
        return { args };
    },
    template: `<SNotification v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    notificationName: '알림',
    items: [
        {
          notificationIdx: 1,
          notificationType: 'SUCCESS',
          msgTitle: '성공 알림',
          msgContent: '작업이 성공적으로 완료되었습니다.',
          msgAdditional: '추가 정보',
          msgTitleEn: 'Success Notification',
          msgContentEn: 'The operation was completed successfully.',
          msgAdditionalEn: 'Additional Information',
          createdAt: '2023-10-02 10:00:00',
        },
        {
          notificationIdx: 2,
          notificationType: 'ERROR',
          msgTitle: '오류 알림',
          msgContent: '처리 중 오류가 발생하였습니다.',
          msgAdditional: '에러 상세 내역',
          msgTitleEn: 'Error Notification',
          msgContentEn: 'An error occurred during processing.',
          msgAdditionalEn: 'Error Details',
          createdAt: '2023-10-01 15:08:00',
        },
        {
          notificationIdx: 3,
          notificationType: 'INFO',
          msgTitle: '정보 알림',
          msgContent: '정보를 알립니다.',
          msgAdditional: '정보 상세 내역',
          msgTitleEn: 'Info Notification',
          msgContentEn: 'An information is notified.',
          msgAdditionalEn: 'Information Details',
          createdAt: '2023-10-01 10:05:00',
        },
        {
          notificationIdx: 4,
          notificationType: 'INFO',
          msgTitle: '정보 알림',
          msgContent: '정보를 알립니다.',
          msgAdditional: '정보 상세 내역',
          msgTitleEn: 'Info Notification',
          msgContentEn: 'An information is notified.',
          msgAdditionalEn: 'Information Details',
          createdAt: '2023-10-01 10:01:00',
        },
    ],
    noItemText: '알림 내역이 없습니다.',
    languageCode: 'ko',
};

Default.parameters = {
    docs: {
        source: {
            code: defaultCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
기본 알림 컴포넌트 사용 예시입니다

**주요 기능**
- 알림 영역의 제목을 설정할 수 있습니다
- 여러 개의 알림 항목을 배열 형태로 전달하여 목록을 표시합니다
- 언어 코드를 설정하여 영문 버전이 없는 경우 한글 버전을 반환합니다
- 각 항목에 대해 내용을 클릭 시 'click:content' 이벤트가 발생합니다
- 각 항목에 대해 마우스 오버 시 삭제 버튼이 나타나며, 클릭 시 'click:delete' 이벤트가 발생합니다
- 알림 항목이 없을 경우 지정된 텍스트를 표시합니다

**아이콘 표시**
- 각 알림 항목의 notificationType에 따라 아이콘이 표시됩니다
- SUCCESS: 체크 아이콘
- ERROR: 오류 아이콘
- 그 외: 정보 아이콘
`,
        },
    },
};

const emptyNotificationCode = `
<template>
  <SNotification
    :notificationName="알림"
    :items="[]"
    :noItemText="알림 내역이 없습니다."
    :languageCode="ko"
  />
</template>
`;

export const EmptyNotifications = Template.bind({});
EmptyNotifications.args = {
    notificationName: '알림',
    items: [],
    noItemText: '알림 내역이 없습니다.',
    languageCode: 'ko',
};

EmptyNotifications.parameters = {
    docs: {
        source: {
            code: emptyNotificationCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
알림 항목이 없는 경우의 예시입니다

- 알림 항목이 없을 경우, 지정된 'noItemText'가 표시됩니다
            `,
        },
    },
};

const englishNotificationCode = `
<template>
  <SNotification
    :notificationName="notificationName"
    :items="notifications"
    :noItemText="noItemText"
    :languageCode="languageCode"
  />
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
    {
      notificationIdx: 1,
      notificationType: 'SUCCESS',
      msgTitle: '성공 알림',
      msgContent: '작업이 성공적으로 완료되었습니다.',
      msgAdditional: '추가 정보',
      msgTitleEn: 'Success Notification',
      msgContentEn: 'The operation was completed successfully.',
      msgAdditionalEn: 'Additional Information',
      createdAt: '2023-10-02 10:00:00',
    },
    {
      notificationIdx: 2,
      notificationType: 'ERROR',
      msgTitle: '오류 알림',
      msgContent: '처리 중 오류가 발생하였습니다.',
      msgAdditional: '에러 상세 내역',
      msgTitleEn: 'Error Notification',
      msgContentEn: 'An error occurred during processing.',
      msgAdditionalEn: 'Error Details',
      createdAt: '2023-10-01 15:08:00',
    },
    {
      notificationIdx: 3,
      notificationType: 'INFO',
      msgTitle: '정보 알림',
      msgContent: '정보를 알립니다.',
      msgAdditional: '정보 상세 내역',
      createdAt: '2023-10-01 10:05:00',
    },
])
  const languageCode = ref('en')
  const notificationName = ref('Notifications')
  const noItemText = ref('No notifications available.')
</script>
`;



export const EnglishNotifications = Template.bind({});
EnglishNotifications.args = {
  notificationName: 'Notifications',
  items: [
    {
      notificationIdx: 1,
      notificationType: 'SUCCESS',
      msgTitle: '성공 알림',
      msgContent: '작업이 성공적으로 완료되었습니다.',
      msgAdditional: '추가 정보',
      msgTitleEn: 'Success Notification',
      msgContentEn: 'The operation was completed successfully.',
      msgAdditionalEn: 'Additional Information',
      createdAt: '2023-10-02 10:00:00',
    },
    {
      notificationIdx: 2,
      notificationType: 'ERROR',
      msgTitle: '오류 알림',
      msgContent: '처리 중 오류가 발생하였습니다.',
      msgAdditional: '에러 상세 내역',
      msgTitleEn: 'Error Notification',
      msgContentEn: 'An error occurred during processing.',
      msgAdditionalEn: 'Error Details',
      createdAt: '2023-10-01 15:08:00',
    },
    {
      notificationIdx: 3,
      notificationType: 'INFO',
      msgTitle: '정보 알림',
      msgContent: '정보를 알립니다.',
      msgAdditional: '정보 상세 내역',
      createdAt: '2023-10-01 10:05:00',
    },
  ],
  noItemText: 'No notifications available.',
  languageCode: 'en',
};

EnglishNotifications.parameters = {
  docs: {
    source: {
      code: englishNotificationCode,
      language: 'vue',
      type: 'auto',
    },
    description: {
      story: `
영문 버전 알림 컴포넌트 사용 예시입니다

**주요 기능**
- languageCode를 "en"으로 설정하여 영문 텍스트를 표시합니다
- 각 알림 항목의 제목, 내용 및 추가 정보를 영어로 제공합니다
- 영문 버전이 없는 경우 한글 버전을 반환합니다
      `,
    },
  },
};
