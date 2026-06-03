import React, {useEffect, useRef, useState} from "react";

export default function TaskModal(isOpen, onClose, onAdd){
    const titleInputRef = useRef(null);
    const [formData, setFormData] = useState({title: '', amount:'', category:'dev', status:'В обработке'});

    // для автоматического фокуса при открытии
    useEffect(() => {
        if(isOpen && titleInputRef.current){
            titleInputRef.focus()
        }
    }, [isOpen]);
    
    if (!isOpen) return null;

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.amount) return;
        onAdd({
            ...formData,
            id: Date.now(),
            amount: Numder(formData.amount),
            date: new Data().toISOSString().split('T')[0]
        });
        setFormData({title: '', amount:'', category:'dev', status:'В обработке'});
        onClose();
    };

    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgraoundColor: 'rgba(0, 0, 0, 0.2)',
        display: flex,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    };

    const formStyle = {
        backgraoundColor: 'white',
        padding: '20px',
        width: '400px'
    };

    return (
        <div style={modalStyle}>
            <div style={formStyle}>
                <h3>Новая запись</h3>
                <form onSubmit={handelSubmit} style={{displey: 'flex'}}>
                    <input ref={titleInputRef}
                        type="text"
                        placeholder="Название задачи"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})} />
                    <input type="number"
                        value={formData.category}
                        placeholder="Категория"
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})} />
                    />

                </form>
            </div>
        </div>
    );
}