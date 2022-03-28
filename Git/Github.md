### 开源协议

```javascript
1、BSD
2、Apache Licence 2.0
3、GPL
	1、具有传染性的一种开源协议，不允许修改后和衍生的代码作为闭源的商业软件发布和销售、
  2、Linux
4、LGPL
5、MIT
	1、在修改后的代码或发行包中，必须包含原作者的许可信息
  2、jQuery、Node.js
```

### 开源项目托管平台

```javascript
1、GitHub
2、Gitlab
3、Gitee
```

### 关联并上传本地仓库

```javascript
// HTTPS 每次均需登录
git remote add origin https远程仓库地址		// 关联(第一次)
git push -u origin master		// 推送(第一次)
git push	// 推送

// SSH 免登陆的加密数据传输
  1、id_rsa	// 私钥文件，存放于客户端的电脑中即可
  2、id_rsa.pub	// 公钥文件，需要配置到Github中
// 命令
ssh-keygen-t rsa -b 4096 -C "邮箱"	// 连续敲3次回车，在C:\Users\用户名文件夹\.ssh目录中生成两个文件
// 检测 Github 中的 SSH key 是否配置成功
ssh -T git@github.com
// 关联并上上传
git remote add origin git远程仓库地址		// 关联(第一次)
git push -u origin master		// 推送(第一次)
git push	// 推送
```

### 将远程仓库代码克隆到本地

```javascript
// 命令
git clone 远程仓库地址
```

### 分支

```javascript
// master 主分支
用于保存和记录整个项目已完成的功能代码

// 功能分支

// 查看本地分支列表 
git branch		// * 当前所处的分支

// 创建本地新分支
git branch 分支名称		// 基于当前分支创建

// 切换本地分支
git checkout 分支名称

// 快速创建并切换本地分支
git checkout -b 分支名称

// 合并本地分支
1、切换分支到master
git checkout master
2、合并某分支
git merge 分支名称

// 删除本地分支
git branch -d 分支名称	// 需先合并本地分支
git branch -D 分支名称	// 强制删除本地分支

// 遇到冲突时的本地分支合并
1、在vscode中手动解决冲突
2、git add .
3、git commit -m "描述"

// 第一次将本地分支推送到远程仓库 第一次推送需要带 -u 参数
git push -u 远程仓库的别名(默认origin) 本地分支名称:远程分支名称
git push	// 之后推送
// 实际案例
git push -u origin payment:pay	// 本地名称:远程名称
git push -u origin payment	// 远程和本地分支名称保持一致

// 查看远程仓库分支列表
git remote show origin // 远程仓库名称(默认origin)

// 跟踪远程分支
// 从远程仓库中将对应的分支下载到本地仓库 保持本地分支和远程分支名称相同
git checkout 远程分支名称
// 重命名远程仓库分支在本地仓库分支的名称
git checkout -b 本地分支名称 远程仓库名称(默认origin)/远程分支名称

// 拉取远程分支的最新代码
git pull

// 删除远程分支
git push 远程仓库名称(默认origin) --delete 远程分支名称
```

