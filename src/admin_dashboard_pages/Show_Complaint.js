import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  Table,
  Container,
  ModalHeader,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import AxiosInstance from "../api/Axiosinstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../component/Loader";
const Show_Complaint = () => {
  const [data, setdata] = useState([]);
  const [modal, setModal] = useState(false);
  const [status, setstatus] = useState("");
  const [editid, seteditid] = useState("");
  const [searchinput, setsearchinput] = useState("");
  const [email, setemail] = useState("");
  const [category, setcategory] = useState();
  const [subcategory, setsubcategory] = useState();
  const [description, setdescription] = useState();
  const [moblieno, setmobileno] = useState();
  const [date, setdate] = useState();
  const [rdate, setrdate] = useState();
  const [sutno, setsutno] = useState();
  const [priority, setpriority] = useState();
  const [loading, setloading] = useState(false);
  const [rname, setrname] = useState();
  const labSubcategories = [
    "Lan Cabel",
    "Moniter",
    "Keyboard",
    "Mouse",
    "CPU",
    "Network",
    "Application",
  ];
  useEffect(() => {
    if (!searchinput) {
      fetchdata();
    } else {
      AxiosInstance.get(`api/admin/search-comaplaint/${searchinput}`)
        .then((res) => {
          setdata(res?.data?.Data);
        })
        .catch((error) => {
          Showerror(error?.response?.data?.message);
        });
    }
  }, [searchinput]);
  const fetchdata = () => {
    const token = Cookies.get("token");
    AxiosInstance.get(`api/admin/show-complaint`, {
      headers: {
        authorization: `Bearer  ${token}`,
      },
    })
      .then((res) => {
        setdata(res?.data?.Data);
      })
      .catch((error) => {
        Showerror(error?.response?.data?.message);
      });
  };
  //handle the formdata
  const handlesubmit = (e) => {
    setloading(true);
    e.preventDefault();
    const user_id = Cookies.get("user_id");
    if (!status) {
      alert("please fill the status");
      return;
    }
    AxiosInstance.put(
      `api/admin/update-complaint/${editid}`,
      {
        status: status,
        Mobile_number: moblieno,
        email: email,
        sutno: sutno,
        category: category,
        subcategory: subcategory,
        priority: priority,
        problem: description,
        create_date: date,
        resolve_date: rdate,
        resolver_name: rname,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        Showsucess(res?.data?.message);
        setstatus("");
        fetchdata();
        setTimeout(() => {
          setModal(false);
          setloading(false);
        }, 200);
      })
      .catch((error) => {
        Showerror(error?.response?.data?.message);
        setloading(false);
      });
  };
  const handleedit = (item) => {
    seteditid(item?.id);
    setModal(true);
    setemail(item?.email);
    setmobileno(item?.Mobile_number);
    setsutno(item?.sutno);
    setcategory(item?.category);
    setsubcategory(item?.subcategory);
    setpriority(item?.priority);
    setdescription(item?.problem);
    setdate(item?.create_date);
    setrdate(item?.resolve_date);
    setrname(item?.resolver_name);
    setstatus(item?.status);
  };
  const handledelete = (id) => {
    setloading(true);
    AxiosInstance.delete(`api/admin/delete-complaint/${id}`)
      .then((res) => {
        Showsucess(res?.data?.message);
        fetchdata();
        setTimeout(() => {
          setloading(false);
        }, 200);
      })
      .catch((error) => {
        Showerror(error?.response?.data?.message);
        setloading(false);
      });
  };
  //custom sucessfully message handle
  const Showsucess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      className: "toast-responsive mx-3",
    });
  };
  //custom error message
  const Showerror = (msg) => {
    toast.error(msg, {
      position: "top-right",
      className: "toast-responsive mx-3",
    });
  };
  return (
    <div className="mt-5">
      <Loader showimg={loading} />
      <InputGroup className="mb-3 d-flex justify-content-start w-25 ms-3 pe-5">
        <InputGroupText className="border-end-0 bg-white">
          <SearchIcon />
        </InputGroupText>
        <Input
          className="border-start-0 ms-0 ps-0 border text-center fw-semibold"
          type="select"
          placeholder="Search by Priority"
          value={searchinput}
          onChange={(e) => setsearchinput(e.target.value)}
        >
          <option value="">---select priority---</option>
          <option value="High">HIGH</option>
          <option value="Medium">MEDIUM</option>
          <option value="Low">LOW</option>
        </Input>
      </InputGroup>
      <Container>
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>User_ID</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Problem</th>
              <th>Create Date</th>
              <th>Resolve Date</th>
              <th>Resolve Name</th>
              <th>Status</th>
              <th>Computer Ip</th>
              <th>Resolve Ip</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          {data &&
            data.map((item, idx) => (
              <tbody key={idx}>
                <tr>
                  <td>{item.id || "N/A"}</td>
                  <td>{item.user_id || "N/A"}</td>
                  <td>{item.email || "N/A"}</td>
                  <td>{item.Mobile_number || "N/A"}</td>
                  <td>{item.category || "N/A"}</td>
                  <td>{item.subcategory || "N/A"}</td>
                  <td>{item.problem || "N/A"}</td>
                  <td>{item.create_date || "N/A"}</td>
                  <td>{item.resolve_date || "N/A"}</td>
                  <td>{item.resolver_name || "N/A"}</td>
                  <td>{item.status || "N/A"}</td>
                  <td>{item.computer_ip || "N/A"}</td>
                  <td>{item.resolve_ip || "N/A"}</td>
                  <td>{item.priority || "N/A"}</td>
                  <td>
                    <div className="">
                      <button
                        className="btn btn-warning me-1"
                        onClick={() => {
                          handleedit(item);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handledelete(item?.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </Container>

      {/* ===================================== Modals ===================================== */}
      <Modal
        className="modal"
        size="lg"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        centered
      >
        <ModalHeader toggle={() => setModal(!modal)}>
          Complaint Update
        </ModalHeader>
        <ModalBody>
          <Container className="mt-3">
            <Form onSubmit={(e) => handlesubmit(e)}>
              <FormGroup row className="justify-content-center">
                <Label for="email" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Email :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="mobile" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Mobile No :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter mobile number"
                    required
                    value={moblieno}
                    onChange={(e) => setmobileno(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="email" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Sut No :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="text"
                    name="sutno"
                    id="sutno"
                    placeholder="Enter SUTNO"
                    required
                    value={sutno}
                    onChange={(e) => setsutno(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="category"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Category :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    required
                    value={category}
                    onChange={(e) => {
                      setcategory(e.target.value);
                      setsubcategory(""); // Reset subcategory when category changes
                    }}
                  >
                    <option value="">Select a category</option>
                    <option value="LAB1">Lab1</option>
                    <option value="LAB2">LAb2</option>
                    <option value="LAB3">LAb3</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="subcategory"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Lab Subcategory :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="subcategory"
                    id="subcategory"
                    required
                    value={subcategory}
                    onChange={(e) => setsubcategory(e.target.value)}
                  >
                    <option value="">Select a subcategory</option>
                    {labSubcategories.map((labSub, index) => (
                      <option key={index} value={labSub}>
                        {labSub}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="category"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Priority :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    required
                    value={priority}
                    onChange={(e) => {
                      setpriority(e.target.value);
                    }}
                  >
                    <option value="">Select a priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row className="justify-content-center">
                <Label
                  for="description"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Problem Description:
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Enter your problem description"
                    required
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="date" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Date:
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Select date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="ResolveDate"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Resolve Date:
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="date"
                    name="ResolveDate"
                    id="ResolveDate"
                    placeholder="Select date"
                    value={rdate}
                    onChange={(e) => setrdate(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="rname" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Resolve Name :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="text"
                    name="rname"
                    id="rname"
                    placeholder="Enter Resolve Name"
                    value={rname}
                    onChange={(e) => setrname(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="category"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  status :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    value={status}
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  >
                    <option value="">Select a status</option>
                    <option value="pending">pending</option>
                    <option value="complete">Complete</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Row className="justify-content-center">
                  <Col sm={10} className="text-center">
                    <Button color="primary" type="submit" sm={10} md={12}>
                      Edit
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Show_Complaint;
