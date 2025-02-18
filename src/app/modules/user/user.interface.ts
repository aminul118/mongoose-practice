interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middlName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emmergencyNo: string;
  presentAddress: string;
  permanentAddress: string;
}

export default IUser;
