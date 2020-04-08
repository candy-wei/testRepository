import { NavBar, Row, Col, Panel, Cell, Tab, Tabs, Image, List } from 'vant';
import html2canvas from 'html2canvas';
import QRcode from '@xkeshi/vue-qrcode'
import userApi from "@/api/user"

export default {

  components: {
    [NavBar.name]: NavBar,
    [Col.name]: Col,
    [Row.name]: Row,
    [Panel.name]: Panel,
    [Cell.name]: Cell,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Image.name]: Image,
    [List.name]: List,
    qrcode: QRcode
  },
  data() {
    return {
      show: false,
      qrcodeUrl: "http://www.baidu.com",
      posterImg: "",
      showPoster: false,
      recommendList: [],
      teamList: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getMyRecommend()
      this.getMyTeam()
    },
    getMyRecommend() {
      userApi.getMyRecommend().then(res => {
        this.recommendList = res.data
      })
    },
    getMyTeam() {
      userApi.getMyTeam().then(res => {
        this.teamList = res.data
      })
    },
    posterLoad() {
      setTimeout(() => {
        this.createPoster()
      }, 500);
    },
    createPoster() {
      // 生成海报
      const vm = this
      const domObj = this.$refs.poster
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        logging: false,
        letterRendering: true,
        onclone(doc) {
          // let e = doc.querySelector('#posterHtml')
          // e.style.display = 'block'
        }
      }).then(function (canvas) {
        // 在微信里,可长按保存或转发
        vm.posterImg = canvas.toDataURL('image/png')
        vm.showPoster = true

      })
    },
  }


}