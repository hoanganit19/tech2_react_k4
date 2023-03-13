import { useNavigate, useSearchParams, useParams } from "react-router-dom";
export const withRouter = (ParentComponent) => {
  //logic
  return (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const search = useSearchParams();
    return (
      <ParentComponent
        {...props}
        navigate={navigate}
        search={search}
        params={params}
      />
    );
  };
};
