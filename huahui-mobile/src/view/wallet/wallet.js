
import { Col, Row, Button, Cell, List, Toast } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [List.name]: List,
    [Toast.name]: Toast,

  },
  data() {
    return {

    }
  },

  mounted() {

  },
  methods: {
    onTapwithdraw() {
      Toast.success('提现成功');
    }
  }
}