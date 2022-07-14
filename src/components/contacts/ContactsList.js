import styled from "styled-components";
import ContactCard from "./ContactCard"

const ContactsList = styled.div`
background-color: lightgray;
padding: 10px;
`;

const ContactList = ({ contacts=[] }) => {
    return (
        <ContactsList>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </ContactsList>
    )
}

export default ContactList;