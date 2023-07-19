import React from "react";
import '../index.css'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { curveCardinal } from "d3-shape";

function Stockcard() {
    return (
        <div className="stockcard">
            <div className="stockcard--head--wrap">
                <h2>Spotify</h2>
                <h3>SPOT</h3>
            </div>
            <div className="stockcard--wrap">
                <div className="stockcard--graph">
                    {Chart}
                </div>
                <div className="stockcard--price">
                    <p className="stockcard--price--main">$150.00</p>
                    <p className="stockcard--price--profit">+2.94%</p>
                </div>
            </div>
        </div>
    );
}


const data = [];
for (let num = 30; num >= 0; num--) {
    data.push({
        date: subDays(new Date(), num).toISOString().substring(0, 10),
        value: 1 + Math.random()
    })
}

export const Chart = (
    <ResponsiveContainer width='100%' height='100%' >
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
            {/* <Tooltip content={<Customtooltip />} cursor={false} /> */}
            {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
        </AreaChart>
    </ResponsiveContainer>
)

export default Stockcard;
