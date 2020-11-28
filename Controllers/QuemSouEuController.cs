using Microsoft.AspNetCore.Mvc;
using QuemSouEuAPI.Models;

namespace QuemSouEuAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuemSouEuController : ControllerBase
    {
        [HttpGet]
        public QuemSouEuModel Get()
        {
            QuemSouEuModel resultado= new QuemSouEuModel
            {
                nome= "Matheus",
                sobrenome= "Khairallah",
                url= "https://github.com/MatheusKhairallah",
                usuarioGit= "MatheusKhairallah"
            };
            return resultado;
        }
    }
}