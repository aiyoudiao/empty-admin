// module.exports = file => () => {
//     return import ('@/' + file)
// }

/**
 * NOTE：webpack 高版本可能不支持 import动态引入，所以换成这种方式
 */

module.exports = file => (resolve) => require([`@/views/${file}`], resolve)