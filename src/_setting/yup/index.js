import * as yup from 'yup'
import { useI18n } from '@/_setting/i18n'
import { REG_ALLOW_ENG, REG_ALLOW_ENG_NUM_HYPHEN } from '@/assets/consts/regex'

const { tt } = useI18n()

/**
 * form error 메세지 커스텀
 */

export default () => {
    yup.addMethod(yup.string, 'onlyEng', function onlyEng(message) {
        return this.test(
            'only-eng',
            message || tt('영문만 입력 가능합니다'),
            function (value) {
                const { createError } = this

                // 빈 값 허용 (필수 항목은 따로 처리 가능)
                if (!value) return true
                return REG_ALLOW_ENG.test(value) || createError({ message: message || createError() })
            }
        )
    })
    yup.addMethod(yup.StringSchema, 'onlyEngNumHyphen', function onlyEngNumHyphen(message) {
        return this.test(
            'only-eng-num-hyphen',
            message || tt('영문, 숫자, 특수문자(-)만 입력 가능합니다'),
            function (value) {
                const { createError } = this

                // 빈 값 허용 (필수 항목은 따로 처리 가능)
                if (!value) return true
                return REG_ALLOW_ENG_NUM_HYPHEN.test(value) || createError({ message: message || createError() })
            }
        )
    })


    yup.setLocale({
        mixed: {
            required: ({ label }) => tt('{{label}}은(는) 필수 값 입니다', { label }),
        },
        array: {
            min: ({ label, min }) => tt('{{label}}은(는) 최소 {{min}} 이상 선택하세요', { label, min })
        },
        string: {
            matches: ({ label, regex }) => tt('{{label}}의 값이 형식에 맞지 않습니다{{regex}}', { label, regex }),
            max: ({ max }) => tt('글자는 {{max}}자까지만 입력 가능합니다', { max }),
            onlyEngNumHyphen: ({ label }) => `${label}`
        },
    })
}