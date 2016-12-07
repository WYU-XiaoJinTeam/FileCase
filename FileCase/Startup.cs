using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FileCase.Startup))]
namespace FileCase
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
