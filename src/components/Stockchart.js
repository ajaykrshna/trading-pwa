import React from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { curveCardinal } from "d3-shape";

const data = [];

for (let num = 30; num >= 0; num--) {
    data.push({
        date: subDays(new Date(), num).toISOString().substring(0, 10),
        value: 1 + Math.random()
    })
}

function Stockchart() {
    return (
        <ResponsiveContainer width='100%' height={'100%'}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1ED760" stopOpacity={0.4} />
                        <stop offset="75%" stopColor="#1ED760" stopOpacity={0.05} />
                    </linearGradient>
                </defs>
                <Area type={curveCardinal} dataKey='value' stroke="#1ED760" strokeWidth={2.5} fill="url(#color)" />
                {/* <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tickFormatter={str => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        /> */}
                <YAxis
                    dataKey='value'
                    hide={true}
                    axisLine={false}
                    tickLine={false}
                    tickCount={8}
                    type="number"
                    domain={["auto", "auto"]}
                    tickFormatter={(number) => `$${number.toFixed(2)}`}
                />
                <Tooltip content={<Customtooltip />} cursor={false} />
                {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
            </AreaChart>

        </ResponsiveContainer>
    );
}

function Customtooltip({ active, payload, label }) {
    if (active) {
        return (
            <div className="chart--tooltip">
                {/* <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4> */}
                <p> {payload[0].value.toFixed(2)} INR</p>
            </div>
        )
    }
    return null;
}

export default Stockchart;