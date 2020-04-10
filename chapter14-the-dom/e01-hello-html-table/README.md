# e01 &mdash; Hello, HTML Table
> practising table creation from data

## Description

An HTML table is built with the following tag structure:

```html
<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>        
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>        
  </tr>
</table>
```

Given a data set of mountains in JSON format, generate the DOM structure for a table that enumerates the objects. Write this so that the columns are automatically derived from the object by taking the property names for the first object in the data.

Add the resulting table to the element with an id attribute of `"mountains"` so that it becomes visble in the document.

Right align cells that contain number values by setting their `style.textAlign` property to `'right'`.