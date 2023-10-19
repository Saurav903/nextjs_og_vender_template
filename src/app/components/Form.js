"use client";
import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_VENDOR_NAME":
      return { ...state, vendorName: action.payload };
    case "SET_CONTENT":
      return { ...state, content: action.payload };
    case "SET_VENDOR_DETAILS":
      return { ...state, vendor_details: action.payload };
    case "SET_VENDOR_LOGO":
      return {
        ...state,
        vendorLogo: action.payload,
        vendorLogoUrl: URL.createObjectURL(action.payload),
      };
    case "RESET":
      return {
        vendorName: "",
        content: "",
        vendor_details: "",
        vendorLogo: null,
        vendorLogoUrl: null,
      };
    default:
      return state;
  }
};

export default function Form() {
  const [formState, dispatch] = useReducer(formReducer, {
    vendorName: "",
    content: "",
    vendor_details: "",
    vendorLogo: null,
    vendorLogoUrl: null,
  });

  // let OgData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formState.vendorName == "" ||
      formState.content == "" ||
      formState.vendor_details == "" ||
      formState.vendorLogo == null ||
      formState.vendorLogoUrl == null
      ) {
        alert("Please fill all required fields");
      }
      try {
      console.log("Submit", formState);
      localStorage.setItem("form-data", JSON.stringify(formState));
      // OgData=`http://localhost:3000/api/og?=${formState.vendorName}&content=${formState.content}&details=${formState.vendor_details}&logo=${formState.vendorLogo}`
      dispatch({ type: "RESET" });
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
      <div className="custom-form">
        <h1 className="form-title">Vendor Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="vendorName" className="form-label">
              Vendor Name
            </label>
            <input
              type="text"
              id="vendorName"
              placeholder="Please Enter a your name"
              value={formState.vendorName}
              onChange={(e) =>
                dispatch({ type: "SET_VENDOR_NAME", payload: e.target.value })
              }
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              id="content"
              value={formState.content}
              placeholder="Please Enter your Content"
              onChange={(e) =>
                dispatch({ type: "SET_CONTENT", payload: e.target.value })
              }
              className="form-input form-textarea"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vendor_details" className="form-label">
              Vendor Details
            </label>
            <input
              type="text"
              id="vendor_details"
              placeholder="Please Enter your details"
              value={formState.vendor_details}
              onChange={(e) =>
                dispatch({
                  type: "SET_VENDOR_DETAILS",
                  payload: e.target.value,
                })
              }
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vendorLogo" className="form-label">
              Vendor Logo
            </label>
            <input
              type="file"
              id="vendorLogo"
              onChange={(e) =>
                dispatch({
                  type: "SET_VENDOR_LOGO",
                  payload: e.target.files[0],
                })
              }
              className="form-input"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
        <iframe />
      </div>
  );
}
