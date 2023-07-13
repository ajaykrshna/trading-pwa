import React from "react";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import ob from '../Data/ITCM'
dayjs.extend(localizedFormat)

const Yahoodataid = () => {
    const results = ob.chart.result[0]
    const convertedTime = new Date(results.meta.firstTradeDate *1000)
    const pree = new Date(results.meta.currentTradingPeriod.pre.end *1000)
    const pres = new Date(results.meta.currentTradingPeriod.pre.start *1000)
    const rege = new Date(results.meta.currentTradingPeriod.regular.end *1000)
    const regs = new Date(results.meta.currentTradingPeriod.regular.start *1000)
    const poste = new Date(results.meta.currentTradingPeriod.post.end *1000)
    const posts = new Date(results.meta.currentTradingPeriod.post.start *1000)
    const trae = new Date(results.meta.tradingPeriods[0][0].end *1000)
    const tras = new Date(results.meta.tradingPeriods[0][0].start *1000)
    console.log(results.indicators.quote[0].high.length)
    console.log(results.indicators.quote[0].volume.length)
    console.log(results.indicators.quote[0].close.length)
    console.log(results.indicators.quote[0].low.length)
    console.log(results.indicators.quote[0].open.length)
    console.log(results.timestamp.length)
    return (
        <div>
            pre end : {dayjs(pree).format('LLLL')} <br/>
            pre start: {dayjs(pres).format('LLLL')} <br/>
            reg end: {dayjs(rege).format('LLLL')} <br/>
            reg start: {dayjs(regs).format('LLLL')} <br/>
            post end: {dayjs(poste).format('LLLL')}<br/>
            post start: {dayjs(posts).format('LLLL')}<br/>
            tra start: {dayjs(tras).format('LLLL')}<br/>
            tra0 end: {dayjs(trae).format('LLLL')}
        </div>
    );
};

export default Yahoodataid;