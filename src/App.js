import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';

const data = [
      {name: 'Forward', forward: 60, other: 15 },

];

const CustomBar = (props) => {
	return (
  	<Rectangle {...props} radius={5} />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="chart-container">
          <div className="forward">
            <div className="forward-container">
              <CountUp className="counter"
                useEasing={false}
                duration={1}
                start={0}
                end={60}
              />
              <p>minutes</p>
            </div>

            <BarChart
              width={150}
              height={340}
              data={data}
              radius={20}

            >
              <Bar className="rounded"
                shape={CustomBar}
                barSize={120}
                dataKey="forward"
                fill="#1994F0"
              />
            </BarChart>
            <h4>Forward</h4>

          </div>

          <div className="other">
            <div className="other-container">
              <CountUp className="counter"
                useEasing={false}
                duration={1}
                start={0}
                end={15}

              />
            <p>minutes</p>
            </div>

            <BarChart
              width={150}
              height={85}
              data={data}

            >
              <Bar className="rounded"
                shape={CustomBar}
                dataKey="other"
                fill="#6D6D6D"
                ry={20}
                rx={20}
              />
            </BarChart>
            <h4>TRADTITIONAL <br/> DOCTOR</h4>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
