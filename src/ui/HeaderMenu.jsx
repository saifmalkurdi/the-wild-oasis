import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyleHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyleHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyleHeaderMenu>
  );
}

export default HeaderMenu;
