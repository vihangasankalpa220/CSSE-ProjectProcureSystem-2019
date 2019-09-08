import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation,
    MDBCardGroup,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBFormInline,
    MDBIcon
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";

const ViewAllVendors = () => {
    return (
        <>
            <MDBContainer className="mt-5">
                <MDBAnimation type="zoomIn" duration="500ms">
                    <MDBContainer>
                        <SectionContainer header="All Vendorss">
                            <MDBRow>
                                <MDBCol md="4">
                                    <label>Country</label>
                                    <form className="form-inline active-cyan-4 mb-4">

                                        <input
                                            className="form-control form-control-sm mr-3 w-75"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <MDBIcon icon="search" aria-hidden="true" />
                                    </form>
                                </MDBCol>
                                <MDBCol md="4">
                                    <label>Inventory</label>
                                    <form className="form-inline active-cyan-4 mb-4">
                                        <input
                                            className="form-control form-control-sm mr-3 w-75"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <MDBIcon icon="search" aria-hidden="true" />
                                    </form>
                                </MDBCol>
                                <MDBCol md="4">
                                    <label>Other</label>
                                    <form className="form-inline active-cyan-4 mb-4">
                                        <input
                                            className="form-control form-control-sm mr-3 w-75"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <MDBIcon icon="search" aria-hidden="true" />
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        <MDBRow>
                            <MDBCol md="3" className="mx-auto">
                                    <MDBCardGroup deck className="mt-3">
                                        <MDBCard>
                                            <MDBCardImage
                                                src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                                                alt="MDBCard image cap"
                                                top
                                                hover
                                                overlay="white-slight"
                                            />
                                            <MDBCardBody>
                                                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="light-blue" size="md">
                                                    read more
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCardGroup>
                            </MDBCol>
                            <MDBCol md="3" className="mx-auto">
                                <MDBCardGroup deck className="mt-3">
                                    <MDBCard>
                                        <MDBCardImage
                                            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                                            alt="MDBCard image cap"
                                            top
                                            hover
                                            overlay="white-slight"
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                            <MDBCardText>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </MDBCardText>
                                            <MDBBtn color="light-blue" size="md">
                                                read more
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCardGroup>
                            </MDBCol>
                            <MDBCol md="3" className="mx-auto">
                                <MDBCardGroup deck className="mt-3">
                                    <MDBCard>
                                        <MDBCardImage
                                            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                                            alt="MDBCard image cap"
                                            top
                                            hover
                                            overlay="white-slight"
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                            <MDBCardText>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </MDBCardText>
                                            <MDBBtn color="light-blue" size="md">
                                                read more
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCardGroup>
                            </MDBCol>
                            <MDBCol md="3" className="mx-auto">
                                <MDBCardGroup deck className="mt-3">
                                    <MDBCard>
                                        <MDBCardImage
                                            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                                            alt="MDBCard image cap"
                                            top
                                            hover
                                            overlay="white-slight"
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                            <MDBCardText>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </MDBCardText>
                                            <MDBBtn color="light-blue" size="md">
                                                read more
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCardGroup>
                            </MDBCol>
                            <MDBCol md="3" className="mx-auto">
                                <MDBCardGroup deck className="mt-3">
                                    <MDBCard>
                                        <MDBCardImage
                                            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                                            alt="MDBCard image cap"
                                            top
                                            hover
                                            overlay="white-slight"
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                                            <MDBCardText>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </MDBCardText>
                                            <MDBBtn color="light-blue" size="md">
                                                read more
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCardGroup>
                            </MDBCol>

                        </MDBRow>
                        </SectionContainer>
                    </MDBContainer>
                </MDBAnimation>
            </MDBContainer>
        </>
    );
};

export default ViewAllVendors;
