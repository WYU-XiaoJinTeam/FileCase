using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FileCase.Models
{
    /// <summary>
    /// 文件分享信息表
    /// </summary>
    [Table("SharesFiles")]
    public class ShareFiles
    {
        /// <summary>
        /// 分享信息表ID
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 分享链接
        /// </summary>
        public string ShareUrl { get; set; }
        /// <summary>
        /// 是否取消分享
        /// </summary>
        public bool IsCancel { get; set; }
        /// <summary>
        /// 分享时间
        /// </summary>
        public DateTime SharedTime { get; set; }
        /// <summary>
        /// 文件ID
        /// </summary>
        public int FileID { get; set; }
    }
}