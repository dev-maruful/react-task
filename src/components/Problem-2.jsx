import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showAllContact, setShowAllContact] = useState(false);
  const [showUSContact, setShowUSContact] = useState(false);

  const handleCloseAllContact = () => setShowAllContact(false);
  const handleShowAllContact = () => setShowAllContact(true);
  const handleCloseUSContact = () => setShowUSContact(false);
  const handleShowUSContact = () => setShowUSContact(true);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleShowAllContact}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleShowUSContact}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>

      <>
        <Modal show={showAllContact} onHide={handleCloseAllContact}>
          <Modal.Header closeButton>
            <Modal.Title>All Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading All contacts!</Modal.Body>
          <Modal.Footer className="d-flex align-items-center">
            <input type="checkbox" />
            <p>Only even</p>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal show={showUSContact} onHide={handleCloseUSContact}>
          <Modal.Header closeButton>
            <Modal.Title>US Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading US contacts</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseUSContact}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Problem2;
