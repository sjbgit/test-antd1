import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { DatePicker, version, Select } from "antd";
import "antd/dist/antd.css";
const Option = Select.Option;

ReactDOM.render(
  <div style={{ margin: 24 }}>
    <Select
      style={{ width: 500 }}
      mode="multiple"
      labelInValue
      tokenSeparators={[" ", ","]}
      defaultvalue={[{ key: "green", label: <span style={{ color: 'green' }}>绿色</span> }]}
    >
      <Option key={"green"} value={"vert"}><span style={{ color: 'green' }}>vert</span></Option>
      <Option key={"red"} value={"rouge"}><span style={{ color: 'red' }}>rouge</span></Option>
    </Select>
  </div>,
  document.getElementById("root")
);
