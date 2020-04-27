import userApi from "@/api/user"
import { NavBar, List, Panel, Row, Col, Button, } from 'vant';

export default {

  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Panel.name]: Panel,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
  },
  data() {
    return {
      taskList: [],
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      this.getTaskList()
    },

    getTaskList() {
      userApi.getTask().then(response => {
        this.taskList = response.data
      })
    },

    onClickLeft() {
      this.$router.go(-1)
    },
    toIndex() {
      // 路由到首页
      this.$router.push({path: '/index'});
    }
  },
}