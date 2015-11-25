# ionic-select-input
:fish:a directive of ionic , compose the input and select .
# 使用说明
一个很简单的指令，封装ionic的`ion-radio`,可以进行输入，也可以选择下拉。
暂时只接受字符串数组 ['Ionic','AngularJs','Node.js'];
## 在Html中引用
```html
 <select-input ng-model="currentInput" select-options="options"></select-input>
```
`ng-model`判定选中之后的对象，`select-options`判断要显示的select数组。
## Have fun !☣
![select-input](./select-input.png);

