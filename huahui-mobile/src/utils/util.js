export default {
    formatMobile: function (mobile) {
        return mobile.substr(0, 3) + '****' + mobile.substr(7, 11);
    },

    formatDate: function (timestamp) {
        let date = new Date(timestamp)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()

        return [year, month, day].map(item => item > 9 ? item : '0' + item).join('-') + " " +
            [hour, minute, second].map(item => item > 9 ? item : '0' + item).join(":")
    },

    getQuery: function (url) {
        url = url || window.location.href
        url = url.split("#")[0]

        // 如果没有？带参数，直接返回一个空对象
        if (!/\?/.test(url)) {
            return {}
        }

        let queryArr = url.split("?")[1].split("&")
        let queryObject = {}
        for (let i = 0; i < queryArr.length; i++) {
            let temp = queryArr[i].split("=")
            queryObject[temp[0]] = temp[1]
        }
        return queryObject
    }
}
