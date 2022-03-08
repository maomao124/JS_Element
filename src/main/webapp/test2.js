/**
 * Project name(项目名称)：JS_Element
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/8
 * Time(创建时间)： 12:30
 * Version(版本): 1.0
 * Description(描述)：
 * Element 对象中的方法
 方法                描述
 element.addEventListener()    为指定元素定义事件
 element.appendChild()    为元素添加一个新的子元素
 element.cloneNode()    克隆某个元素
 element.compareDocumentPosition()    比较当前元素与指定元素在文档中的位置，返回值如下：
 1：表示两个元素没有关系，不属于同一文档；
 2：表示当前元素在指定元素之后；
 4：当前元素在指定元素之前；
 8：当前元素在指定元素之内；
 16：指定元素在当前元素之内；
 32：两个元素没有关系，或者它们是同一元素的两个属性。
 element.focus()    使元素获得焦点
 element.getAttribute()    通过属性名称获取指定元素的属性值
 element.getAttributeNode()    通过属性名称获取指定元素得属性节点
 element.getElementsByTagName()    通过标签名获取当前元素下的所有子元素的集合
 element.getElementsByClassName()    通过类名获取当前元素下的子元素的集合
 element.hasAttribute()    判断元素是否具有指定的属性，若存在则返回 true，不存在则返回 false
 element.hasAttributes()    判断元素是否存在任何属性，若存在则返回 true，不存在则返回 false
 element.hasChildNodes()    判断一个元素是否具有子元素，有则返回 true，没有则返回 false
 element.hasFocus()    判断元素是否获得了焦点
 element.insertBefore()    在已有子元素之前插入一个新的子元素
 element.isDefaultNamespace()    如果指定 namespaceURI 是默认的则返回 true，否则返回 false。
 element.isEqualNode()    检查两个元素是否相等
 element.isSameNode()    检查当前元素与指定元素是否为同一元素
 element.isSupported()    判断当前元素是否支持某个特性
 element.normalize()    合并相邻的文本节点，并删除空的文本节点
 element.querySelector()    根据 CSS 选择器，返回第一个匹配的元素
 document.querySelectorAll()    根据 CSS 选择器，返回所有匹配的元素
 element.removeAttribute()    从元素中删除指定的属性
 element.removeAttributeNode()    从元素中删除指定的属性节点
 element.removeChild()    删除一个子元素
 element.removeEventListener()    移除由 addEventListener() 方法添加的事件
 element.replaceChild()    替换一个子元素
 element.setAttribute()    设置或者修改指定属性的值
 element.setAttributeNode()    设置或者修改指定的属性节点
 element.setUserData()    在元素中为指定键值关联对象
 element.toString()    将元素转换成字符串
 nodelist.item()    返回某个元素基于文档树的索引
 */
