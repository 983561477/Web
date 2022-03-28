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
git add 文件名	// 跟踪/暂存指定文件
git add .			// 跟踪/暂存所有文件
  1、开始跟踪新文件
  2、把已跟踪的且已修改的文件放到暂存区
  3、把有冲突的文件标记为已解决的状态
  
// 移除暂存文件命令
git reset HEAD 文件名	// 移除指定文件
git reset HEAD .			// 移除所有文件
```

### 提交更新

```javascript
// 提交暂存区文件到Git仓库命令
git commit -m "描述"

// 跳过暂存区提交所有已跟踪过的文件 工作区 -> Git仓库
git commit -a -m "描述"
```

### 撤销对文件的修改

```javascript
// 把工作区中修改的文件还原成 Git 仓库中所保存的版本
git checkout -- 文件名
```

### 移除文件

```javascript
// 从Git仓库和工作区中同时移除指定文件
git rm -f 文件名
// 值移除Git仓库内的文件，保留工作区内的文件
git rm --cached 文件名
```

### 忽略文件

```javascript
// .gitignore
1、# 开头 // 注释
2、/ 结尾 // 目录
3、/ 开头 // 防止递归
4、! 开头 // 取反
5、glob模式 // 进行文件和文件夹的匹配(glob指简化了的正则表达式)
	1、* 			// 匹配零个或多个任意字符
	2、[abc] 	// 匹配任何一个列在方括号中的字符(此案例匹配一个a或一个b或一个c)
	3、?				// 只匹配一个任意字符
  4、[a-z]		// 匹配两个字符范围内字符(如:[0-9]: 匹配所有0到9的数字)
  5、**			// 匹配任意中间目录(如a/**/z: 可以匹配a/z、a/b/z或a/b/c/z等)
```

### 查看提交历史

```javascript
// 命令
git log			// 按时间先后顺序列出所有提交的历史，最近的提交排在最上面
git log -2	// 只展示最新的两次提交历史，数字可以按需进行修改
git log -2 --pretty=oneline	// 在一行上展示最近两次提交历史信息
git log -2 --pretty=format:"%h | %an | %ar | %s"	// 在一行上展示最近两次提交历史信息，自定义输出格式(分隔符可自定义修改) %h:提交的简写哈希值 %an:作者名字 %ar:作者修订日期 %s:提交说明
```

### 回退到指定的版本

```javascript
// 在一行上展示所有的提交历史
git log --pretty=oneline
// 使用 git reset --hard 命令，根据指定的提交 ID 回退到指定的版本
git reset --hard <CommitID>
  
// 在旧版本中使用 git reflog --pretty=oneline 命令，查看命令操作的历史
git reflog --pretty=oneline
// 再次根据最新的提交ID,跳转到最新的版本
git reset --hard <CommitID>
```

