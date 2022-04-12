### 数据库

```sql
-- 传统数据库
1、数据库 database
2、数据表 table
3、数据行 row
4、字段 field

-- 安装
1、MySQL Server: 专门用来提高数据存储和服务的软件
2、MySQL WirkBench: 可视化 MySQL 管理工具
```

### SQL

```sql
-- 关系型数据库编程语言
-- 重点掌握
1、查询数据 select
2、插入数据 insert into
3、更新数据 update
4、删除数据 delete
-- 额外掌握
1、where条件
2、and 和 or 运算符
3、order by 排序
4、count(*) 函数

-- SELECT 
SELECET * FROM 表名
SELECT 列名 FROM 表名

-- INSERT INTO
INSERT INTO table_name (列1, 列2, ...) VALUES (值1, 值2, ...)

-- UPDATE
UPDATE 表名
SET 列1 = 值1, 列2 = 值2, ...
WHERE 列名 = 某值

-- DELETE
DELETE FROM 表名 WHERE 条件

-- WHERE 子句 限定选择的标准
WHERE 列 运算符 值

-- 在 WHERE子语句中吧两个或多个条件结合起来
-- AND 
WHERE 列1 运算符 值1 AND 列2 运算符 值2 ... AND ...
-- OR 
WHERE 列1 运算符 值1 OR 列2 运算符 值2 ... OR ...

-- ORDER BY 排序 默认升序(ASC)
ORDER BY 列
-- ORDER BY 列 DESC	降序
ORDER BY 列 DESC
-- 多重排序
ORDER BY 列1 [DESC], 列2 [DESC], ... 

-- COUNT(*) 查询总数
SELECT COUNT(*) FROM 表名 WHERE 条件

-- AS 别名
SELECT COUNT(*) AS total FROM 表名 WHERE 条件
```

### 项目中使用MySQL

```javascript
// 安装操作 MySQL 数据库的第三方模块(mysql)
npm i mysql
// 通过 mysql 模块连接到 MySQL 数据库
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',				// 数据库的 IP 地址
  user: 'root',				// 登录数据库的账号
  password: '174388',		// 登录数据库的密码
  database: 'user',		// 指定要操作那个数据库
})
// 通过 mysql 模块执行 SQL 语句
const sqlStr = 'select 1'
db.query(sqlStr, (err, results) => {
  if(err) return console.log(err.message)
  console.log(results)
}) 

// 查询
const sqlStr = 'slect * from user'
db.query(sqlStr, (err, results) => {
  if(err) return console.log(err.message)
  console.log(results)
}) 

// 插入
const user = { name: '李四', age: 19}	// 需要插入的对象
const sqlStr = 'insert into user (name, age) values (?, ?)'		// ? 占位符
db.query(sqlStr, [user.name, user.age], (err, results) => {
  if(err) return console.log(err.message)		// 失败
  if(results.affectedRows === 1) console.log('插入成功')
})
	// 简便方法
const user = { name: '李四', age: 19}	// 需要插入的对象
const sqlStr = 'insert into user set ?'		// set ? 占位符
db.query(sqlStr, user, (err, results) => {
  if(err) return console.log(err.message)		// 失败
  if(results.affectedRows === 1) console.log('插入成功')
})

//更新数据
const user = { id: 5, name: '赵六', age: 20}
const sqlStr = 'update user set name = ?, age = ? where id = ?'
db.query(sqlStr, [user.name, user.age, user.id], (err, results) => {
  if(err) return console.log(err.message)		// 失败
  if(results.affectedRows === 1) console.log('更新成功')
})
	// 简便方法
const user = { id: 6, name: '赵六', age: 20}
const sqlStr = 'update user set ? where id = ?'
db.query(sqlStr, [user, user.id], (err, results) => {
  if(err) return console.log(err.message)		// 失败
  if(results.affectedRows === 1) console.log('更新成功')
})

// 删除数据
const sqlStr = 'delete from user where id = ?'
	// 只有一个占位符 可以省略数组
db.query(sqlStr, 3, (err, results) => {
  if(err) return console.log(err.message)		// 失败
  if(results.affectedRows === 1) console.log('删除成功')
})
// 标记删除 设置类似于 status 的状态字段，来标记这条数据是否被删除
```

