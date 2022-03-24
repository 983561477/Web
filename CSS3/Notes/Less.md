### Less简介

> CSS预处理器
>
> 逻辑性、计算性

### 注释

```less
// 单行注释 ctrl + /

/* 多行注释: shift + alt + A */
```

### 加减乘除

```less
100 + 10 px
100 - 20 px
100 * 2 px
(100 / 2) rem
100 ./ 2 rem
```

### 嵌套写法

```less
.父级选择器 {
  .子级选择器 {
  }
}

& 当前选择器
.father {
  &:hover {
  
	}
}
```

### 变量

```less
@变量名: 值;
CSS属性: @变量名;
```

### 导入

```less
// 可以省略.less
@import "文件路径";
```

### 导出

```less
// 导入abc文件夹下(第一行)
// out: ./abc/

// 导出abc下x.css
// out: ./abc/x.css

// 不导出
// out: false
```

