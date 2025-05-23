import { WebBarChart } from './components/WebBarChart'

function App() {
  return (
    <div>
      <WebBarChart data={{
        seriesData: [120, 200, 150, 80, 70, 110, 130],
        xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }} />
    </div>
  )
}

export default App
