const mixins = {
    methods: {
        // datePicker 格式化
        Dateformatter(type, val){
            switch (type) {
                case 'year':
                    return `${val}年`
                case 'month':
                    return `${val}月`
                case 'day':
                    return `${val}日`
                case 'hour':
                    return `${val}时`
                case 'minute':
                    return `${val}分`
                case 'second':
                    return `${val}秒`
                default:
                    return val
            }
        }
    }
}


export default mixins