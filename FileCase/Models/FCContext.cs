using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace FileCase.Models
{
    /// <summary>
    /// 对数据库表进行操控类
    /// </summary>
    public class FCContext: DbContext
    {
        public DbSet<Users> Users { get; set; }
        public DbSet<Department> Department { get; set; }
        public DbSet<Logs> Logs { get; set; }
        public DbSet<Files> Files { get; set; }
        public DbSet<ShareFiles> ShareFiles { get; set; }
    }
}