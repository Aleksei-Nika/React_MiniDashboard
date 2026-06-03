import React, {useState, useMemo, useEffect} from "react";
import { generateMockData } from './mockData';
import DashboardMetrics from './DashboardMetrics';
import FilterPanel from "./FilterPanel";
import AnalyticTable from "./AnalyticTable";
import TaskModal from "./TaskModal";

function App() {
  const [rawData, setRawData] = useState(() => generateMockData());
  const [filters, setFilters] = useState({search:'', category:'', status:''});
  const [isModalOpen, setModalOpen] = useState(false);

    // фильтрация массива
  const filteredData = useMemo(() => {
    return rawData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category ? item.category === filters.category : true;
      const matchesStatus = filters.status ? item.status === filters.status : true;
      return matchesSearch && matchesCategory && matchesStatus;
    })
  }, [rawData, filters.search, filters.category, filters.status]);

  // слушатель клавиш
  useEffect (() => {
    const handelKeyDown = (e) => {
      if(e.altkey && (e.key === 'n' || e.key === 'т' || e.key === 'N' || e.key === 'Т')) {
        e.preventDefalt();
        setModalOpen(true);
      };
    };
    window.addEventListener('keydown', handelKeyDown);
    return ()=> window.removeEventListener('keydown', handelKeyDown)
  }, []);

  const handelAddNewItem = (newItem) => {
    setRawData(prev)
  }

  const handelNewItem = () => {};

  return (
  <>
    <h1>Dashboard Builder</h1>
    <DashboardMetrics filteredData={filteredData} />
    <FilterPanel 
      filters = {filters}
      setFilters = {setFilters}
      onOpenModal = {() => setModalOpen(true)}
    />
    <AnalyticTable data={filteredData}/>
    <TaskModal  isOpen={isModalOpen} onClose= />
  </>
  
  )
}

export default App;