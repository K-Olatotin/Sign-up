import './FormSection.css'
const FormSection = () =>{
    return(
        <>
        <div className="form-container">
      <div className="trial-banner">
        <p>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div>
      <div className="form-section">
        <form className="trial-form">
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="submit-btn">Claim Your Free Trial</button>
          <p className="terms">
            By clicking the button, you are agreeing to our{" "}
            <span className="terms-link">Terms and Services</span>.
          </p>
        </form>
      </div>
    </div>
        </>
    )
}
export default FormSection