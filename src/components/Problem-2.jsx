import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showAllContact, setShowAllContact] = useState(false);
  const [showUSContact, setShowUSContact] = useState(false);
  const [countries, setCountries] = useState([]);

  const handleCloseAllContact = () => setShowAllContact(false);
  const handleShowAllContact = () => setShowAllContact(true);
  const handleCloseUSContact = () => setShowUSContact(false);
  const handleShowUSContact = () => setShowUSContact(true);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/?format=json")
      .then((res) => res.json())
      .then((data) => setCountries(data.results));
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
          <Modal.Body>
            {countries.map((country) => (
              <p key={country.id}>{country.phone}</p>
            ))}
          </Modal.Body>
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
          <Modal.Body>
            {countries
              .filter((country) => country.country.id === 2)
              .map((country) => (
                <p key={country.id}>{country.phone}</p>
              ))}
          </Modal.Body>
          <Modal.Footer className="d-flex align-items-center">
            <input type="checkbox" />
            <p>Only even</p>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Problem2;
