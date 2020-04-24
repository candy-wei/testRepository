import cart from '@/api/cart'
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, NavBar, Tabbar, TabbarItem, Stepper, Button, Icon, Image, SwipeCell } from 'vant';
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
    [Icon.name]: Icon,
    [Image.name]: Image,
    [SwipeCell.name]: SwipeCell,
    [Toast.name]: Toast,
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
          cart.thumb = baseApi + '/rest/file/getImgStream?idFile=' + cart.goods.pic
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
        this.$refs.checkboxGroup.toggleAll()
        this.checkedAll = false
      } else {
        this.$refs.checkboxGroup.toggleAll(true)
        this.checkedAll = true
      }
    },
    onChangBox(e) {
      if (this.checkedGoods.length === this.cartList.length) {
        this.checkedAll = true
      } else {
        this.checkedAll = false
      }
    },
    remove(id) {
      console.log(id, 'id')
      cart.delete({ id }).then(res => {
        this.$toast("删除成功")
        this.cartList = this.cartList.filter(item => item.id !== id)
        this.checkedGoods = this.checkedGoods.filter(item => item.id !== id)
        this.checkeAllCarts = this.checkedGoods
      }).catch((err) => {
        console.log(err, 'err')
        this.$toast("删除失败")
      })
    }
  }
};
