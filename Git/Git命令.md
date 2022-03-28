### 安装Git

```
# 1、官网安装
# 2、打开 Git Bash 输入
  git config --global user.name "名称"
  git config --global user.email "邮箱"
```

### 将目录变成Git仓库

```
# 1、进入指定目录
cd 
# 2、初始化仓库
git init
```

### 将文件添加到仓库

```
# 1、添加
	文件
		git add 文件名1 文件名2
	目录
		git add [dir]
	目录下的所有文件
		git add .
# 2、提交
	git commit -m "Web"
```

### 添加远程仓库

```
# 1、创建SSH key
ssh-keygen -t rsa -C "邮箱"、

# 2、添加远程库
git remote add origin git@github.com:账户名/仓库名.git
例如:
git remote add origin git@github.com:983561477/Web.git
```

### 推送内容至远程仓库

```
git push -u origin master
```

### 暂存当前正在进行的工作

```
git stash
```

