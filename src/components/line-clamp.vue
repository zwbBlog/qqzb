<script>
  import _utils from '../utils'

  export default {
    props: {
      /**
       从第几行开始隐藏文本
       */
      lines: {
        type: Number,
        default: 2
      },
      tag: {
        type: String,
        default: 'p'
      }
    },
    render(h) {
      const _this = this;
      const body = this.$slots.default;
      return h(this.tag, {
        ref: 'line',
        class: 'line-clamp',
        style: {
          'line-clamp': _this.lines,
          '-webkit-line-clamp': _this.lines
        }
      }, [body])
    },
    mounted() {
      const $line = this.$refs.line;
      const pdBottom = parseInt(_utils.getStyle(this.$refs.line, 'padding-bottom'));
      const pdTop = parseInt(_utils.getStyle(this.$refs.line, 'padding-top'));
      if (pdBottom > 0) {
        Object.assign($line.style, {
          paddingBottom: '0px',
          paddingTop: '0px',
          marginBottom: pdBottom + 'px',
          marginTop: pdTop + 'px'
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  .line-clamp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
