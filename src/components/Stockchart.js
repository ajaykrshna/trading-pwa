import React, { useState } from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";
import { curveCardinal } from "d3-shape";
import spotify from '../images/Spotifylogo.png'

import dataITC1D from '../Data/ITCD'
import dataITC1W from '../Data/ITCW'
import dataITC1M from '../Data/ITCM'
import dataITC6M from '../Data/ITC6M'
import dataITC1Y from '../Data/ITCY'
import dataITC5Y from '../Data/ITC5Y'

import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)


const red = '#eb5168'
const green = "#1ED760"

const data = [];
dataITC1D.chart.result[0].indicators.quote[0].close.forEach((val, index) => {
    const timestamp = dataITC1D.chart.result[0].timestamp[index];
    const convtime = new Date(timestamp * 1000)
    if (val) {
        data.push({
            date: dayjs(convtime).format('LL'),
            value: val
        })
    }
});

function Stockchart() {

    const [timeline, setTimeline] = useState('1D')
    return (
        <div className="graph">
            <div className="stockpage--head">
                <div className="stockpage--head--wrap--logo">
                    <img src={spotify} />
                    <h2>Spotify</h2>
                </div>
                <div className="stockpage--head--wrap--price">
                    <p className="stockpage--head--la">Last close</p>
                    <p className="stockpage--head--price">$150.00</p>
                </div>
            </div>
            <ResponsiveContainer width='100%' height='70%'>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorgreen" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1ED760" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#1ED760" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="colorred" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#eb5168" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#eb5168" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <Area type={curveCardinal} dataKey='value' stroke='#e51837' strokeWidth={2.5} fill="url(#colorred)" />
                    <XAxis
                        dataKey='date'
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                        tickFormatter={str => {

                        }}
                    />
                    <YAxis
                        dataKey='value'
                        hide={true}
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        type="number"
                        domain={['dataMin-10', "dataMax"]}
                        tickFormatter={(number) => `$${number.toFixed(2)}`}
                    />
                    <Tooltip content={<Customtooltip />} cursor={false} />
                    {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
                </AreaChart>
            </ResponsiveContainer>
            <div className="stockchart--datatime">
                <p className={timeline === '1D' ? 'timeactive' : 'timepending'} onClick={() => setTimeline('1D')}>1D</p>
                <p className={timeline === '1W' ? 'timeactive' : 'timepending'} onClick={() => setTimeline('1W')}>1W</p>
                <p className={timeline === '1M' ? 'timeactive' : 'timepending'} onClick={() => setTimeline('1M')}>1M</p>
                <p className={timeline === '3M' ? 'timeactive' : 'timepending'} onClick={() => setTimeline('3M')}>3M</p>
                <p className={timeline === '1Y' ? 'timeactive' : 'timepending'} onClick={() => setTimeline('1Y')}>1Y</p>
                <p className={timeline === '5Y' ? 'timeactive' : 'timepending'} onClick={() => setTimeline('5Y')}>5Y</p>
            </div>
        </div>
    );
}

function Customtooltip({ active, payload, label }) {
    if (active) {
        return (
            <div className="chart--tooltip">
                <h4>{label}</h4>
                <p> {payload[0].value.toFixed(2)} INR</p>
            </div>
        )
    }
    return null;
}

export default Stockchart;
