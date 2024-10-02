import { useI18n } from '@/_setting/i18n'

const { tt } = useI18n()

export const headers = [
    {
      title: tt('프로젝트 타입'),
      key: 'projectType',
      align: 'center',
      width: 180
    },
    {
      title: tt('프로젝트 명'),
      key: 'projectName',
      align: 'center',
      width: 150
    },
    {
      title: tt('설명'),
      key: 'projectAlias',
      align: 'center',
      width: 250
    },
    {
      title: tt('빌드'),
      key: 'buildCount',
      align: 'center',
      width: 60
    },
    {
      title: tt('배포'),
      key: 'deployCount',
      align: 'center',
      width: 60
    },
    {
      title: tt('회원'),
      key: 'userCount',
      align: 'center',
      width: 60
    },
    {
      title: tt('저장소'),
      key: 'repo',
      align: 'center',
      width: 80
    },
    {
      title: tt('생성 일시'),
      key: 'regDate',
      align: 'center',
      width: 140
    },
  ]