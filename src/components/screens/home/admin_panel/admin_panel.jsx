import React, { useEffect, useState } from "react";

import styles from "./admin_panel.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { signOut } from "firebase/auth";
import { auth, getAllData, updateData } from "@/libs/firebase/firebase";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to
import { Modal, Offcanvas } from "react-bootstrap";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  const [showModelFor, setShowModalFor] = useState(null);

  const fetchPayments = async () => {
    try {
      const allOrders = await getAllData("orders");

      setOrders(allOrders);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please refresh");
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const colDefs = [
    { field: "id" },
    { field: "customer.phone" },
    { field: "customer.email" },
    { field: "customer.state" },
    { field: "totalPrice" },
    { field: "status" },
  ];

  return (
    <div className={styles.AdminPanel}>
      <Modal
        show={showModelFor}
        centered
        onHide={() => {
          setShowModalFor(null);
        }}
      >
        <Modal.Header closeButton>Details</Modal.Header>
        <Modal.Body>
          <div>
            <h2>Customer Info</h2>
            <div>name : {showModelFor?.customer?.fullName}</div>
            <div>Phone : {showModelFor?.customer?.phone}</div>
            <div>Email : {showModelFor?.customer?.email}</div>
            <div>Address : {showModelFor?.customer?.addressLine1},</div>
            <div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {showModelFor?.customer?.addressLine1} -{" "}
              {showModelFor?.customer?.zip}
            </div>
            <div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {showModelFor?.customer?.state}.
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <h2>Purchase Details</h2>
            <div>
              <br />
              {showModelFor?.cartItems &&
                showModelFor?.cartItems?.map((item, i) => {
                  return (
                    <div key={`c_i${i}`}>
                      {item.name} x {item.count} = {item?.price * item?.count}
                    </div>
                  );
                })}
            </div>
            <br />
            <div>
              <strong>Total amount paid : {showModelFor?.totalPrice}</strong>
            </div>
            <br />
            <hr />
            <br />
            <select
              defaultValue={showModelFor?.status}
              onChange={async (e) => {
                await updateData(
                  "orders",
                  {
                    ...showModelFor,
                    status: e.target.value,
                  },
                  showModelFor?.id
                );

                setOrders((prev) => {
                  const x = [...prev];
                  const index = x.findIndex((x) => x.id === showModelFor?.id);
                  x[index].status = e.target.value;
                  return x;
                });
              }}
            >
              <option value={"PAYMENT_INITIATED"}>PAYMENT_INITIATED</option>
              <option value="DISPATCHED">DISPATCHED</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="CANCELLED">CANCELLED</option>
            </select>
          </div>
        </Modal.Body>
      </Modal>
      <br />
      <CustomContainer>
        <div>
          <CustomButton
            clickHandler={async () => {
              await signOut(auth);
            }}
          >
            Logout
          </CustomButton>
        </div>
        <br />
        <br />
        <div
          className={`ag-theme-quartz ${styles.table}`} // applying the Data Grid theme
          style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
          {
            <AgGridReact
              rowData={orders || []}
              columnDefs={colDefs}
              onRowClicked={(r) => {
                setShowModalFor(r.data);
              }}
            />
          }
        </div>
      </CustomContainer>
    </div>
  );
};

export default AdminPanel;
