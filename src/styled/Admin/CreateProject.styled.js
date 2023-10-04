import styled from "styled-components";

export const CreateProjectStyled = styled.div`

width: 100vw;

.create-project-form-container {
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

form {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="checkbox"],
input[type="file"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Styling for checkboxes */
input[type="checkbox"] {
  width: auto;
  margin-right: 5px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .create-project-form-container {
    max-width: 600px;
    margin: 0 auto;
  }
}
`