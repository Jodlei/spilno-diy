import Loader from "../../Components/ui/Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendConfirmEmail } from "../../redux/auth/operations";
import { useEffect } from "react";

const ConfirmEmailRedirect = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  const data = { token: token };

  useEffect(() => {
    dispatch(sendConfirmEmail(data));
  }, [dispatch]);

  return <Loader></Loader>;
};

export default ConfirmEmailRedirect;
