using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FileCase.Models
{
    /// <summary>
    /// 文件信息表
    /// </summary>
    [Table("Files")]
    public class Files
    {
        /// <summary>
        /// 文件ID
        /// </summary>
        public int ID { get; set; }
        /// <summary>
        /// 文件名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 文件后缀名
        /// </summary>
        public string FileExt { get; set; }
        /// <summary>
        /// 文件图标路径
        /// </summary>
        public string FileIcon { get; set; }
        /// <summary>
        /// 文件大小
        /// </summary>
        public int FileSize { get; set; }
        /// <summary>
        /// 文件Md5
        /// </summary>
        public string FileMD5 { get; set; }
        /// <summary>
        /// 文件修改时间
        /// </summary>
        public DateTime ModifyTime { get; set; }
        /// <summary>
        /// 文件创建时间
        /// </summary>
        public DateTime CreateTime { get; set; }
        /// <summary>
        /// 是否删除
        /// </summary>
        public bool IsDelete { get; set; }
        /// <summary>
        /// 是否是文件夹
        /// </summary>
        public bool IsFolder { get; set; }
        /// <summary>
        /// 父级文件id
        /// </summary>
        public int ParentID { get; set; }
        /// <summary>
        /// 文件所属用户ID
        /// </summary>
        public Guid UserID { get; set; }
    }
}