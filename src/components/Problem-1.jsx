import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [allData, setAllData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const status = form.status.value;

    const data = {
      name,
      status,
    };

    if (data) {
      setAllData([...allData, data]);
    }

    form.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="name"
                name="name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                id="status"
                name="status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all" &&
                allData
                  .sort((a, b) => {
                    let fa = a.status.toLowerCase(),
                      fb = b.status.toLowerCase();

                    if (fa < fb) {
                      return -1;
                    }
                    if (fa > fb) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
              {show === "active" &&
                allData
                  .filter((data) => data.status === "active")
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
              {show === "completed" &&
                allData
                  .filter((data) => data.status === "completed")
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
