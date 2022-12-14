<>
  <Form
    colon
    initialValues={{
      'approver-key-accounts': '4 days before period end date',
      'bussiness-admin-nonkey-accounts': '4 days after period end date',
      'consultant-nonkey-accounts': '2 days before period end date',
      'executive-nonkey-accounts': 'on the day of the period end date',
      'local-admin-nonkey-accounts': '1 days after period end date',
      'manager-nonkey-accounts': '1 days before period end date',
      'preparer-key-accounts': '1 days after period end date',
      'reviewer-key-accounts': '2 days after period end date',
      'system-admin-nonkey-accounts': 'on the day of period end date'
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
    onFieldsChange={function noRefCheck(){}}
    onFinish={function noRefCheck(){}}
    onFinishFailed={function noRefCheck(){}}
    onValuesChange={function noRefCheck(){}}
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
    <FormItem>

    </FormItem>
    <FormItem>
      <Typography.Title level={2}>
        Key Accounts Due Dates
      </Typography.Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </FormItem>
    <Row>
      <Col span={24}>
        <FormItem
          label="Preparer"
          name="preparer-key-accounts"
          rules={[
            {
              message: 'Please enter due date',
              required: true
            }
          ]}
        >
          <Input defaultValue="6 days after period end date" />
        </FormItem>
        <FormItem
          label="Reviewer"
          name="reviewer-key-accounts"
          rules={[
            {
              message: 'Please enter due date',
              required: false
            }
          ]}
        >
          <Input defaultValue="6 days after period end date" />
        </FormItem>
        <FormItem
          label="Approver"
          name="approver-key-accounts"
          rules={[
            {
              message: 'Please enter due date',
              required: false
            }
          ]}
        >
          <Input defaultValue="6 days after period end date" />
        </FormItem>
      </Col>
    </Row>
    <FormItem>
      <Typography.Title level={2}>
        General
      </Typography.Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </FormItem>
    <Row
      gutter={[
        16,
        16
      ]}
    >
      <Col span={24}>
        <FormItem
          label="Post Date"
          name="post-date"
        >
          <Select placeholder="Select">
            <Option value="other">
              Other
            </Option>
            <Option value="calculated">
              Calculated
            </Option>
          </Select>
        </FormItem>
        <FormItem
          label="Approval Time"
          name="approve-time"
        >
          <TimePicker />
        </FormItem>
        <FormItem
          label="Document Type"
          name="document-type"
        >
          <Input defaultValue="IC" />
        </FormItem>
        <FormItem
          label="Description"
          name="description"
        >
          <Input placeholder="Placeholder text" />
        </FormItem>
      </Col>
    </Row>
    <FormItem>
      <Typography.Title level={2}>
        Tax
      </Typography.Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </FormItem>
    <Row
      gutter={[
        16,
        16
      ]}
    >
      <Col span={24}>
        <FormItem
          label="Tax Type"
          name="tax-type"
        >
          <Input placeholder="Placeholder text" />
        </FormItem>
        <FormItem
          label="Tax Rate"
          name="tax-rate"
        >
          <Input defaultValue="IC" />
        </FormItem>
      </Col>
    </Row>
    <div>
      <FormItem>
        <Button
          htmlType="submit"
          type="primary"
        >
          Save
        </Button>
        <Button
          onClick={function noRefCheck(){}}
          type="secondary"
        >
          Cancel
        </Button>
      </FormItem>
    </div>
  </Form>
</>