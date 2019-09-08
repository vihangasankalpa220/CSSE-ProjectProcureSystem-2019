import React, {Component} from "react";
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
    MDBIcon,
    MDBInput,
    MDBFormInline,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBModalFooter
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic (CAR)",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (UAE)",
    "United Kingdom (UK)",
    "United States of America (USA)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

class ViewAllVendors extends Component {
    state = {
        dataSet: countries,
        filteredSet: countries,
        searchValue: "",
        modalOpen: false
    };

    handleSearch = event => this.setState({ searchValue: event.target.value }, () => this.searchForCountry());

    searchForCountry = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(item =>
                item.toLowerCase().match(this.state.searchValue.toLowerCase())
            );
            return { filteredSet };
        });
    };

    toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        return (
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
                                    value={this.state.searchValue}
                                    onChange={this.handleSearch}
                                />
                                <MDBIcon icon="search" aria-hidden="true" />
                            </form>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>

                                    {this.state.filteredSet.map(item => (

                                        <MDBCol md="3" className="mx-auto" key={item}>
                                            <MDBCardGroup deck className="mt-3">
                                                <MDBListGroup>
                                                    <MDBAnimation type="zoomIn" duration="500ms">
                                                        <MDBCard>
                                                        <MDBCardImage
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                                                        alt="MDBCard image cap"
                                                        top
                                                        hover
                                                        overlay="white-slight"
                                                        />
                                                        <MDBCardBody>
                                                        <MDBCardTitle tag="h5">{item}</MDBCardTitle>
                                                        <MDBCardText>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        </MDBCardText>
                                                        <MDBBtn color="light-blue" size="md">
                                                        read more
                                                        </MDBBtn>
                                                        </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBAnimation>
                                                </MDBListGroup>
                                            </MDBCardGroup>
                                        </MDBCol>
                                    ))}


                    </MDBRow>
                </SectionContainer>
            </MDBContainer>
        );
    }
}

export default ViewAllVendors;
