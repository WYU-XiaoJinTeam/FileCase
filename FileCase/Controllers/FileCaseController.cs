﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;

namespace FileCase.Controllers
{
    [Authorize]
    public class FileCaseController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
