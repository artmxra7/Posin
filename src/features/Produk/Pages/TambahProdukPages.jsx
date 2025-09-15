import { useState } from 'react';
import iconPictureUpload from '@/assets/images/svg/icon-picture-upload.svg'
import { SelectBarCategory } from '../../../components/ui';
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
  const [mode, setMode] = useState("monthly");
  const optionsSelect = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
    { value: "annually", label: "Annually" },
  ];
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
    <>
      <div className='container mx-auto flex items-center justify-between mb-4'>
        <div><h3 className="font-bold">Tambah Produk</h3></div>
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
                      <label htmlFor="productDescription" className="form-label mb-2">Description</label>
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
                              <div className="text-[60px]">
                                <img
                                  src={iconPictureUpload}
                                  alt="Product preview"
                                  className="w-20 h-20 object-cover rounded-xl"
                                />
                              </div>
                              <p className="flex flex-col items-center mt-2"><span className="text-gray-800 dark:text-white">Drop your image here, or </span><span className="text-primary">Click to browse</span></p>
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
                    <h4 className="mb-6">Attribute</h4>
                    <div className="form-item vertical">
                      <label className="form-label mb-2">Category</label>
                      <div className="select select-md css-b62m3t-container">
                        <span id="react-select-7-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" className="css-7pg0cj-a11yText"></span>
                        <div className="select-control min-h-12 bg-gray-100 dark:bg-gray-700 select__control css-0">
                          <SelectBarCategory
                            options={optionsSelect}
                            defaultValue={optionsSelect[0]}
                            onChange={(opt) => setMode(opt.value)}
                          />

                        </div>
                      </div>
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
          <div className="bottom-0 left-0 right-0 z-10 mt-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 -mx-4 sm:-mx-8 py-4 sticky">
            <div className="container mx-auto"><div className="flex items-center justify-between px-8">
              <span></span>
              <div className="flex items-center">
                <button className="button border dark:bg-gray-700 dark:border-gray-700 dark:ring-white dark:hover:border-white hover:ring-1 dark:hover:text-white dark:hover:bg-transparent dark:text-gray-100 h-12 rounded-xl px-5 py-2 ltr:mr-3 rtl:ml-3 button-press-feedback border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent" type="button" fdprocessedid="j8coy">
                  <span className="flex gap-1 items-center justify-center">
                    <span className="text-lg">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </span>
                    <span>Discard</span>
                  </span>
                </button>
                <button className="button bg-primary hover:bg-primary-mild text-neutral h-12 rounded-xl px-5 py-2 button-press-feedback" type="submit" fdprocessedid="kw49nm">Create</button></div>
            </div>
            </div>
          </div>
        </div>

      </form>
      
    </>
  );
};

export default TambahProdukPages;