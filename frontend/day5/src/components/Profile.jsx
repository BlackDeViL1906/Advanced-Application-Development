import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "../assets/css/Profile.css";

const ClientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("hnethesh@gmail.com");
  const [phone, setPhone] = useState("9360244678");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isValid = validateEmail(e.target.value);
    setIsEmailValid(isValid);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section
      className="vh-100 prof-container"
      style={{ backgroundColor: "#f4f5f7" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://steamuserimages-a.akamaihd.net/ugc/1760313169554525949/59C9EFB2B3E7F9D43F82274FBF2BD95076A3ADB3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                    alt="Avatar"
                    className="my-5"
                    style={{
                      width: "100px",
                      borderRadius: "80%",
                      height: "100px",
                    }}
                    fluid
                  />
                  <MDBTypography tag="h5" className="prof-name">
                    Nithu
                  </MDBTypography>
                  <MDBCardText className="prof-role">Customer</MDBCardText>
                  <div className="md-8 d-flex justify-content-center">
                    {isEditing ? (
                      <MDBIcon
                        fas
                        icon="cloud"
                        onClick={handleSave}
                        size="1x"
                        className={`prof-edit-icon ${
                          !isEmailValid ? "disabled" : ""
                        }`}
                        disabled={!isEmailValid}
                      />
                    ) : (
                      <MDBIcon
                        fas
                        icon="edit"
                        size="1x"
                        onClick={handleEdit}
                        className="prof-edit-icon"
                      />
                    )}
                  </div>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Profile</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <form>
                          {isEditing ? (
                            <>
                              <MDBInput
                                type="email"
                                value={email}
                                required
                                onChange={handleEmailChange}
                                className={`prof-form-control-1 ${
                                  isEmailValid ? "" : "is-invalid"
                                }`}
                              />
                              {!isEmailValid && (
                                <label
                                  className="invalid-feedback error-msg-prof"
                                  style={{ color: "red" }}
                                >
                                  Please enter a valid email address.
                                </label>
                              )}
                            </>
                          ) : (
                            <MDBCardText className="text-muted">
                              {email}
                            </MDBCardText>
                          )}
                        </form>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        {isEditing ? (
                          <MDBInput
                            type="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            className="prof-form-control-1"
                          />
                        ) : (
                          <MDBCardText className="text-muted">
                            {phone}
                          </MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Personal Info</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">User's SIM</MDBTypography>
                        <MDBCardText className="text-muted">
                          <p className="prof-course-count">Jio</p>
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Current Pack</MDBTypography>
                        <MDBCardText className="text-muted">
                          <p className="prof-course-count">Rs.239</p>
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Valid Till</MDBTypography>
                        <MDBCardText className="text-muted">
                          <p className="prof-course-count">Mar 16</p>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="md-8 d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="github me-3"
                          size="lg"
                          className="prof-bottom-icons"
                        />
                      </a>
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="linkedin-in me-3"
                          size="lg"
                          className="prof-bottom-icons"
                        />
                      </a>
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="twitter me-3"
                          size="lg"
                          className="prof-bottom-icons"
                        />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ClientProfile;
