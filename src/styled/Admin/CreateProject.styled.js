import styled from "styled-components";

export const CreateProjectStyled = styled.div`
background-image: url('https://images.unsplash.com/photo-1531156992292-d36397ee9184?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
background-repeat: no-repeat;
background-size: 100%;
object-fit: cover;
background-color: #131418;
width: 100vw;

header{
  color: white;
}

form{
  background-color: transparent;
  padding: 20px;
}

.form-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
}

.bottom-grid{
  grid-row: 2;
  grid-column: 1/3;
}

.left-grid, .right-grid{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.organic-recycled{
  display: flex;
  margin: 2em 0em 1em 0em;
}

.button-center{
  display: flex;
  justify-content: center;
}

.create-project-form-container {
  max-width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: white;
  text-shadow: 2px 4px 8px rgba(0,0,0,0.6);
}

::placeholder{
  color: black;
}

::file-selector-button{
  padding: .5em;
  background-color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

input[type='file'] {
  color: rgba(0, 0, 0, 0)
}

input[type="text"],
input[type="checkbox"] {
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[name="description"]{
  height: 150px;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 5em;
}

button[type="submit"] {
  font-weight: bold;
  width: 50%;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover, ::file-selector-button:hover {
  background-color: #488441;
  color: white;
}



/* Media query for larger screens */
@media (min-width: 768px) {
  .create-project-form-container {

    margin: 0 auto;
  }
}
`
