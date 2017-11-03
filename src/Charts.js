
import React, { Component } from 'react';
import './App.css';
import CountUp from 'react-countup';
import Delay from 'react-delay';
import {BarChart, Bar, Rectangle} from 'recharts';
import Logo from './logo.png';

const data = [
      {name: 'Forward', forward: 60, other: 15 },

];

const CustomBar = (props) => {
	return (
  	<Rectangle {...props} radius={5} />
  )
}



const Charts = () => (
  <main className="App">
    <div className="right">
      <div className="chart-container">
        <div className="other">
          <div className="other-container-right">
            <p>1-2 min</p>
          </div>

          <BarChart
            width={150}
            height={42}
            data={data}
          >
            <Bar className="rounded"
              shape={CustomBar}
              dataKey="other"
              fill="#1994F0"
              ry={20}
              rx={20}
              animationDuration={800}
            />
          </BarChart>

        </div>
        <div className="forward">
          <div className="forward-container">
            <Delay wait={800} >
              <CountUp className="counter"
                useEasing={false}
                duration={2}
                start={0}
                end={38}
              />
            </Delay>
            <p>minutes</p>
          </div>

          <BarChart
            width={150}
            height={170}
            data={data}
          >
            <Bar className="rounded"
              shape={CustomBar}
              barSize={120}
              dataKey="forward"
              animationBegin={400}
              animationDuration={800}
              fill="#6D6D6D"
            />
          </BarChart>
        </div>
      </div>
      <div className="labels">
        <div className="img-container">
          <img src={Logo}/>
        </div>
        <p>TRADITIONAL <br></br> DOCTOR</p>
      </div>
    </div>

    <div className="line"></div>

    <div className="left">
      <div className="chart-container">
        <div className="forward">
          <div className="forward-container">
            <Delay wait={1200} >
              <CountUp className="counter"
                useEasing={false}
                duration={3}
                start={0}
                end={60}
              />
            </Delay>
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
              animationBegin={800}
              animationDuration={1200}
            />
          </BarChart>


        </div>

        <div className="other">
          <div className="other-container">
            <Delay wait={2000} >

              <CountUp className="counter"
                useEasing={false}
                duration={1}
                start={0}
                end={15}
              />
            </Delay>
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
              animationBegin={1500}
              animationDuration={800}
            />
          </BarChart>

        </div>
      </div>
      <div className="labels">
        <div className="img-container">
          <img src={Logo}/>
        </div>
        <p>TRADITIONAL <br></br> DOCTOR</p>
      </div>
    </div>

  </main>
);


export default Charts;
