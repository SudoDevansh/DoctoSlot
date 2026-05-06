import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function RightSidebar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="right-sidebar">
      <div className="widget-card calendar-widget">
        <h3 style={{ marginBottom: '15px' }}>Calendar</h3>
        
        <Calendar 
          onChange={setDate} 
          value={date} 
          className="custom-calendar"
        />
        
      </div>
      
      <div className="widget-card upcoming-events">
        <h3>Upcoming</h3>
        <p>Monthly doctor's meet</p>
      </div>
      
      <div className="widget-card daily-read">
        <p>DAILY READ</p>
        <h4>Living in rishihoood university may reduce your life by 10 years!!!</h4>
      </div>

    </div>
  );
}

export default RightSidebar;