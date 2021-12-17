### 一、`grid` 布局是什么

Grid 布局即网格布局，比较擅长将一个页面划分为几个主要区域，我认为它是最强大的 CSS 布局方案，是目前唯一一种 CSS 二维布局。

### 二、`Grid` 布局和 `flex` 布局区别

`flex` 布局是一维布局，`Grid` 布局是二维布局。`flex` 布局一次只能处理一个维度上的元素布局，一行或者一列。`Grid` 布局是将容器划分成了“行”和“列”，产生了一个个的网格，我们可以将网格元素放在与这些行和列相关的位置上，从而达到我们布局的目的。

### 三、学属性

`Grid` 布局属性可以分为两大类，一类是[容器属性](####容器属性)，一类是[项目属性](####项目属性)。

#### 容器属性

  1.  `display` 属性
   我们通过在元素上声明 `display：grid` 或 `display：inline-grid` 来创建一个网格容器。声明 `display：grid` 则该容器是一个块级元素，设置成 `display: inline-grid` 则容器元素为行内元素
  2. `grid-template-columns` && `grid-template-columns` 属性
  grid-template-columns 属性设置列宽，grid-template-rows 属性设置行高，这两个属性在 Grid 布局中是很重要的
  
  - **固定的列宽和行高**

    ```css
    .wrapper {
      display: grid;
      /*  声明了三列，宽度分别为 200px 100px 200px */
      grid-template-columns: 200px 100px 200px;
      /* 行和列间距 5px */
      grid-gap: 5px;
      /*  声明了两行，行高分别为 50px 50px  */
      grid-template-rows: 50px 50px;
    }

    ```
    以上表示固定列宽为 200px 100px 200px，行高为 50px 50px

    ![](images/1.png)

  - **repeat() 函数** : 可以简化重复的值。该函数接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。
    ```css
      .wrapper {
        display: grid;
        grid-template-columns: 200px 100px 200px;
        grid-gap: 5px;
        /*  2行，而且行高都为 50px  */
        grid-template-rows: repeat(2, 50px);
      }
    ```
  
  - **auto-fill 关键字** : 自动填充，让一行（或者一列）中尽可能的容纳更多的单元格。
    ```css
      .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        grid-gap: 5px;
        grid-auto-rows: 50px;
      }
    ```
  
#### 项目属性
