using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FileCase.Models
{
    /// <summary>
    /// 用户表
    /// </summary>
    [Table("Users")]
    public class Users
    {
        /// <summary>
        /// 用户id
        /// </summary>
        public Guid ID { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        public string Password { get; set; }
        /// <summary>
        /// 部门ID
        /// </summary>
        public Guid DeptID { get; set; }
        /// <summary>
        /// 真实姓名
        /// </summary>
        public string TrueName { get; set; }
        /// <summary>
        /// 用户邮箱
        /// </summary>
        public string EMail { get; set; }
        /// <summary>
        /// 用户头像路径
        /// </summary>
        public string IconPath { get; set; }
        /// <summary>
        /// 保密问题
        /// </summary>
        public string PasswordQuestion { get; set; }
        /// <summary>
        /// 保密问题答案
        /// </summary>
        public string PasswordAnswer { get; set; }
        /// <summary>
        /// 是否有效
        /// </summary>
        public bool IsVaild { get; set; }
        /// <summary>
        /// 是否锁住
        /// </summary>
        public bool IsLocked { get; set; }
        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
    }
}