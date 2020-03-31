<template>
  <div class="ques-item">
    <h3 class="title">{{`${question.Seq_No}. ${question.Question_Desc}`}}</h3>
    <component :is="question.component"
               :question="question"
               @trigFunc="trigFunc"
               ref="ques">
    </component>
    <span v-show="!isValid"
          class="err-msg">{{msg}}</span>
  </div>
</template>

<script>
import TypeA from './TypeA'
import TypeB from './TypeB'
import TypeC from './TypeC'
import TypeD from './TypeD'
import TypeE from './TypeE'
export default {
  name: 'question-item',
  props: {
    question: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isValid: true,
      msg: ''
    }
  },
  methods: {
    trigFunc (val) {
      if (val && this.question.Question_Desc.includes('工号')) {
        if (val === '004618') {
          this.$emit('trigChangeName', 'Ronnie Zhang')
          this.$emit('trigChangeID', '367845199804055858')
        }
      }
      this.validateAnswer()
    },
    setValidStatu (isValid, msg) {
      this.isValid = isValid
      this.msg = msg
    },
    validateAnswer () {
      switch (this.question.Question_Type) {
        case 'A':
          if (!this.Answer.Answer_No) {
            this.setValidStatu(false, '此为必选项')
            return false
          }
          break
        case 'C':
          if (!this.Answer.Answer_No.length) {
            this.setValidStatu(false, '至少选择一项')
          }
        case 'B':
          // 校验手机号
          if (this.question.Question_Desc.includes('手机号')) {
            if (!this.Answer.Answer_No) {
              this.setValidStatu(false, '手机号不允许为空')
              return false
            } else {
              const reg = /^1[3456789]\d{9}$/
              if (!reg.test(this.Answer.Answer_No)) {
                this.setValidStatu(false, '无效手机号')
                return false
              }
            }
          }

          // 校验温度输入框
          if (this.question.Question_Desc.includes('体温')) {
            if (!this.Answer.Answer_No) {
              this.setValidStatu(false, '温度不允许为空')
              return false
            } else {
              if (isNaN(+this.Answer.Answer_No)) {
                this.setValidStatu(false, '只能输入数字')
                return false
              }
            }
          }
        case 'D':
        case 'E':
        default:
          if (!this.Answer.Answer_No || !this.Answer.Answer_No.length) {
            this.setValidStatu(false, '此为必填项')
            return false
          }
      }
      this.setValidStatu(true, '')
      return true
    }
  },
  computed: {
    Answer () {
      return {
        Rid: this.question.Rid,
        Answer_No: this.$refs.ques.value,
        isValid: this.isValid
      }
    }
  },
  components: {
    TypeA,
    TypeB,
    TypeC,
    TypeD,
    TypeE
  }
}
</script>

<style lang="stylus">
.ques-item {
  padding: 10px 0;

  h3 {
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .err-msg {
    color: red;
  }
}
</style>