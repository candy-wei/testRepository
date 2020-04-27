import address from '@/api/address'
import { AddressList, Col, Icon, NavBar, Row, Toast } from 'vant'
import storage from '@/utils/storage'
export default {
    components: {
        [AddressList.name]: AddressList,
        [Toast.name]: Toast,
        [Row.name]: Row,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [NavBar.name]: NavBar
    },
    data() {
        return {
            activeFooter: 3,
            chosenAddressId: 0,
            list: [
            ]
        }
    },
    mounted() {
        this.init()
    },
    watch: {
        chosenAddressId(val) {
            storage.set('chosenAddressId', val)

        }
    },
    methods: {
        init() {
            address.queryByUser().then(response => {
                var list = response.data
                this.list = response.data
                for (var index in list) {
                    list[index].address = list[index].province + list[index].city + list[index].district + list[index].addressDetail
                    list[index].tel = list[index].mobile
                    if (list[index].isDefault === true) {
                        this.chosenAddressId = this.list[index].id
                    }
                }
            }).catch(err => {
                Toast(err.response.data.message)
            })
        },
        onAdd() {
            Toast('新增地址');
            this.$router.push('address/edit')
        },

        onEdit(item, index) {
            this.$router.push({ path: 'address/edit', query: { id: item.id } })
        },
        onClickLeft() {
            storage.set('chosenAddressId', this.chosenAddressId)
            this.$router.go(-1)
        },
        toIndex() {
          // 路由到首页
          this.$router.push({path: '/index'});
        }
    }
}
