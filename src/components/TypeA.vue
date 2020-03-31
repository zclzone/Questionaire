<template>
  <div>
    <div v-for="(item,index) in question.Answer"
         :key="index">
      <el-radio v-model="value"
                @change="onChange"
                :label="item.Answer_No">{{item.Answer_Desc}}</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeA',
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
      value: '',
    }
  },
  methods: {
    onChange () {
      this.$emit('trigFunc', this.value)
    }
  },
  computed: {
    Answer () {
      return {
        Rid: this.question.Rid,
        Answer_No: this.value
      }
    }
  },
}
</script>

<style lang="stylus"></style>