import areaData from './area.js'
import address from '@/api/address'
import { AddressEdit, NavBar, Toast } from 'vant'

export default {
    components: {
        [AddressEdit.name]: AddressEdit,
        [Toast.name]: Toast,
        [NavBar.name]: NavBar
    },
    data() {
        return {
            showDelete: false,
            areaList: areaData,
            columnsPlaceholder: ['请选择', '请选择', '请选择'],
            searchResult: [],
            addressInfo: {},
            showDefault: false
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            const id = this.$route.query.id
            if (id) {
                this.showDelete = true
                this.showDefault = true
                address.get(id).then(response => {
                    response.data.tel = response.data.mobile
                    this.addressInfo = response.data
                }).catch((err) => {
                    Toast.fail(err)
                })
            }
        },
        onSave(info) {
            let addressEntity = {
                province: info.province,
                city: info.city,
                district: info.county,
                addressDetail: info.addressDetail,
                areaCode: info.areaCode,
                mobile: info.tel,
                name: info.name,
                postCode: info.postalCode,
                isDefault: info.isDefault
            }
            if (info.id) {
                addressEntity.id = info.id
            }
            address.save(addressEntity).then(response => {
                Toast('保存成功')
                this.$router.push('/address')
            }).catch((err) => {
                Toast.fail(err)
            })
        },

        onChangeDetail() {
        },
        changeDefault(isDefault) {
            if (this.addressInfo.id) {
                address.changeDefault(this.addressInfo.id, isDefault).then(response => {
                    Toast('修改成功')
                }).catch((err) => {
                    Toast.fail(err)
                })
            }

        },
        onDelete() {
            address.remove(this.addressInfo.id).then(response => {
                Toast('删除成功')
                this.$router.push('/address')
            }).catch((err) => {
                Toast.fail(err)
            })
        }
    }
}
