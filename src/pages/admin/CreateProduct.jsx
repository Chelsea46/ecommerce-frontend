import { CreateProjectStyled } from "../../styled/Admin/CreateProject.styled";
import { useContext } from 'react';
import { ProductAmdminSide } from "../../context/ProductAdminSide";

export default function CreateProject() {

  const { handleCreateProductChange, createProductFormData, handleCreateProductSubmit } = useContext(ProductAmdminSide);
  return (
    <CreateProjectStyled>
      <div className="create-project-form-container">
        <form encType="multipart/form-data" onSubmit={handleCreateProductSubmit}>
          <label htmlFor="name">Name of product:</label>
          <input name="name" type="text" placeholder="Enter the name of the product" onChange={handleCreateProductChange} />
          
          <label htmlFor="type">Type of product:</label>
          <input name="type" type="text" placeholder="Enter the type of product" onChange={handleCreateProductChange}/>
          
          <label htmlFor="size">Size of product:</label>
          <input name="size" type="text" placeholder="Enter the size of product" onChange={handleCreateProductChange} />
          
          <label htmlFor="color">Color of product:</label>
          <input name="color" type="text" placeholder="Enter the color of product" onChange={handleCreateProductChange}/>
          
          <label htmlFor="gender">Gender of product:</label>
          <input name="gender" type="text" placeholder="Enter the gender of product" onChange={handleCreateProductChange}/>
          
          <label htmlFor="description">Description of product:</label>
          <input name="description" type="text" placeholder="Enter the description of product" onChange={handleCreateProductChange}/>
          
          <label htmlFor="organic">Is the product organic:</label>
          <input name="organic" type="checkbox" checked={createProductFormData.organic} onChange={handleCreateProductChange}/>
          
          <label htmlFor="recycled">Is the product recycled:</label>
          <input name="recycled" type="checkbox" checked={createProductFormData.recyled} onChange={handleCreateProductChange} />
          
          <label htmlFor="image">Image of product:</label>
          <input name="image" type="file" onChange={handleCreateProductChange} />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </CreateProjectStyled>
  );
}
