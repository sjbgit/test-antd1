import React from "react";
import 'antd/dist/reset.css';
import {
  Form,
  Button,
  Input,
  Divider,
  Col,
  TimePicker,
  Typography,
  Row,
  Select
} from "antd";
//import DynamicField from "./DynamicField";
//import "./styles.css";
//import "antd/dist/antd.css";

const defaultFormItemLayout = {
  labelCol: {
    xs: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 12 }
  }
};

export default function App() {
  const [form] = Form.useForm();

  function handleFinish(values) {
    console.log("VALUES", values);
    alert("Check console for values");
  }
  return (
    <div className="App">
      <>
        <Form
          colon
          initialValues={{
            "approver-key-accounts": "4 days before period end date",
            "bussiness-admin-nonkey-accounts": "4 days after period end date",
            "consultant-nonkey-accounts": "2 days before period end date",
            "executive-nonkey-accounts": "on the day of the period end date",
            "local-admin-nonkey-accounts": "1 days after period end date",
            "manager-nonkey-accounts": "1 days before period end date",
            "preparer-key-accounts": "1 days after period end date",
            "reviewer-key-accounts": "2 days after period end date",
            "system-admin-nonkey-accounts": "on the day of period end date"
          }}
          labelAlign="right"
          labelCol={{
            md: {
              offset: 0,
              span: 4
            },
            sm: {
              offset: 0,
              span: 2
            },
            xs: {
              offset: 0,
              span: 1
            }
          }}
          layout="horizontal"
          name="due-dates"
          onFieldsChange={function noRefCheck() {}}
          onFinish={function noRefCheck() {}}
          onFinishFailed={function noRefCheck() {}}
          onValuesChange={function noRefCheck() {}}
          size="middle"
          wrapperCol={{
            md: {
              offset: 0,
              span: 8
            },
            sm: {
              offset: 0,
              span: 4
            },
            xs: {
              offset: 0,
              span: 2
            }
          }}
        >
          <Form.Item></Form.Item>
          <Form.Item>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Form.Item>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Preparer"
                name="preparer-key-accounts"
                rules={[
                  {
                    message: "Please enter due date",
                    required: true
                  }
                ]}
              >
                <Input defaultValue="6 days after period end date" />
              </Form.Item>
              <Form.Item
                label="Reviewer"
                name="reviewer-key-accounts"
                rules={[
                  {
                    message: "Please enter due date",
                    required: false
                  }
                ]}
              >
                <Input defaultValue="6 days after period end date" />
              </Form.Item>
              <Form.Item
                label="Approver"
                name="approver-key-accounts"
                rules={[
                  {
                    message: "Please enter due date",
                    required: false
                  }
                ]}
              >
                <Input defaultValue="6 days after period end date" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item label="Post Date" name="post-date">
                <Select placeholder="Select">
                  <Select.Option value="other">Other</Select.Option>
                  <Select.Option value="calculated">Calculated</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Approval Time" name="approve-time">
                <TimePicker />
              </Form.Item>
              <Form.Item label="Document Type" name="document-type">
                <Input defaultValue="IC" />
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Input placeholder="Placeholder text" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Form.Item>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item label="Tax Type" name="tax-type">
                <Input placeholder="Placeholder text" />
              </Form.Item>
              <Form.Item label="Tax Rate" name="tax-rate">
                <Input defaultValue="IC" />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Save
              </Button>
              <Button onClick={function noRefCheck() {}} type="secondary">
                Cancel
              </Button>
            </Form.Item>
          </div>
        </Form>
      </>
    </div>
  );
}






// import { useState } from 'react'
// import { Button, Form, Row, Col, Input, Typography.Title, Select, Option } from 'antd';
// import 'antd/dist/reset.css';
// import reactLogo from './assets/react.svg'
// import './App.css'
// //import Option from Select.Option 

// function App() {
//   const [count, setCount] = useState(0)

//   return (

//     <>
//   <Form
//     colon
//     initialValues={{
//       'approver-key-accounts': '4 days before period end date',
//       'bussiness-admin-nonkey-accounts': '4 days after period end date',
//       'consultant-nonkey-accounts': '2 days before period end date',
//       'executive-nonkey-accounts': 'on the day of the period end date',
//       'local-admin-nonkey-accounts': '1 days after period end date',
//       'manager-nonkey-accounts': '1 days before period end date',
//       'preparer-key-accounts': '1 days after period end date',
//       'reviewer-key-accounts': '2 days after period end date',
//       'system-admin-nonkey-accounts': 'on the day of period end date'
//     }}
//     labelCol={{
//       md: {
//         offset: 0,
//         span: 4
//       },
//       sm: {
//         offset: 0,
//         span: 2
//       },
//       xs: {
//         offset: 0,
//         span: 1
//       }
//     }}
//     layout="horizontal"
//     name="due-dates"
//     onFieldsChange={function noRefCheck(){}}
//     onFinish={function noRefCheck(){}}
//     onFinishFailed={function noRefCheck(){}}
//     onValuesChange={function noRefCheck(){}}
//     size="middle"
//     wrapperCol={{
//       md: {
//         offset: 0,
//         span: 8
//       },
//       sm: {
//         offset: 0,
//         span: 4
//       },
//       xs: {
//         offset: 0,
//         span: 2
//       }
//     }}
//   >
//     <Form>
//       <Typography.Title level={2}>
//         Columns to show
//       </Typography.Title>
//     </Form>
//     <Form>
//       <Typography.Title level={2}>
//         Key Accounts Due Dates
//       </Typography.Title>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </Form>
//     <Row>
//       <Col span={24}>
//         <Form
//           label="Preparer"
//           name="preparer-key-accounts"
//           rules={[
//             {
//               message: 'Please enter due date',
//               required: true
//             }
//           ]}
//         >
//           <Input defaultValue="6 days after period end date" />
//         </Form>
//         <Form
//           label="Reviewer"
//           name="reviewer-key-accounts"
//           rules={[
//             {
//               message: 'Please enter due date',
//               required: false
//             }
//           ]}
//         >
//           <Input defaultValue="6 days after period end date" />
//         </Form>
//         <Form
//           label="Approver"
//           name="approver-key-accounts"
//           rules={[
//             {
//               message: 'Please enter due date',
//               required: false
//             }
//           ]}
//         >
//           <Input defaultValue="6 days after period end date" />
//         </Form>
//       </Col>
//     </Row>
//     <Form>
//       <Typography.Title level={2}>
//         General
//       </Typography.Title>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </Form>
//     <Row
//       gutter={[
//         16,
//         16
//       ]}
//     >
//       <Col span={24}>
//         <Form
//           label="Post Date"
//           name="post-date"
//         >
//           <Select placeholder="Select">
//             <Select.Option value="other">
//               Other
//             </Select.Option>
//             <Select.Option value="calculated">
//               Calculated
//             </Select.Option>
//           </Select>
//         </Form>
//         <Form
//           label="Approval Time"
//           name="approve-time"
//         >
//           <TimePicker />
//         </Form>
//         <Form
//           label="Document Type"
//           name="document-type"
//         >
//           <Input defaultValue="IC" />
//         </Form>
//         <Form
//           label="Description"
//           name="description"
//         >
//           <Input placeholder="Placeholder text" />
//         </Form>
//       </Col>
//     </Row>
//     <Form>
//       <Typography.Title level={2}>
//         Tax
//       </Typography.Title>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </Form>
//     <Row
//       gutter={[
//         16,
//         16
//       ]}
//     >
//       <Col span={24}>
//         <Form
//           label="Tax Type"
//           name="tax-type"
//         >
//           <Input placeholder="Placeholder text" />
//         </Form>
//         <Form
//           label="Tax Rate"
//           name="tax-rate"
//         >
//           <Input defaultValue="IC" />
//         </Form>
//       </Col>
//     </Row>
//     <div>
//       <Form>
//         <Button
//           htmlType="submit"
//           type="primary"
//         >
//           Save
//         </Button>
//         <Button
//           onClick={function noRefCheck(){}}
//           type="secondary"
//         >
//           Cancel
//         </Button>
//       </Form>
//     </div>
//   </Form>
// </>
//     // <div className="App">
//     //   <div>
//     //     <a href="https://vitejs.dev" target="_blank">
//     //       <img src="/vite.svg" className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://reactjs.org" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </div>
//   )
// }

// export default App
