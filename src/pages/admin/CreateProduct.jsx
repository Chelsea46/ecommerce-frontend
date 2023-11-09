import { useContext } from 'react';
import { ProductAmdminSide } from "../../context/ProductAdminSide";

export default function CreateProject() {
  const { handleCreateProductChange, createProductFormData, handleCreateProductSubmit } = useContext(ProductAmdminSide);

  return (
    <div className="bg-cover w-screen bg-no-repeat bg-[url('https://images.unsplash.com/photo-1531156992292-d36397ee9184?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="bg-opacity-50 p-20 w-full box-border">
        <header className="text-white">
          <h1 className='text-6xl mb-16 font-bold'>Add product</h1>
        </header>
        <form className="bg-transparent" encType="multipart/form-data" onSubmit={handleCreateProductSubmit}>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-8">
            <div className="flex flex-col justify-center">
              <label htmlFor="name" className="font-bold block mb-2 text-white text-shadow tracking-wide">Name:</label>
              <input name="name" type="text" placeholder="Enter the name of the product" className="p-2 rounded mb-5 placeholder:text-black" onChange={handleCreateProductChange} />
              <label htmlFor="type" className="font-bold block mb-2 text-white text-shadow tracking-wide">Type:</label>
              <input name="type" type="text" placeholder="Enter the type of product" className="p-2 rounded mb-5 placeholder:text-black" onChange={handleCreateProductChange} />
              <label htmlFor="size" className="font-bold block mb-2 text-white text-shadow tracking-wide ">Size:</label>
              <input name="size" type="text" placeholder="Enter the size of product using xl, l, m, s, xs" className="p-2 rounded mb-5 placeholder:text-black" onChange={handleCreateProductChange} />
            </div>
            <div className="flex flex-col justify-center">
              <label htmlFor="color" className="font-bold block mb-2 text-white text-shadow tracking-wide">Color:</label>
              <input name="color" type="text" placeholder="Enter the color of product" className="p-2 rounded mb-5 placeholder:text-black" onChange={handleCreateProductChange} />
              <label htmlFor="gender" className="font-bold block mb-2 text-white text-shadow tracking-wide">Gender:</label>
              <input name="gender" type="text" placeholder="Enter the gender of product using either f or m" className="p-2 rounded mb-5 placeholder:text-black" onChange={handleCreateProductChange} />
              <label htmlFor="price" className="font-bold block mb-2 text-white text-shadow tracking-wide">Price:</label>
              <input name="price" type="text" placeholder="Enter the price of product" className="p-2 rounded mb-5 placeholder:text-black" onChange={handleCreateProductChange} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="font-bold block mr-3 text-white text-shadow tracking-wide mb-2">Description:</label>
              <input name="description" type="text" placeholder="Enter the description of product" className="p-2 rounded w-full placeholder:text-black h-2/4" onChange={handleCreateProductChange} />
            </div>
            <div className="mt-7">
                <label htmlFor="organic" className="font-bold mr-3 text-white text-shadow tracking-wide">Organic:</label>
                <input name="organic" type="checkbox" className='mr-10' checked={createProductFormData.organic} onChange={handleCreateProductChange} />
                <label htmlFor="recycled" className="font-bold mr-3 text-white text-shadow tracking-wide">Recycled:</label>
                <input name="recycled" type="checkbox" checked={createProductFormData.recycled} onChange={handleCreateProductChange} />
              <div className="flex mt-10">
                <label htmlFor="image" className="font-bold block mb-5 text-white text-shadow mr-3 tracking-wide">Image:</label>
                <input name="image" type="file" onChange={handleCreateProductChange} className=" block w-full bg-white rounded cursor-pointer file:cursor-pointer file:border-none file:rounded file:p-2.5 file:font-medium file:bg-green file:text-white file:hover:bg-white file:hover:text-black file:transition duration-400 file:hover:ease-in " />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn-submit w-6/12 bg-green text-white font-bold border-none rounded p-2.5 transition duration-400 hover:ease-in hover:bg-white hover:text-black ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
