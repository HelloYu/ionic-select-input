## 使用说明
一个很简单的指令，封装ionic的`ion-radio`,可以进行输入，也可以选择下拉。
暂时只接受字符串数组 ['Ionic','AngularJs','Node.js'];
#### Demo
[Ionic-select-input](http://codepen.io/HelloYu/pen/yYWZYN)
## 在Html中引用
```html
 <select-input ng-model="currentInput" select-options="options"></select-input>
```
`ng-model`绑定选中之后的对象，`select-options`绑定要显示的select数组。
## Have fun !☣
![select-input](./select-input.gif)

