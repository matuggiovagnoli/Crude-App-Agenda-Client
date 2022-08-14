import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerData } from '@syncfusion/ej2-react-calendars'

const Calendario = () => {
  return (
    <div>
      <header category='App' title='Calendar' ></header>
      <ScheduleComponent>
          <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendario