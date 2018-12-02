using Microsoft.AspNetCore.Mvc;
using NRDShop.Application.main.category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NRDShop.Web.Controllers.category
{
    [Route("/[controller]")]
    public class CategoryController : Controller
    {
        protected readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var category = _categoryService.GetCategory();
                if(category != null)
                    return Ok(category);
            }
            catch(Exception err)
            {
                Console.WriteLine(err.Source);
            }
            return BadRequest();
        }
    }
}
