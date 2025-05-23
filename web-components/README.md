# Web components that can be used in different applications ( React, Java and etc)

To use them:
1. Build the application: 
  npm run build

2. Add compiled dist/web-components.js file to your application;
  if React - place to public folder
  if Java - place to resources/static

3. Inject script into html file; 
  <script type="text/javascript" src="/web-components.js"></script>

4. Place a web component tag into your application:
Example:
React.createElement('web-bar-chart', { data: {seriesData: [120, 200, 150, 80, 70, 110, 130],xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} });

Or in Java + Thymeleaf
 <script th:inline="javascript">
        document.addEventListener('DOMContentLoaded', function () {
            const chartData = {seriesData: [120, 200, 150, 80, 70, 110, 130], xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']};
            const chartElement = document.createElement('web-bar-chart');
            chartElement.setAttribute('data', JSON.stringify(chartData));
            document.body.appendChild(chartElement);
        });
    </script>
  
5. That's it. Enjoy!