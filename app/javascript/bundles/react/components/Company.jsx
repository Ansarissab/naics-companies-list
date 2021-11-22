import { Container, Table, Stack } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import companyApi from "../api/company";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Company = () => {
  const [name, setName] =  useState("");
  const [sort, setSort] = useState("asc");
  const [companies, setCompanies] = useState([]);

  useEffect(()=> {
    companyApi
      .retrieveAllCompanies(name, sort)
      .then((response) => {
        setCompanies(response.data);
      }).catch((error) => {
        console.log(error.response)
      });
  }, [name, sort])

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const sortClicked = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  }

    return (
      <Stack gap={3}>
        <Container className="mt-3">
          <Stack direction="horizontal" gap={3}>
            <div>Total Companies: { companies.length }</div>
            <div className="ms-auto">
              <span>Filter by name: </span>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Filter by name"
                onChange={handleChange}
              />
            </div>
          </Stack>
        </Container>

        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>
                  Display Name
                  <span onClick={sortClicked}>
                    {sort === "asc" ? (
                      <FontAwesomeIcon icon={faArrowDown} />
                    ) : (
                      <FontAwesomeIcon icon={faArrowUp} />
                    )}
                  </span>
                </th>
                <th>Primary Address</th>
                <th>Avatar Url</th>
                <th>NAICS code</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.addresses[0]?.city}</td>
                  <td>{company.avatar_url}</td>
                  <td>{company.naics_code}</td>
                  <td>{Date(company.created_at)}</td>
                  <td>{Date(company.updated_at)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Stack>
    );
}

export default Company;
