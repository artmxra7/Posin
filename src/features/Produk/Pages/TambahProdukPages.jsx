import { useState } from 'react';
import iconPictureUpload from '@/assets/images/svg/icon-picture-upload.svg'
const TambahProdukPages = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productCode: '',
    description: '',
    price: '',
    costPrice: '',
    bulkDiscountPrice: '',
    taxRate: 0,
    category: '',
    tags: '',
    brand: '',
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      productImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send formData to an API)
  };
  return (
    <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8 pb-0 sm:pb-0 md:pb-0">
      <div className='container mx-auto flex items-center justify-between mb-4'>
        <div><h3 class="font-bold">Tambah Produk</h3></div>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full h-full">
        <div className="form-container flex flex-col w-full justify-between">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-4">
              <div className="gap-4 flex flex-col flex-auto">
                <div className="card card-border" role="presentation">
                  <div className="card-body">
                    <h4 className="mb-6">Informasi Produk</h4>
                    <div>
                      <div className="form-item vertical">
                        <label htmlFor="productName" className="form-label mb-2">Nama Produk</label>
                        <div>
                      <input
                        type="text"
                          id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="Nama Produk"
                      />
                        </div>
                    </div>
                      <div className="form-item vertical">
                       
                          <label htmlFor="productCode" className="form-label mb-2">Product code</label>
                          <div>
                            <input
                              type="text"
                              id="productCode"
                              name="productCode"
                              value={formData.productCode}
                              onChange={handleChange}
                            className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                              placeholder="Product Code"
                            />
                          </div>
                        </div>
                    </div>
                    


                    <div className="form-item vertical">
                      <label htmlFor="productDescription"  className="form-label mb-2">Description</label>
                      <div>
                        <div className='rounded-xl ring-1 ring-gray-200 border border-gray-200  bg-gray-100'>
                          <input
                            type="text"
                            id="productDescription"
                            name="productDescription"
                            value={formData.productDescription}
                            onChange={handleChange}
                            className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                            placeholder="Product Code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-border" role="presentation">
                  <div className="card-body">
                    <h4 className="mb-6">Pricing</h4>
                    <div className="form-item">
                      <label className="form-label mb-2">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="0.00"
                      />
                    </div>

                    <div className="form-item">
                      <label className="form-label mb-2">Cost price</label>
                      <input
                        type="number"
                        name="costPrice"
                        value={formData.costPrice}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="0.00"
                      />
                    </div>

                    <div className="form-item">
                      <label className="form-label mb-2">Bulk discount price</label>
                      <input
                        type="number"
                        name="bulkDiscountPrice"
                        value={formData.bulkDiscountPrice}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="0.00"
                      />
                    </div>

                    <div className="form-item">
                      <label className="form-label mb-2">Tax rate(%)</label>
                      <input
                        type="number"
                        name="taxRate"
                        value={formData.taxRate}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:min-w-[440px] 2xl:w-[500px] gap-4 flex flex-col">
                
                <div className="card card-border" role="presentation">
                  <div className="card-body">
                    <h4 className="mb-2">Gambar Produk</h4>
                    <p>Choose a product photo or simply drag and drop up to 5 photos here.</p>
                  <div className='mt-4'>
                      <div className="form-item vertical mb-4">
                        <div>
                        <div className='upload upload-draggable hover:border-primary'>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="upload-input draggable"
                        />
                      <div className="max-w-full flex flex-col px-4 py-8 justify-center items-center">
                          {formData.productImage && (
                            <img
                              src={URL.createObjectURL(formData.productImage)}
                              alt="Product preview"
                              className="w-32 h-32 object-cover rounded-xl"
                            />
                          )}
                            <div class="text-[60px]">
                              <img
                                src={iconPictureUpload}
                                alt="Product preview"
                                className="w-20 h-20 object-cover rounded-xl"
                              />
                            </div>
                            <p class="flex flex-col items-center mt-2"><span class="text-gray-800 dark:text-white">Drop your image here, or </span><span class="text-primary">Click to browse</span></p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <p>Image formats: .jpg, .jpeg, .png, preferred size: 1:1, file size is restricted to a maximum of 500kb.</p>
                  </div>
                </div>
                <div className="card card-border" role="presentation">
                  <div className='card-body'>
                    <h4 class="mb-6">Attribute</h4>
                  <div className="form-item">
                    <label className="form-label mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="select select-md"
                    >
                      <option value="">Select...</option>
                      <option value="Category 1">Category 1</option>
                      <option value="Category 2">Category 2</option>
                    </select>
                  </div>

                    <div className="form-item">
                      <label className="form-label mb-2">Tags</label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="Add tags for product..."
                      />
                    </div>

                    <div className="form-item">
                      <label className="form-label mb-2">Brand</label>
                      <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="input input-md h-12 focus:ring-primary focus-within:ring-primary focus-within:border-primary focus:border-primary"
                        placeholder="Product brand"
                      />
                    </div></div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TambahProdukPages;