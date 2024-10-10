import { setLocale } from 'yup'
import { useI18n } from '@/_setting/i18n'

const { tt } = useI18n()

export default () => {
    setLocale({
        mixed: {
            required: ({ label }) => tt(`{{label}}은(는) 필수 값 입니다.`, { label })
        }
    })
}