import cart from '@/api/cart'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, NavBar, Tabbar, TabbarItem, Stepper, Button, Icon } from 'vant';
const baseApi = process.env.VUE_APP_BASE_API
import store from '@/store'
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        [NavBar.name]: NavBar,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Stepper.name]: Stepper,
        [Button.name]: Button,
        [Icon.name]: Icon
    },

    data() {
        return {
            isLogin: true, // 写死为true
            // isLogin:true,
            activeFooter: 1,
            checkedGoods: [],
            checkeAllCarts: [],
            cartList: [],
            checkedAll: true
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        submitBarText() {
            const amount = this.checkedGoods.length;
            return '结算' + (amount ? `(${amount})` : '');
        },
        totalPrice() {
            return this.cartList.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? (parseFloat(item.price) * item.amount) : 0), 0)
        }
    },

    methods: {
        init() {
            cart.queryByUser().then(response => {
                let cartList = response.data
                for (const index in cartList) {
                    let cart = cartList[index]
                    cart.thumb = baseApi + '/file/getImgStream?idFile=' + cart.goods.pic
                    this.checkedGoods.push(cartList[index].id)
                }
                this.cartList = cartList
            }).catch((err) => {

            })
        },
        submit() {
            this.$router.push('/checkout')
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        stepperEvent(item, arg) {
            const count = arg[0];
            cart.update(item.id, count)
        },
        toHome() {
            this.$router.push('/index')
        },
        toLogin() {
            this.$router.push({ path: 'login', query: { redirect: 'cart' } })
        },
        checkAll() {
            if (this.checkedGoods.length === this.cartList.length) {
                this.checkeAllCarts = this.checkedGoods
                this.checkedGoods = []
            } else {
                this.checkedGoods = this.checkeAllCarts
            }
        },
    }
};
