using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FileCase.Models
{
    /// <summary>
    /// 日志表
    /// </summary>
    [Table("Logs")]
    public class Logs
    {
        /// <summary>
        /// 日志ID
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 消息名称
        /// </summary>
        public string Message { get; set; }
        /// <summary>
        /// 操作说明
        /// </summary>
        public string Operation { get; set; }
        /// <summary>
        /// 日志时间
        /// </summary>
        public DateTime LogTime { get; set; }
        /// <summary>
        /// 异常信息
        /// </summary>
        public string Exception { get; set; }
        /// <summary>
        /// 日志级别
        /// </summary>
        public int Level { get; set; }
        /// <summary>
        /// 操作用户
        /// </summary>
        public Guid UserID { get; set; }
    }
}