# react-tgame
## 学习react，写井字棋游戏

### render时绑定this的方法
* 在组件中使用箭头函数，此方法不能使用在render时需要执行函数／props的函数的场景
```
handle = () => {
  // doing something
}
```

* 在render的jsx里使用箭头函数
```
<a href="#" onClick={() => this.jumpTo(index)}>{desc}</a>
```

* 在constructor中bind this
```
constructor(props) {
  super(props)
  this.handleClick = this.handleClick.bind(this)
}

```
