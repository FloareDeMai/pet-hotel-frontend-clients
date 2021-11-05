import {Calendar} from "antd";

function SearchCalendar() {
 
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  return (
    <div className="flex items-center">
      <div className="mx-auto w-80 border-2 border-text-gray-600">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
}

export default SearchCalendar
