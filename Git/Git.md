### Git

```javascript
// 开源的分布式版本控制系统
1、Git 快照	// 空间换时间
2、本地执行 	// 可离线操作

// 三个区域
1、工作区
	1、未被 Git 管理: 
		未跟踪: 不被 Git 所管理的文件
  2、已被 Git 管理: 
		未修改: 工作区中的文件和 Git 仓库中的文件保持一致
		已修改: 工作区中的文件和 Git 仓库中的文件不一致
		已暂存: 工作区中被修改的文件已被放到暂存区，准备放入 Git 仓库中
2、暂存区
3、Git 仓库

// 三种状态
1、已修改 modified
2、已暂存 staged
3、已提交 committed

// 工作流程
1、在工作区修改文件
2、暂存
3、提交更新
```

### 配置用户信息

```javascript
// 配置用户名称和邮箱
git config --global user.name "名称"
git config --global user.email "邮箱"

// 全局配置文件 
C:/Users/用户名文件夹/.gitconfig

// 检查配置信息
	// 查看所有的全局配置项
	git config --list --global
  // 查看指定的全局配置项
  git config user.name
	git config suer.email

// 获取帮助信息
git help <verb>		// git help config	浏览器打开
giet <verb> -h		// git config -h		终端打开
```

### Git 仓库

```javascript
// 将本地目录转换为 Git 仓库
1、在项目目录中 右键打开 "Git Bash"
2、执行 git init 将当前目录转化为 Git 仓库

// 从服务器克隆一个已存在的 Git 仓库
```

### 检查文件状态

```javascript
// 检查文件状态命令			
git status
  1、未跟踪: Untracked files
  2、已跟踪-已修改-未暂存: Changes not staged for commit
  3、已跟踪-已修改-已暂存: Changes to be committed

// 精简方式显示文件状态
git status -s		// git status --short
  1、未跟踪: ??
  2、已跟踪-已修改-未暂存: M
  3、已跟踪-已暂存: A

```

### 跟踪 / 暂存文件

```javascript
// 跟踪/暂存文件命令
git add 文件名
git add .			// 跟踪/暂存所有文件
  1、开始跟踪新文件
  2、把已跟踪的且已修改的文件放到暂存区
  3、把有冲突的文件标记为已解决的状态
```

### 提交更新

```javascript
// 提交暂存区文件到Git仓库命令
git commit -m "描述"
```

### 撤销对文件的修改

```javascript
// 把工作区中修改的文件还原成 Git 仓库中所保存的版本
git checkout -- 文件名
```

