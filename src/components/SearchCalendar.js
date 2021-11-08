import { DatePicker, Space } from "antd";
import moment from "moment";

function SearchCalendar(props) {
  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MM-YYYY";
  return (
    <div className="mx-auto mt-4 ">
      <div className="border-2 rounded-full border-text-gray-600">
        <Space direction="vertical" size={12}>
          <RangePicker
            format={dateFormat}
            className="rounded-full"
            disabledDate={(current) => {
              return moment().add(-1, "days") >= current;
            }}
            onChange={props.handleDates}
          />
        </Space>
      </div>
    </div>
  );
}

export default SearchCalendar;
