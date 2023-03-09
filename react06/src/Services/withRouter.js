import { useNavigate } from "react-router-dom";
export const withRouter = (ParentComponent) => (props) => {
  const navigate = useNavigate();
  return <ParentComponent {...props} navigate={navigate} />;
};
