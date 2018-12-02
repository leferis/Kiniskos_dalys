using Microsoft.AspNetCore.Mvc;
using NRDShop.Application.main.products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NRDShop.Web.Controllers.products
{
    [Route("/[controller]")]
    public class ProductsController : Controller
    {
        protected readonly IProductsService _productsService;
        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var products = _productsService.GetAllProducts();
                if (products != null)
                    return Ok(products);
            }
            catch (Exception err)
            {
                Console.WriteLine(err.Source);
            }
            return Ok("Debilas");
        }
    }
}
