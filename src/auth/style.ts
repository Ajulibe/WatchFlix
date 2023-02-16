import { COLORS } from "utils/colors";
import { easeIn } from "utils/animations";
import styled from "@emotion/styled";

export const WidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
  animation: ${easeIn} 0.4s ease-in-out forwards;
  will-change: auto;
  height: 100%;

  #okta-sign-in.auth-container .button-primary {
    font-size: 16px;
    font-weight: bold;
    color: ${COLORS.white};
    border-radius: 14px;
    background: ${COLORS.primary};
    outline: none;
    border: none;
    cursor: pointer;
    align-self: center;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    &:hover {
      background-color: ${COLORS.primaryHover};
    }
  }

  #okta-sign-in.auth-container.main-container {
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: ${COLORS.white};
  }

  #okta-sign-in .auth-header {
    padding-top: none;
    border-bottom: none;
  }
  #okta-sign-in.auth-container h2,
  #okta-sign-in.auth-container h3 {
    font-size: 3rem;
    color: ${COLORS.primary};
    font-weight: bold;
  }

  #okta-sign-in.auth-container .link:active,
  #okta-sign-in.auth-container .link:hover,
  #okta-sign-in.auth-container .link:link,
  #okta-sign-in.auth-container .link:visited {
    color: ${COLORS.primary};
    text-decoration: underline;
  }

  #okta-sign-in .registration-container .content-container {
    border: none;
  }

  #okta-sign-in .o-form .o-form-label {
    color: ${COLORS.white};
  }

  #okta-sign-in .auth-header {
    padding-top: none !important;
    padding-bottom: unset !important;
  }

  #okta-sign-in .auth-org-logo {
    max-height: unset;
  }

  #okta-sign-in.no-beacon .auth-header {
    padding-bottom: 0;
  }
  #okta-sign-in .registration-container .registration-link {
    color: ${COLORS.primary};
  }

  #okta-sign-in .auth-content {
    padding: unset;
  }
`;
