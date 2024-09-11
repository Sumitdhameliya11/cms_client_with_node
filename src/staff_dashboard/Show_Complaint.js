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
  const [loading, setloading] = useState(false);
  const token = Cookies.get("token")
  useEffect(() => {
    if (!searchinput) {
      fetchdata();
    } else {
      AxiosInstance.get(`api/staff/search-complaint/${searchinput}`)
        .then((res) => {
          setdata(res?.data?.Data);
        })
        .catch((error) => {
          Showerror(error?.response?.data?.message);
        });
    }
  }, [searchinput]);
  const fetchdata = () => {
    AxiosInstance.get(`api/staff/show-complaint`,{
      headers: {
        authorization: `Bearer  ${token}`
    }
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
      `api/staff/update-complaint/${editid}`,
      {
        userId: user_id,
        status: status,
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
    setstatus(item?.status);
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
                  <td>101</td>
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
          Complanit Update
        </ModalHeader>
        <ModalBody>
          <Container className="mt-3">
            <Form onSubmit={(e) => handlesubmit(e)}>
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
                    required
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
