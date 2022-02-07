import Recharts from './recharts'
import defaultStyleOptions from './defaultStyleOptions.js'
import logo from './logo.svg';
import './App.css';

export default class NavBar {

function NavBar() {
  return (
    <div className="NavBar">
	<input type="text"/>
    </div>
  );

const data = {...}

const options = {
  defaultStyleOptions,
  series: {
    _type: 'area',
    fill: 'rgba(97, 125, 233, 0.6)',
    stroke: '#617DE9',
    type: 'monotone',
    label: true
  }
}

const AreaChart = () => (
  <Recharts chart={{ options, data }} />
)
}
}
export default App;
