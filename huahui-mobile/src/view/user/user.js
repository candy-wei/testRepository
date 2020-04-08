import userApi from '@/api/user'
import { Cell, CellGroup, Col, Icon, Row, Tabbar, TabbarItem, Toast, Image, Grid, GridItem, Dialog, Popup } from 'vant';

export default {
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Toast.name]: Toast,
        [Image.name]: Image,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Dialog.Component.name]: Dialog,
        [Popup.name]: Popup,
    },
    data() {
        return {
            activeFooter: 2,
            showReceiveRedPackImg: false,
            showRedPackMoney: false,
            userInfo: {
                headImgUrl: '',
                nickName: '',
                points: 0,
                redpacketAmount: 0,
                redpacketReceive: 0,
                vip: ''
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            userApi.getUserInfo().then(response => {
                this.userInfo = response.data
            }).catch((err) => {
                // this.$router.replace({ path: 'login', query: { redirect: 'user' } })
            })
        },
        sorry() {
            Toast('敬请期待')
        },
        toOrder(status) {
            this.$router.push({ path: 'order', query: { status: status } })
        },

        onTapRule() {
            this.$dialog.alert({
                message: "规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容"
            })
        },

        onTapTodayRedPack() {
            let redPackNum = 12;
            if (redPackNum > 0) {
                this.showReceiveRedPackImg = true
            }
        },

        onTapRedPackImg() {
            this.showReceiveRedPackImg = false
            this.showRedPackMoney = true
        },
        opTapRedPackMoney() {
            this.showRedPackMoney = false
        },
        open() {
            console.log('open')
        }
    }
}
