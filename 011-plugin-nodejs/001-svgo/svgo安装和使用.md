# svgo安装
`npm install -g svgo`

# 文档
## 用法
`svgo [选项] [参数...]`

## 选项
- `-v, --version` : 显示版本
- `-i, --input [文件...]` : 输入文件
- `-s, --string SVG文件字符串` : 输入SVG文件字符串
- `-f, --folder 文件夹` : 输入文件夹(输入里面的所有.svg文件)
- `-o, --output [文件或文件夹...]` : 输出文件或文件夹
- `-p, --precision 整数` : 设置小数部分的位数
- `--config 配置文件` : 自定义配置文件(仅支持js)
- `--datauri 格式` : 输出为数据URI字符串(base64)、URI编码(enc)或不编码(unenc)
- `--multipass` : 多次传递SVG，以确保应用所有优化
- `--pretty` : 美化打印
- `--indent 整数` : 缩进个数
- `--eol` : 输出SVG时使用的换行符：lf或crlf。如果未指定，则使用平台默认
### 默认选项
- `--final-newline` : 确保SVG以换行结束
- `-r, --recursive` : 与`--folder`一起使用。文件夹中的SVG文件以递归方式存储
- `--exclude 正则表达式` : 与`--folder`一起使用。排除与正则表达式模式匹配的文件
- `-q, --quiet` : 仅输出错误消息，不输出常规状态消息
- `--show-plugins` : 显示可用插件并退出
- `--no-color` : 输出不带颜色的纯文本
- `-h, --help` : 显示帮助信息

# 使用示例
## 压缩SVG
`svgo img/88.svg -o img/88.min.svg`
