# 英雄管理接口 文档

##  准备工作

1. 初始化项目
   1. 新建文件夹`heroApi_ORM`
   2. 终端切换到文件夹中 
   3. `npm init -y`
2. 安装第三方模块 
   1. `express`：web开发框架
   2. `body-parser`:解析post数据
   3. `multer`:文件上传
   4. `morgan`:日志插件
   5. `mysql2` :数据库模块
   6. `sequelize`:orm框架
   7. `cors`：设置跨域
   8. 一次性全部安装:`npm i express body-parser multer morgan mysql2 sequelize cors`

## 接口 文档

### 状态说明

| *状态码* | *含义*      | *说明*                               |
| -------- | ----------- | ------------------------------------ |
| 200      | OK          | 请求成功                             |
| 201      | CREATED     | 创建成功                             |
| 202      | DELETED     | 删除成功                             |
| 203      | UPDATE      | 更新成功                             |
| 400      | BAD REQUEST | 请求的地址不存在或者包含不支持的参数 |

### 用户登录

请求地址：/login

请求方式：post

请求参数：

| 名称     | 类型   | 说明                     |
| -------- | ------ | ------------------------ |
| username | string | 用户名（正确的是:admin） |
| password | string | 密码(正确的是:123456)    |

返回数据：

| 名称 |  类型  | 说明                                      |
| :--: | :----: | ----------------------------------------- |
| msg  | string | 文字信息  ‘登录成功’   ‘用户名或密码出错’ |

```js
{
    msg:"登录成功 或者  用户名或密码错误",
    code:200 或者 400,
}
```

### 英雄列表

请求地址：/list

请求方式：get

请求参数：无

返回数据：

| 名称  |  类型  | 说明     |
| :---: | :----: | -------- |
|  id   | number | 英雄id   |
| name  | string | 英雄姓名 |
| skill | string | 英雄技能 |
| icon  | string | 英雄头像 |

```js
{
    msg:"获取成功",
    code:200,
    data:[
        {
            id:1,
            name:"盖伦",
            skill:"草丛伦",
            icon:"/imgs/盖伦.png"
        },
        {
            id:2,
            name:"赵信",
            skill:"枪出如龙",
            icon:"/imgs/赵信.png"
        }
    ]
}
```

### 英雄新增

请求地址：/add

请求方式：post

请求参数：请使用formData的方式提交

| 名称  |  类型  | 说明     |
| :---: | :----: | -------- |
| name  | string | 英雄姓名 |
| skill | string | 英雄技能 |
| icon  |  file  | 英雄头像 |

返回数据：

| 名称 |  类型  | 说明                              |
| :--: | :----: | --------------------------------- |
| msg  | string | 文字信息  ‘新增成功’ 或‘参数错误’ |

```js
{
    msg:"新增成功" 或 "参数错误",
    code:201 或 400,
}
```



### 英雄删除

请求地址：/delete

请求方式：get

请求参数：

| 名称 |  类型  | 说明   |
| :--: | :----: | ------ |
|  id  | number | 英雄id |

返回数据：

| 名称 |  类型  | 说明                                  |
| :--: | :----: | ------------------------------------- |
| msg  | string | 文字信息  ‘删除成功’  或者 ‘参数错误’ |

```js
{
    msg:"删除成功" 或 "参数错误",
    code:202 或400,
}
```

### 英雄查询

请求地址：/search

请求方式：get

请求参数：

| 名称 |  类型  | 说明   |
| :--: | :----: | ------ |
|  id  | number | 英雄id |

返回数据：

| 名称 |  类型  | 说明                              |
| :--: | :----: | --------------------------------- |
| msg  | string | 文字信息  ‘查询成功’   ‘参数错误’ |

```js
{
    msg:"查询成功" 或 "参数错误",
    code:200 或 400,
    data:{
		id:1,
         name:"盖伦",
         skill:"草丛蹲",
         icon:"/imgs/赵信.png"
    }
}
```

### 英雄编辑

请求地址：/edit

请求方式：post

请求参数：请使用formData的方式提交

| 名称  |  类型  | 说明     |
| :---: | :----: | -------- |
|  id   | number | 英雄id   |
| name  | string | 英雄姓名 |
| skill | string | 英雄技能 |
| icon  |  file  | 英雄头像 |

返回数据：

| 名称 |  类型  | 说明                              |
| :--: | :----: | --------------------------------- |
| msg  | string | 文字信息  ‘修改成功’   ‘参数错误’ |

```js
{
    msg:"修改成功" 或 "参数错误",
    code:203 或 400,
}
```





