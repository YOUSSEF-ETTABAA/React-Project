import { useState } from "react";

function InputWithError({ placeholder, refName, idInput }) {
  const [showError, setShowError] = useState(false);

  const handleFocus = (e) => {
    setShowError(e.target.value === "" ? true : false);
  };

  const handleBlur = () => {
    setShowError(false);
  };

  const handleChange = (e) => {
    setShowError(e.target.value === "" ? true : false);
  };
if (idInput !== "adressCity") {
  return (
    <div style={{ marginBottom: 25, marginTop: 25 }}>
      <div className="input-field">
        <input
          type={
            idInput === "inputPassword1" || idInput === "inputPassword2"
              ? "password"
              : idInput === "email"
              ? "email"
              : "text"
          }
          placeholder={placeholder}
          ref={refName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>

      {showError && (
        <p style={{ color: "red" }}>The input should not be left empty</p>
      )}
    </div>
  );
} else{
   return (
     <div>
       <div className="input-group">
         <select id="city" name="city" required ref={refName} defaultValue="">
           <option value="" disabled>
             Select Your City
           </option>
           <option value="Rabat">Rabat</option>
           <option value="Casablanca">Casablanca</option>
           <option value="Fes">Fes</option>
           <option value="Tangier">Tangier</option>
           <option value="Agadir">Agadir</option>
           <option value="Marrakech">Marrakech</option>
           <option value="Meknes">Meknes</option>
           <option value="Oujda">Oujda</option>
           <option value="Kenitra">Kenitra</option>
           <option value="El Jadida">El Jadida</option>
         </select>
       </div>
     </div>
   );
}

}

export default InputWithError;
