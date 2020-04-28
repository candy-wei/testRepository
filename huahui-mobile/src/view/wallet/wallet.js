
import { Col, Row, Button, Cell, List, Toast, Tab, Tabs } from 'vant';
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
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      canCashSum: '---',
      cashSum: '---',
      cashList: [],
      recordList: []
    }
  },

  mounted() {
    this.init()
  },
  methods: {
    onTapwithdraw() {
      redPackApi.cash().then(res => {
        if (res.errorCode && res.errorCode !== 'SUCCESS') {
          Toast.success('提现成功');
          this.init()
        } else{
          Toast.fail('提现失败');
        }
      }).catch(err => {
        Toast.fail('提现失败');
      })
    },
    init() {
      this.getCanCashSum()
      this.getCashSum()
      this.getCashList()
      this.getRecordList()
    },
    getCanCashSum() {
      redPackApi.getCanCashSum().then(sum => {
        this.canCashSum = sum.toFixed(2)
      })
    },
    formatPrice(price) {
      return (price / 100).toFixed(2)
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
    getRecordList() {
      redPackApi.getRecordList().then(list => {
        list.forEach(item => {
          item.createTime = utils.formatDate(item.createTime)
        })
        this.recordList = list
      })
    },
    toIndex() {
      // 路由到首页
      this.$router.push({path: '/index'});
    }
  }
}