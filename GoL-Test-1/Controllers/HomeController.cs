using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GoL_Test_1.Models;

namespace GoL_Test_1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public void Start(string name, Coordinates[] coordinates)
        {
            IEnumerable<Coordinates> startValues = coordinates;
            World world = new World(startValues.ToArray());

        }
    }
}
