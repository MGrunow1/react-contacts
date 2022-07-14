import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: white;
  box-shadow: 1px 3px 3px gray;
  display: flex;
  margin-top: 2vh;
  justify-content: space-between;
  padding: 1vh 1vw 1vh 1vw;
  height: 10vh;
  width: calc(min(30em, 90%));
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
`;

const CloseButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: flex-end;
  border-radius: 50%;
  border: 0px none white;
  background-color: gray;
  color: white;
  font-weight: bold;
  `;

const ContactText = styled.div`
height: 100%;
  margin-left: 2px;
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 15px;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const ProfilePic = styled.img`
  margin-right: 10px;
  border-radius: 50%;
  height: 100%;
  `;

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  return (
    <div>
      <CardWrapper>
        <ContactDetails>
        <div>
          <ProfilePic src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
          <ContactText>
            <div>{firstName} {lastName}</div>
            <div>{phoneNumber}</div>
          </ContactText>
        </div>
        </ContactDetails>
        <CloseButton onClick={null}>x</CloseButton>
      </CardWrapper>
    </div>
  );
};

export default ContactCard;
