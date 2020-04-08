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
    }
}
