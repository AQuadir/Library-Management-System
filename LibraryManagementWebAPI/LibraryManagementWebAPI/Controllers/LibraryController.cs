using LibraryManagementWebAPI.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        public Context Context;
        public LibraryController(Context context)
        {
            Context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            user.AccountStatus = AccountStatus.UNAPPROVED;
            user.UserType = UserType.STUDENT;
            user.CreatedOn = DateTime.Now;

            Context.Users.Add(user);
            Context.SaveChanges();

            return Ok(@"Thank you for registering.
                        Your account has been sent for approval.
                        Once it is approved, you will get an email.");
        }
        
    }
}
