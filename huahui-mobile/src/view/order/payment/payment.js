import { Button, Cell, CellGroup, NavBar, Radio, RadioGroup, Toast } from 'vant';
import storage from "@/utils/storage"

export default {
    components: {
        [NavBar.name]: NavBar,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        [Button.name]: Button,
        [Toast.name]: Toast
    },

    data() {
        return {
            order: {},
            payType: 'wxpay'
        };
    },
    mounted() {
        this.init()
    },
    computed: {},

    methods: {
        init() {
            let orderSn = this.$route.query.orderSn
            let totalPrice = this.$route.query.totalPrice
            this.order = { orderSn: orderSn, totalPrice: totalPrice }
        },
        pay() {
            let openId = storage.getOpenId()
            window.location.href = `${process.env.VUE_APP_BASE_API}/wx/trigger/${this.order.orderSn}/${openId}`
            // this.$router.push('/')
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        }

    }
};
