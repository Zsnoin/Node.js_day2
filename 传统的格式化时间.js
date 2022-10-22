function dateFormat(dtStr) {
    let dt = new Date(dtStr)
    let y = fd(dt.getFullYear())
    let m = fd(dt.getMonth() + 1)
    let d = fd(dt.getDate())
    let hh = fd(dt.getHours())
    let mm = fd(dt.getMinutes())
    let ss = fd(dt.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function fd(n) {
    return n > 9 ? n : '0' + n;
}
module.exports = {
    dateFormat
}