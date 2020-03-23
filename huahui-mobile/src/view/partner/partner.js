import { NavBar, Row, Col, Panel, Cell } from 'vant';


export default {

  components: {
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Panel.name]: Panel,
    [Cell.name]: Cell,
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {

  },
  methods: {

    onClickLeft() {
      this.$router.go(-1)
    },
  }


}