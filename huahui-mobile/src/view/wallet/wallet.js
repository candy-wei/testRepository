
import { Col, Row, Button, Cell, List, Toast } from 'vant';
import redPackApi from "@/api/redpack"
import utils from "@/utils/util"
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
      canCashSum: '---',
      cashSum: '---',
      cashList: []
    }
  },

  mounted() {
    this.init()
  },
  methods: {
    onTapwithdraw() {
      redPackApi.cash().then(res => {
        Toast.success('提现成功');
        this.init()
      }).catch(err => {
        Toast.fail('提现失败');

      })
    },
    init() {
      this.getCanCashSum()
      this.getCashSum()
      this.getCashList()
    },
    getCanCashSum() {
      redPackApi.getCanCashSum().then(sum => {
        this.canCashSum = sum.toFixed(2)
      })
    },
    getCashSum() {
      redPackApi.getCashSum().then(sum => {
        this.cashSum = sum.toFixed(2)
      })
    },
    getCashList() {
      redPackApi.getCashList().then(list => {
        list.forEach(item => {
          item.createTime = utils.formatDate(item.createTime)
        })
        this.cashList = list
      })
    },
  }
}