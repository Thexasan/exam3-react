import React, { useEffect, useState } from "react";
import "./resor.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import img11 from "../../assets/image 1.png";
import { Button } from "@mui/material";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onClose1 = () => {
    setOpen1(false);
  };
  const API = "http://localhost:4000/libos";
  const [todos, setTodos] = useState([]);
  const [form1] = Form.useForm();
  const [idx, setIdx] = useState(null);
  const [form2] = Form.useForm();

  const showDrawer1 = (elem) => {
    setOpen1(true);
    setIdx(elem.id);
  };
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };


function handleDelete(id){
  let ar = todos.filter((item)=>{
    return item.id!== id;
  })
  setTodos(ar);
}

const onFinish =(e)=>{
  e.preventDefault()
}




  return (
    <>
      <section className="max-w-[100%] mt-[50px]">
        <div className="container picture">
          <div className="p-10 ml-[4%]">
            <h1 className="text-[48px] text-[#FFF]">Блог</h1>
          </div>
        </div>
      </section>

      <section className="max-w-[100%] mt-[150px]">
        <div className="container">
          <div className="text-center pb-[100px]">
            <Button
              variant="contained"
              color="primary"
              onClick={showDrawer}
              icon={<PlusOutlined />}
            >
              Add Item
            </Button>
            <Drawer
              title="Create a new account"
              width={220}
              onClose={onClose}
              open={open}
              bodyStyle={{
                paddingBottom: 20,
              }}
            >
              <Form
              
                form={form1}
                onFinish={onFinish}
                layout="vertical"
                hideRequiredMark
              >
                <Row gutter={12}>
                  <Col span={25}>
                    <Form.Item
                      name="title"
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter user name",
                        },
                      ]}
                    >
                      <Input  placeholder="Please enter user name" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>
          </div>
          <div className="lg:w-[80%] grid gap-[20px] lg:grid-cols-3 items-center grid-cols-1 md:grid-cols-2 m-auto">
            {todos.map((el) => (
              <div
                className="bg-gray-600  rounded-[20px] lg:w-[22vw] h-[auto]"
                key={el.id}
              >
                <img
                  className="rounded-[20px_20px_0px_0px]"
                  src={img11}
                  alt=""
                />
                <div>
                  {el.completed ? (
                    <s>
                      <h1 className="text-[22px] text-[#b90000] font-[800]">
                        {el.title}
                      </h1>
                    </s>
                  ) : (
                    <h1 className="text-[22px] text-[#FFFF] font-[800]">
                      {el.title}
                    </h1>
                  )}
                  <div className="flex items-center justify-between pt-[20px]">
                    <h1 className="text-[14px] font-[300] text-[#FFF]">
                      {new Date().toLocaleDateString()}
                    </h1>
                    <h1>Читать: 8 минут</h1>
                  </div>
                </div>
                <div className="py-[10px] flex justify-center gap-[8px]">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => showDeleteConfirm(el.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => complteTodo(el.id)}
                    variant="outlined"
                    color="primary"
                  >
                    Completed
                  </Button>
                  <Button
                    onClick={() => showDrawer1(el)}
                    variant="contained"
                    color="secondary"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Drawer
            title="Create a new account"
            width={220}
            onClose={onClose1}
            open={open1}
            bodyStyle={{
              paddingBottom: 80,
            }}
          >
            <Form
              form={form2}
              layout="vertical"
              hideRequiredMark
              initialValues={{ title: todos[0]?.title }}
            >
              <Row gutter={12}>
                <Col span={22}>
                  <Form.Item
                    name="title"
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter user name",
                      },
                    ]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </div>
      </section>
    </>
  );
};

export default Blog;
