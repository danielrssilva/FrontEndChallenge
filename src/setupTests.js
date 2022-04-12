import "@testing-library/jest-dom/extend-expect";
import httpAdapter from "axios/lib/adapters/http";
import axiosInstance from "./services/AxiosInstance";

Object.defineProperty(window, "matchMedia", {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }),
});

axiosInstance.defaults.adapter = httpAdapter;

const t = (key) => key;
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t,
  }),
  withTranslation: () => (Component) => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: () => "",
    };
    return Component;
  },
  Trans: ({ children }) => children,
}));
