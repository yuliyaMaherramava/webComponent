import r2wc from '@r2wc/react-to-web-component'
import BarChart from './components/BarChart/index.tsx'

const WebBarChart = r2wc(BarChart, {
  props: {
    data: "json",
  },
})

customElements.define("web-bar-chart", WebBarChart)
