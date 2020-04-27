import userApi from '@/api/user'
import redpackApi from '@/api/redpack'
import store from '@/store'

import { Cell, CellGroup, Col, Icon, Row, Tabbar, TabbarItem, Toast, Image, Grid, GridItem, Dialog, Popup, Overlay } from 'vant';

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
        [Overlay.name]: Overlay,
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
                redpacketReceive: 0, // 可领红包数
                receiverCount: 0, // 已领取红包数
                vip: '',
                vipName: ''
            },
            redpack: 0.00, // 领取的红包金额
            showRule: false, // 显示规则弹窗
            showQR: false
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let user = store.state.app.user
            if (JSON.stringify(user) !== "{}") {
                this.userInfo = user
            } else {
                this.getUserInfo()
            }

        },
        getUserInfo() {
            userApi.getUserInfo().then(response => {
                this.userInfo = response.data
                store.dispatch("app/toggleUser", response.data)
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
            this.showRule = true
        },

        onCloseRule() {
            this.showRule = false
        },

        onTapTodayRedPack() {
            this.onCloseRule()
            let redPackNum = this.userInfo.redpacketReceive;
            if (redPackNum > 0) {
                this.showReceiveRedPackImg = true
            } else {
                this.$toast("可领红包数不足")
            }

        },

        onTapRedPackImg() {
            this.onCloseRule()
            redpackApi.redpack().then(res => {
                if (res.errorCode && res.errorCode !== 'SUCCESS') {
                    this.$toast(res.errorMsg)
                    this.showReceiveRedPackImg = false
                    return
                }
                this.redpack = res
                this.userInfo.redpacketReceive--

                this.showReceiveRedPackImg = false
                this.showRedPackMoney = true
            })


        },
        onCloseRedPackImg() {
            this.showReceiveRedPackImg = false
        },
        opTapRedPackMoney() {
            this.showRedPackMoney = false
        },
        onCloseRedPackMoney() {
            this.showRedPackMoney = false
        },
        open() {
            console.log('open')
        },
        showQr() {
            this.showQR = true
        }
    }
}
