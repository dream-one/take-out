import format from 'date-fns/format'
import Vue from 'vue'
//时间格式化
Vue.filter('dateString', function (value, formatStr) {
    // return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
    return format(value, formatStr || 'yyyy-MM-dd HH:mm:ss')
    })