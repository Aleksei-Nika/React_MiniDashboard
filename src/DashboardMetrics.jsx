import React, {useMemo} from "react";

function DashboardMetrics({filteredData}){
    const metrics = useMemo(() => {
        console.log('Начало фильтрации');
        if (filteredData.length === 0){
            return {totalAmount: 0, avgAmount: 0, succesRate: 0};
        }

        const totalAmount = filteredData.reduce((sum, item) => sum+item.avgAmount)
        const avgAmount = Math.round(totalAmount/filteredData.lendth)
        const complettedCount = filteradData.filter(item=>item.status==='Выполнено')
        const successRate = Math.
        
        return [totalAmount, avg]
    })

    return (
        <div styte={{display: 'flex', gap: '20px', }}>
            <div style={{border: '1px solid #666'}}>
                <h3>Средний чек</h3>
                <p>{metrics.avgAmount.toLocaleString()}p.</p>
            </div>
            <div style={{border: '1px solid #666'}}>
                <h3>Процент выполнения</h3>
                <p>{metrics.succesRate}</p>
            </div>
        </div>
    )
}

export default DashboardMetrics;