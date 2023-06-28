import React from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { curveCardinal } from "d3-shape";
import spotify from '../images/Spotifylogo.png'

const data = [];

const red = '#eb5168'
const green = "#1ED760"

for (let num = 30; num >= 0; num--) {
    data.push({
        date: subDays(new Date(), num).toISOString().substring(0, 10),
        value: 1 + Math.random()
    })
}

function Stockchart() {
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
                            const date = parseISO(str);
                            if (date.getDate() % 7 === 0) {
                                return format(date, "MMM, d");
                            }
                            return "";
                        }}
                    />
                    <YAxis
                        dataKey='value'
                        hide={true}
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        type="number"
                        /* domain={["auto", "auto"]} */
                        tickFormatter={(number) => `$${number.toFixed(2)}`}
                    />
                    <Tooltip content={<Customtooltip />} cursor={false} />
                    {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
                </AreaChart>
            </ResponsiveContainer>
            {datatime}
        </div>
    );
}

function Customtooltip({ active, payload, label }) {
    if (active) {
        return (
            <div className="chart--tooltip">
                <h4>{format(parseISO(label), "eee, d MMM")}</h4>
                <p> {payload[0].value.toFixed(2)} INR</p>
            </div>
        )
    }
    return null;
}

const datatime = (
    <div className="stockchart--datatime">
        <p>1D</p>
        <p>1W</p>
        <p>1M</p>
        <p>3M</p>
        <p>1Y</p>
        <p>5Y</p>
    </div>
)



export default Stockchart;
