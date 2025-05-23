## 📦 How to Use Web Components

To use the web components in your application, follow these steps.

1. Build the application by running `npm run build` in your terminal. This command will generate the `dist/web-components.js` file containing the compiled code.

2. Add the compiled file to your application. 
If you're using React, place it inside the `public/` folder. 
For Java applications using Spring Boot and Thymeleaf, move the file to `src/main/resources/static`.

3. you need to inject it into your HTML. To do this, add the following line inside the `<head>` or before the closing `</body>` tag of your HTML file:

```html
<script type="text/javascript" src="/web-components.js"></script>

Once the script is loaded, you can use the web component in your application.

4. In a React environment, you can create the component using `React.createElement` like so:

```jsx
React.createElement('web-bar-chart', {
  data: {
    seriesData: [120, 200, 150, 80, 70, 110, 130],
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
});

If you're working in a Java project with Thymeleaf, you can dynamically create and insert the component using an inline script. Here's an example:

```html
<script th:inline="javascript">
  document.addEventListener('DOMContentLoaded', function () {
    const chartData = {
      seriesData: [120, 200, 150, 80, 70, 110, 130],
      xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    };

    const chartElement = document.createElement('web-bar-chart');
    chartElement.setAttribute('data', JSON.stringify(chartData));
    document.body.appendChild(chartElement);
  });
</script>
