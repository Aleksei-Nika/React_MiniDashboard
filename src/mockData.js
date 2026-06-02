const categories = ['Finance', 'Marceting', 'Dev', 'HR', 'Sales'];

const statuses = ['Выполнено', 'В обработке', 'Отклонено']

export const generateMockData = () => {
    const data = [];
    const startDate = new Date(2026, 0, 1)

    for (let i=1; i<=1100; i++){
        const randomCategories = categories[Math.floor(Math.random()*categories.length)];
        const randomeStatus = statuses[Math.floor(Math.random()*statuses.length)];
        const randomAmount = Math.floor(Math.random()*10000)+500;
        const date = new Date(startDate.getTime()+Math.random()*(30*24*60*60*1000));
        data.push({
            id: i,
            title: `Задача №${i}. ${randomCategories}`,
            amoumt: randomAmount,
            category: randomCategories,
            status: randomeStatus,
            date: date.toISOString().split('T')[0]
        });
    }
    return data;
}