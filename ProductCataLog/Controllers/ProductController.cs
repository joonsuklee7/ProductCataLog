using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using ProductCataLog.Models;

namespace ProductCataLog.Controllers
{
    public class ProductController : ApiController
    {
        [HttpGet()]
        [ActionName("GetProducts")]
        public IEnumerable<Models.Product> GetProducts()
        {

            //hard coding some values
            List<Models.Product> productList = new List<Models.Product>();
            productList.Add(new Models.Product()
            {
                name = "Product1",
                description = "First",
                quantity = 1
            });
            productList.Add(new Models.Product()
            {
                name = "Product2",
                description = "second",
                quantity = 3
            });
            productList.Add(new Models.Product()
            {
                name = "Product3",
                description = "Third",
                quantity = 5
            });

            return productList;
        }

        [HttpPost()]
        [ActionName("PostProduct")]
        public List<Models.Product> PostProduct(Models.Product newProduct)
        {  
            List<Models.Product> addedProduct = new List<Models.Product>();
            addedProduct.Add(new Models.Product()
            {
                name = newProduct.name,
                description = newProduct.description,
                quantity = newProduct.quantity
            });
            return addedProduct;
        }
    }
}
