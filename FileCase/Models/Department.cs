using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FileCase.Models
{
    /// <summary>
    /// 部门表
    /// </summary>
    [Table("Departments")]
    public class Department
    {
        /// <summary>
        /// 部门表ID（自增）
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 部门ID
        /// </summary>
        public Guid DeptID { get; set; }
        /// <summary>
        /// 部门编码
        /// </summary>
        public string DeptCode { get; set; }
        /// <summary>
        /// 部门名称
        /// </summary>
        public string DeptName { get; set; }
        /// <summary>
        /// 部门全称
        /// </summary>
        public string DeptFullName { get; set; }
        /// <summary>
        /// 部门级别
        /// </summary>
        public int DeptLevel { get; set; }
        /// <summary>
        /// 父级ID，所属部门ID
        /// </summary>
        public Guid ParentID { get; set; }
        /// <summary>
        /// 父级部门编码
        /// </summary>
        public string ParentDeptCode { get; set; }
        /// <summary>
        /// 部门备注
        /// </summary>
        public string Remark { get; set; }
    }
}