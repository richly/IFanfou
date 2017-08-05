// postcss的配置文件
module.exports = {
    plugins:[
        require('autoprefixer')({browsers:['last 10 Chrome version','last 5 Firefox versions','Safari >= 6','ie > 8']})
    ]
}